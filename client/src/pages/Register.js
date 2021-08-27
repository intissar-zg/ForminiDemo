
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


import {registerUser} from '../actions/authAction'
import ('../stylelogin.css')

const Register = ({match}) => {
  const [input, setInput] = useState({
    firstname :'',
    lastname :'',
    email :'',
    adress :'',
    password :'',
    role :'',
    tel:''
  });
   const dispatch = useDispatch()
   const history = useHistory()
  const handleChange = (e) => {
    setInput({...input,[e.target.name]:e.target.value});
  }
  const auth = useSelector(state => state.authReducer)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({...input,role:match.params.role},history))
  }

  const handleCancel = () => {
    setInput({...input});
  }
  return (
   
    <div className="body"> 
    <div className="container">
   <div className="d-flex justify-content-center h-100">
     <div className="card1">
       <div className="card-header">
         <h3>Register</h3>
         
       </div>
       <div className="card-body">
         <form>
           <div className="input-group form-group">
             <input type="text" className="form-control" name="firstname" placeholder="Your FirstName" onChange={(e)=>handleChange(e)} />
           </div>
           <div className="input-group form-group">
             <input type="text" className="form-control" name="lastname" placeholder="lastname" onChange={(e)=>handleChange(e)} />
           </div>
           <div className="input-group form-group">
             <input type="text" className="form-control" name="email" placeholder="your Email" onChange={(e)=>handleChange(e)} />
           </div>
           <div className="input-group form-group">
             <input type="text" className="form-control" name="adress" placeholder="Your Adress" onChange={(e)=>handleChange(e)} />
           </div>
           <div className="input-group form-group">
             
             <input type="password" className="form-control" name="password" placeholder="your password" onChange={(e)=>handleChange(e)} />
           </div>
           <div className="input-group form-group">
             
             <input type="text" className="form-control" name="tel" placeholder="your telephone" onChange={(e)=>handleChange(e)} />
           </div>
           <div className="form-group">
             <div className="flexInput">
             <input type="submit"  defaultValue="Login" className="btn float-right login_btn" onClick={(e)=>handleSubmit(e)} value="Register"/>
             <input type="submit"  defaultValue="Login" className="btn float-right login_btn" onClick={()=>handleCancel()} value="Cancel"/>
           </div>
           </div>
         </form>
         <div>  <h2>{auth.errors && auth.errors.map(el=>el.msg)}</h2></div>
       </div>
     </div>
   </div>
 </div>
   </div>
)
}

export default Register



