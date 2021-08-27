import '../App.css';
import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import UserList from '../components/UserList'
import { useDispatch } from 'react-redux'
import {getUsers} from '../actions/userAction'
import {Link} from 'react-router-dom';
import {logout} from '../actions/authAction'
import Button from '@material-ui/core/Button';

import Filter from '../components/Filter';
import NavBarAdmin from './NavBarAdmin';

const Users = ({history}) => {
    const dispatch = useDispatch()
    const role = useSelector(state => state.authReducer.user.role)
useEffect(() => {
    dispatch(getUsers())
}, [])

const users = useSelector(state => state.adminReducer.users)
const isAuth = useSelector(state => state.authReducer.isAuth)
//const users = useSelector(state => state.authReducer.user)

const [search, setsearch] = useState("")
  const searchhandle=(search)=>{
    setsearch(search)

  } 
    return (
        <div>
          <NavBarAdmin></NavBarAdmin>
          <div className="position">
            <h1>LIST OF ALL USERS</h1>
            
      <div className="flexRole">
      
             <Filter search={search}   searchkey={searchhandle} ></Filter> 
             </div>
             <div className="content">
            <table>
 <tr >
    <th>Firstname</th>
    <th>Lastname</th>
    <th>email</th>
    <th>role</th>
  </tr>
         {users.filter(el=>el.role.toLowerCase().includes(search.toLowerCase())).map(user=><UserList key={user._id} user={user}></UserList>)}  
         </table>
         </div>

         </div>
        </div>
    )
}


export default Users
