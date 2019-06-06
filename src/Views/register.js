import React from 'react'
import { Field, reduxForm } from 'redux-form' // handleSubmit property
import { connect } from 'react-redux'
import { compose } from 'redux'

import {signUp} from '../redux/actions'

const Register = (props) => {

    const handleOnSubmit = async (data)=>{       
        console.log('submiting:', data)
      await props.signUp(data, props)
      
    }
    const  {handleSubmit} = props
    
    return (
        <div>
            <h1> register now!</h1>
            <div> 
            <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="username">User name</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      { props.errorMessage ?
      <p>{props.errorMessage}</p>
      :null}
      <button type="submit">Submit</button>
    </form>
            </div>
        </div>
    )
}  

const mapStateToProps = (state)=>{
   return{
       errorMessage: state.register.errorMessage
   }

}

const mapDispatchToProps = {
    signUp,

}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    reduxForm({form: 'signup'})
)(Register)