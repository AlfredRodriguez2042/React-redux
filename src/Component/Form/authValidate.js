export default function authValidate(values){
    let errors = {}
    if(!values.email){
        errors.email = 'required email'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Invalid email addres'
    }
    if(!values.password){
        errors.password = 'requiered password'
    }else if(values.password.length <5){
        errors.password = 'password must be at least 5 characters'
    }
    return errors
}