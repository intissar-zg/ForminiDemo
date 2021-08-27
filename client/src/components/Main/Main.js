import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import socket from '../../socket';
import { useSelector } from 'react-redux'
import NavBar from '../../pages/Navbar'
import NavBarInstructor from '../../pages/NavBarIstructor'

const Main = (props) => {
  const role = useSelector(state => state.authReducer.user.role)
  const isAuth = useSelector(state => state.authReducer.isAuth)
  const name = useSelector(state => state.authReducer.user.firstname)
  const roomRef = useRef();
  const userRef = useRef();
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    socket.on('FE-error-user-exist', ({ error }) => {
      if (!error) {
        const roomName = roomRef.current.value;
        const userName = userRef.current.value;

        sessionStorage.setItem('user', userName);
        props.history.push(`/room/${roomName}`);
      } else {
        setErr(error);
        setErrMsg('User name already exist');
      }
    })
    return () => {
      console.log('=======Main unmouted=========')
     socket.emit('end')
    }
  },[props.history])

  function clickJoin() {
    const roomName = roomRef.current.value;
    const userName = userRef.current.value;
    

    if (!roomName || !userName) {
      setErr(true);
      setErrMsg('Enter Room Name or User Name');
    } else {
      socket.emit('BE-check-user', { roomId: roomName, userName });
      props.history.push(`/room/${roomName}`)
    }
  }

  return (
    <MainContainer>
    {isAuth && role=="instructor"?<NavBarInstructor></NavBarInstructor>:
    <NavBar></NavBar>}
   
    
      <Row>
        <Label htmlFor="roomName">Room</Label>
        <Input type="text" id="roomName" ref={roomRef} />
      </Row>
      <Row>
        <Label htmlFor="userName">User</Label>
        <Input type="text" id="userName" ref={userRef} />
      </Row>
      <Row>
      <JoinButton onClick={clickJoin}> Join your class</JoinButton>
      {err ? <Error>{errMsg}</Error> : null}
      </Row>
      </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-top:150px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin-top: 15px;
  line-height: 35px;
`;

const Label = styled.label`
font-size:large ;`;

const Input = styled.input`
  width: 150px;
  height: 35px;
  margin-left: 15px;
  padding-left: 10px;
  outline: none;
  border-color: grey;
  border-radius: 5px;
`;

const Error = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: #e85a71;
`;

const JoinButton = styled.button`
  height: 40px;
  margin-top: 35px;
  outline: none;
  border: none;
  border-radius: 15px;
  color: #d8e9ef;
  background-color: goldenrod;
  font-size: 25px;
  font-weight: 500;
  width:300px;
  align-items: center;

  :hover {
    background-color: #7bb1d1;
    cursor: pointer;
  }
`;

export default Main;
