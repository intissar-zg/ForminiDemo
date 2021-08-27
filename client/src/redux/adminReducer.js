import {
    GET_USER_FAILED,
    GET_USER_SUCCESS,
    DELETE_USER_SUCCESS,
    
  } from "../actions/types";
  const initState = {
  users:[],
  errors:null
  };
  
  const adminReducer = (state = initState, { type, payload }) => {
    switch (type) {
     
      case GET_USER_SUCCESS:
          return {...state,users:payload,errors:null}
          case GET_USER_FAILED:
       return {...state,errors:payload}
       case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((elm) => elm._id !== payload._id),
        errors: null,
      }
      case GET_USER_FAILED:
        return {...state,errors:payload}
      default:
        return state;
    }
  };
  export default adminReducer;
  