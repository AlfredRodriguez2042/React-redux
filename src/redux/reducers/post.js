import { PRODUCT_ERROR,PRODUCT_SUCCESS} from '../actions/types'
const DEFAULT_STATE = {
    image: null,
    name:"",
    price: "",
    stock:"",
    category:"",
    errorMessage:''
}



function reducer( state = DEFAULT_STATE, action){
    switch(action.type){
        case PRODUCT_SUCCESS:
            return {
                ...state,
            }
        case PRODUCT_ERROR:
            return {
                ...state, errorMessage: action.payload
            }    
        default:
        return state
    }
}

export default reducer