import {GET_USER_SUCCESS,GET_USER_FAILED,DELETE_USER_FAILED,DELETE_USER_SUCCESS} from './types'
import axios  from 'axios'
export const getUsers = () => async(dispatch) => {
    try {
        const res= await axios.get('/admins/users');
        dispatch({type:GET_USER_SUCCESS,payload:res.data});
        
        
    } 
    catch (error) {
        dispatch({type:GET_USER_FAILED, payload:error.response.data.message })
    }
    }

    export const deleteUsers = (id) => async(dispatch) => {
        try {
            const res= await axios.delete(`/admins/deleteuser/${id}`);
            dispatch({type:DELETE_USER_SUCCESS,payload:res.data});
            dispatch(getUsers());
            
            
        } 
        catch (error) {
            dispatch({type:DELETE_USER_FAILED, payload:error.response.data.message })
        }
        }
