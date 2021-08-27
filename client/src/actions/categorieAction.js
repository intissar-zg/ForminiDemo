import {GET_CATEGORIE_SUCCESS,GET_CATEGORIE_FAIL,
    ADD_CATEGORIE_FAIL,DELETE_CATEGORIE_SUCCESS,DELETE_CATEGORIE_FAIL} from './types';
import axios  from 'axios'

export const get_Categorie = () => async(dispatch) => {
    try {
        const res= await axios.get('/categories')

        dispatch({type:GET_CATEGORIE_SUCCESS , payload:res.data})
    } 
    catch (error) {
        dispatch({type:GET_CATEGORIE_FAIL,payload:error})
    }
    }

    export const add_Categorie = (data) => async(dispatch) => {
        const newData = {...data}
        try {
            const res= await axios.post('/Categories/newcategorie',newData,
            {headers:{'auth-token':localStorage.getItem('auth-token')},
            });
    
            dispatch(get_Categorie())

        } 
        catch (error) {
            dispatch({type:ADD_CATEGORIE_FAIL,payload:error})
        }
        }
        export const delete_Categorie = (id) => async(dispatch) => {
            try {
                const res= await axios.delete(`/Categories/deletecategorie/${id}`);
                dispatch({type:DELETE_CATEGORIE_SUCCESS,payload:res.data})
                dispatch(get_Categorie())
    
            } 
            catch (error) {
                dispatch({type:DELETE_CATEGORIE_FAIL,payload:error})
            }
            } 