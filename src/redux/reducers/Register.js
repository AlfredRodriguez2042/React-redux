import { USER_REGISTER, USER_ERROR} from '../actions/types'

const DEFAULT_STATE = {
    registred: false,
     errorMessage:[]
}

const register = (state= DEFAULT_STATE, action)=>{
    switch(action.type){
        case USER_REGISTER:
            return { ...state, registred: true, errorMessage: action.payload}
        case USER_ERROR:
            return { ...state, errorMessage: action.payload}   
        default:
            return state
    }

}

export default register