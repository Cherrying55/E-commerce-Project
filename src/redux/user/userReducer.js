import UserActionTypes from "./user.actiontypes"

const userReducer = (state = initialState, action) => {
    if(action.type === UserActionTypes.LOGIN){
   return {...state, currentUser: action.payload.currentUser}; 
 }
   return state; 
 }
 
 const initialState = {
   currentUser: null
 }

 export default userReducer