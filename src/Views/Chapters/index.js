import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form' // handleSubmit property
import { connect } from 'react-redux'
import { compose } from 'redux'
import axios from 'axios'

import { Post } from '../../redux/actions/Post'


const Chapters = (props) => {
 
const [ values, setValues] = useState({selected:null})

const onChangeInput = (e)=>{
 //console.log(e.target.files[0]) 
     setValues({
       
       selected:e.target.files[0]})
}

const handleOnSubmit = async (data)=>{  
  
        console.log('submiting:', data)
     await props.Post(data)

      
    }
const  {handleSubmit} = props

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({ 
  input: { value: omitValue, onChange, onBlur, ...inputProps }, 
  meta: omitMeta, 
  ...props 
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      name="image"
      {...props.input}
      {...props}
    />
  );
};

    
    return (
        <div>
            <h1> register Post now!</h1>
            <div> 
            <form onSubmit={handleSubmit(handleOnSubmit)} encType="multipart/form-data">
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="price">price</label>
        <Field name="price" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <Field name="category" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="stock">stock</label>
        <Field name="stock" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="image">imagen</label>
        <input name="image" onChange={onChangeInput}  multiple type="file"/> 
      </div>
     { props.errorMessage
       ? <p>{props.errorMessage}</p>
       :null}
      <button type="submit">Submit</button>
    </form>
            </div>
        </div>
    )
}  

const mapStateToProps = (state)=>{
   return{
       errorMessage: state.post.errorMessage
   }

}

const mapDispatchToProps = {
    Post,

}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    reduxForm({form: 'Post'})
)(Chapters)