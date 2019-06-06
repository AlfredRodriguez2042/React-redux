import  { useState, useEffect } from 'react'
import axios from 'axios'

const Validation = (initialState, validate)=>{

    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmit, setSubmit] = useState(false)

    useEffect(()=>{
        if(isSubmit){
         const noError = Object.keys(errors).length === 0
         if(noError){
            console.log("auth: ", values.name, values.username, values.password, values.email)
            setSubmit(false)
         }else{
             setSubmit(false)
         }
        }

    },[errors])
    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleBlur =()=>{
        const validateErrors = validate(values)
        setErrors(validateErrors)

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const validationErrors = validate(values)
        setErrors(validationErrors)
        setSubmit(true)
        const User = {
            username: values.username,
            name: values.name,
            email: values.email,
            password: values.password
        }
        fetch('http://localhost:5000/user', {
            method: 'Post',
            body: JSON.stringify(User),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res =>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))

    }
    return { handleSubmit, handleChange, handleBlur, isSubmit, values, errors}
}

export default Validation