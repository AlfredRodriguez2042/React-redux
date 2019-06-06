import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer} from 'redux-form'

import post from './reducers/post'
//import comments from './reducers/comments'
import register from './reducers/Register'
import login from './reducers/Login'

const jwToken = localStorage.getItem('User_token')

const initialState = {
    auth:{
         token: jwToken,
        isAutenticated: jwToken ? true : false
    }
}

const reducer = combineReducers({
     initialState,
     form: formReducer,
     register,
     login,
     post,
     //comments
})



// 1* reducer 2* estado inicial * middlewares
  const store = createStore(
       reducer,
      //initialState,
     applyMiddleware(thunk)
)

export default store


