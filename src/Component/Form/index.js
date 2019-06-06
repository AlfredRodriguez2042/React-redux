import React from 'react'
//import axios from 'axios'

import Validation from './validation';
import authValidation from './authValidate'


const AddForm= ()=>{ 
    const INITIAL_STATE = {
        name:"",
        username:"",
        email:"",
        password:"",
        errors:{}
    }

const { handleSubmit, handleChange, handleBlur, isSubmit, values, errors} = Validation(INITIAL_STATE, authValidation)
 

return( 
    <form onSubmit={handleSubmit}>
    <div className="imputs">
    <input
       onChange={handleChange}
       onBlur={handleBlur}
       className={errors.name && 'error-imput'}
       type="text"
       name="name"
       placeholder="name" 
       value={values.name}
      />{errors.name && <p className="error-text">
          {errors.name}
      </p>} <br/>
      <input
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.username && 'error-imput'}
      type="text"
      name="username"
      placeholder="username" 
      value={values.username}
     />{errors.username && <p className="error-text">
     {errors.username}
 </p>} <br/>
     <input
     onChange={handleChange}
     onBlur={handleBlur}
     className={errors.email && 'error-imput'}
     type="text"
     name="email"
     placeholder="email" 
     value={values.email}
    />  {errors.email && <p className="error-text">
    {errors.email}
</p>} <br/>
    <input
    onChange={handleChange}
    onBlur={handleBlur}
    className={errors.password && 'error-imput'}
    type="password"
    name="password"
    placeholder="password" 
    value={values.password}
   />{errors.password && <p className="error-text">
   {errors.password}
</p>} <br/>

      <button 
      type="submit"
      disabled={isSubmit}
      >add todo</button>
    </div>
        
    </form>
)
}
export default AddForm
  