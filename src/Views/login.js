import React from 'react'
import { Field, reduxForm } from 'redux-form' // handleSubmit property
import { connect } from 'react-redux'
import { compose } from 'redux'
import FacebookLogin  from 'react-facebook-login' //  the Id is only for educational purposes
import GoogleLogin from 'react-google-login' //  the Id is only for educational purposes, don't  copy create you selft


import { signIn, oauthGoogle, oauthFacebook } from '../redux/actions/Login'



const Login = (props) => {

const handleOnSubmit = async (data)=>{       
        console.log('submiting:', data)
      await props.signIn(data,props)
     // props.history.push('/')
      
}

const responseGoogle = async (res)=>{
      console.log("Google",res)
      await props.oauthGoogle(res.accessToken,props)
}
    
 const responseFacebook = async (res)=>{
      console.log("Facebook",res)
      await props.oauthFacebook(res.accessToken,props)
}


const  { handleSubmit } = props // props of redux form
    
    return (
        <div>
            <h1> WELLCOME..!</h1>
            <div> 
            <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div>
        <label htmlFor="username">User name</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      { props.errorMessage ?
      <p>{props.errorMessage}</p>
      :null}
      <button type="submit">Submit</button>
    </form>
            </div>
        <div className="social-login">
          <div> Or sign In usin third-party services </div>
          <FacebookLogin
          appId="171335970085090" // Don't use this id, create you selft
          autoLoad={false}
          textButton="Facebook"
          fields="name,email,picture"
          callback={responseFacebook}
          //cssClass="" // custom class
          />
          <GoogleLogin
          clientId="499420307488-hj9l9h3amt5into76m9i0ntkaqcg9q4t.apps.googleusercontent.com" // Don't use this id, create you selft  
          buttonText="Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
         // className="" // custom class
          />
          </div>    
        </div>
    )
}  

const mapStateToProps = (state)=>{
   return{
       errorMessage: state.login.errorMessage
   }

}

const mapDispatchToProps = {
    signIn,
    oauthGoogle,
    oauthFacebook

}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    reduxForm({form: 'signIn'})
)(Login)