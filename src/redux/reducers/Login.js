import { USER_LOGIN, USER_LOGIN_ERROR, USER_SIGN_OUT} from '../actions/types'

const DEFAULT_STATE = {
    auth: false,
    token: "",
    errorMessage: ""
}

 const reducerLogin = (state = DEFAULT_STATE, action)=>{
     switch(action.type){
         case USER_LOGIN:
             return {
                 ...state, auth: true, token: action.payload, errorMessage:"success"
             }
         case USER_SIGN_OUT:
             return {
                 ...state, token: action.payload, auth: false, errorMessage: ''
             }    
         case USER_LOGIN_ERROR:
             return{
                 ...state, errorMessage: action.payload
             }    
         default:
         return state
     }

}

export default reducerLogin