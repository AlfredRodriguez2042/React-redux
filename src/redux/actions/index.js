 import axios from 'axios'
import { USER_REGISTER, USER_ERROR } from './types'

export const signUp = (data, props)=>{
    return async (dispatch) =>{
        try {
           const res = await axios.post('http://localhost:5000/user',data )
          
          setTimeout(()=> props.history.push("/login"), 3000)
           console.log('response: ',res)
           
           dispatch({
               type: USER_REGISTER,
               payload: " registred succes" //res.data
           })
           console.log('DISPATCH :', res.data )

        } catch (error) {
            dispatch({
                type: USER_ERROR,
                payload: error.response.data.message
            })
            console.log('err:', error)
        }

    }
 
}