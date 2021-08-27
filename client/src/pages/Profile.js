import React ,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import NavBar from './Navbar'
import NavBarInstructor from './NavBarIstructor'
import Users from './Users'
import Login from './Login'
import { Slider } from '@material-ui/core'
import AboutUs from '../components/AboutUs'



const Profile = ({history}) => {
  
  const role = useSelector(state => state.authReducer.user.role)
  const isAuth = useSelector(state => state.authReducer.isAuth)
 useEffect(() => {
   if(isAuth && role=="admin")
    history.push('/Users')
   
   else
   if(isAuth && role=="instructor")
    history.push('/Courses')

   else
   history.push('/Courses_Student')

 }, [isAuth, history]) 
  
    return (
        <div>
            {role=="instructor"?<NavBarInstructor></NavBarInstructor>:
           <NavBar></NavBar>}
         
        </div>
    )
}

export default Profile
