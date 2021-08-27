import {
    GET_CATEGORIE_SUCCESS,GET_CATEGORIE_FAIL, ADD_CATEGORIE_SUCCESS,ADD_CATEGORIE_FAIL,DELETE_CATEGORIE_SUCCESS,DELETE_CATEGORIE_FAIL
  } from "../actions/types";
  
  const initState = {
    categories:[],
    errors: null
  };
  
  const categorieReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_CATEGORIE_SUCCESS :
     return {...state, categories:payload,errors: null }
     case ADD_CATEGORIE_FAIL:
     case GET_CATEGORIE_FAIL :
    case DELETE_CATEGORIE_FAIL :
     return {...state, errors: payload }
     case DELETE_CATEGORIE_SUCCESS:
      return {
        ...state,
        categories: state.categories.filter((elm) => elm._id !== payload._id),
        errors: null,
      }
      default:
        return state;
    }
  };
  export default categorieReducer;
  