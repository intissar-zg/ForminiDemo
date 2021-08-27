import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
const InstructorRoute = ({component:Component, ...rest}) => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
  const role = useSelector(state => state.authReducer.user.role)
//&& role =='admin'
    return (
       <Route {...rest} render ={ props=> isAuth && role =='instructor' ? <Component {...props} />:
        <Redirect to='/login'/>} />
    )
}

export default InstructorRoute
