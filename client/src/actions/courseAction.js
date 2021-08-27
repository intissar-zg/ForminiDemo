import {GET_COURSE_SUCCESS,GET_COURSE_FAIL,ADD_COURSE_SUCCESS,
    ADD_COURSE_FAIL,DELETE_COURSE_SUCCESS,DELETE_COURSE_FAIL} from './types';
import axios  from 'axios'

export const get_Course = () => async(dispatch) => {
    try {
        const res= await axios.get('/Courses/')

        dispatch({type:GET_COURSE_SUCCESS , payload:res.data})
    } 
    catch (error) {
        dispatch({type:GET_COURSE_FAIL,payload:error})
    }
    }

    export const add_course = (data,owner,categorie) => async(dispatch) => {
        console.log(categorie)
        const newData = {...data,owner,categorie}
        try {
            const res= await axios.post('/Courses/newcourse',newData,
            {headers:{'auth-token':localStorage.getItem('auth-token')},
            });
    
            dispatch(get_Course())

        } 
        catch (error) {
            dispatch({type:ADD_COURSE_FAIL,payload:error})
        }
        }
        export const delete_course = (id) => async(dispatch) => {
            try {
                const res= await axios.delete(`/Courses/deletecourse/${id}`);
                dispatch({type:DELETE_COURSE_SUCCESS,payload:res.data})
                dispatch(get_Course())
    
            } 
            catch (error) {
                dispatch({type:DELETE_COURSE_FAIL,payload:error})
            }
            } 