import {combineReducers}from 'redux'
import authReducer from './authReducer'
import adminReducer from './adminReducer'
import courseReducer from './courseReducer'
import categorieReducer from './categorieReducer'
export default combineReducers ({authReducer,adminReducer,courseReducer,categorieReducer});