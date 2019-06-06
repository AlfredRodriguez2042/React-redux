import axios from 'axios'
import { USER_LOGIN, USER_LOGIN_ERROR, USER_SIGN_OUT } from './types'

 export const signIn = (data,props)=>{
    return async (dispatch)=>{
        try {
            const res = await axios.post('http://localhost:5000/auth/login',data )
            setTimeout(()=>props.history.push('/'), 2000)
            console.log(res)

            dispatch({
                type: USER_LOGIN,
                payload: res.data.token //'loading..' 
            })
            localStorage.setItem('User_token', res.data.token)


        } catch (error) {
            dispatch({
                type: USER_LOGIN_ERROR,
                payload: error.response.data.message//'User or Password incorrect'
            })
            console.log('eror: ',error)
        }
    }
  
}

export const oauthGoogle = (data,props)=>{
    return async (dispatch)=>{
        console.log('data-gogle',data )
        const res = axios.post('http://localhost:5000/auth/login/google',{ access_token: data})
        setTimeout(()=>props.history.push('/'), 2000)
        console.log(res)

        dispatch({
            type: USER_LOGIN,
            payload: res.data.token
        })

        localStorage.setItem('User_token', res.data.token )
    }
}

export const oauthFacebook = (data,props)=>{
    return async (dispatch)=>{
        //console.log('data-gogle',data )
        const res = axios.post('http://localhost:5000/auth/login/facebook',{ access_token: data})
        setTimeout(()=>props.history.push('/'), 2000)
        console.log(res)

        dispatch({
            type: USER_LOGIN,
            payload: res.data.token
        })

        localStorage.setItem('User_token', res.data.token )
    }
}

export const signOut = ()=>{
    return (dispatch)=>{
        localStorage.removeItem('User_token')
        
        dispatch({
            type: USER_SIGN_OUT,
            payload: ''
        })
    }
}