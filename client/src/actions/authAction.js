import {REGISTER_USER,REGISTER_FAIL, LOGIN_USER, LOGIN_FAIL, LOGOUT,GET_USER_SUCCESS,GET_USER_FAILED} from './types'
import axios  from 'axios'
export const registerUser = (data,history) => async(dispatch) => {
try {
    const res= await axios.post('/users/newUser',data)
    console.log(res.data)
    
    dispatch({type:REGISTER_USER, payload:res.data})

    history.push('/profile')
} 
catch (error) {
    dispatch({type:REGISTER_FAIL,payload:error.response.errors})
}
}

export const loginUser = (data,history) => async(dispatch) => {
    try {
        const res= await axios.post('/users/login',data)
       
        dispatch({type:LOGIN_USER, payload:res.data})
        history.push('/profile')
    } 
    catch (error) {
        dispatch({type:LOGIN_FAIL, payload:error?.response?.data?.message })
    }
    }

    export const logout = (history) => async(dispatch) => {
        try {
            dispatch({type:LOGOUT})
            history.push('login')
        } 
        catch (error) {
            console.log(error)
        }
        }

    

        