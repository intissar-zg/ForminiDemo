import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
const AdminRoute = ({component:Component, ...rest}) => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
  const role = useSelector(state => state.authReducer.user.role)
//&& role =='admin'
    return (
       <Route {...rest} render ={ props=> isAuth && role =='admin' ? <Component {...props} />:
        <Redirect to='/login'/>} />
    )
}

export default AdminRoute
