import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteUsers } from '../actions/userAction'

const UserList = ({user}) => {
  
const divStyle =  {
    display:"contents"

}
const dispatch = useDispatch();
  const handleDelete = (id) => {
    let conf = window.confirm("Are you sure to delete");
    if (conf) {
      dispatch(deleteUsers(id));
     // history.push("/admin-dashboard/users");
    }
  };
//const user = useSelector(state => state.adminReducer.users)
 //const user = useSelector(state => state.authReducer.user)
    return (
        <div style={divStyle}>
     

        <tr>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td> 
            {/* <Link to={"users/edit/"+props.todo._id}>Edit</Link> */}
         <button className="button muted-button" className="btn btn-success"  onClick={() => {
                    handleDelete(user._id);
                  }}>Delete</button>
            
       </td>
    </tr>   
        </div>
    )
}

export default UserList
