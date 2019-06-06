import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn,signOut} from '../../redux/actions/Login'



const Menu = (props)=>{ 

const signOut = ()=>{
    props.signOut()
    props.history.push('/')
}  



   return(
    <nav>
        <ul>
         <li> <Link to="/">HOME</Link> </li>
         { props.isAuth
         ?<>
         <li><Link to="/about">ABOUT</Link></li>            <li><Link to="/chapters">CHAPTERS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
         </>
         :null}
        </ul>
        <ul>
            { !props.isAuth
            ? <>
            <li><Link to="/singup">REGISTER</Link> </li>
            <li><Link to="/login">LOGIN</Link> </li>
            </>
            :<li><Link to="/signout" onClick={signOut}>LOGOUT</Link> </li>}
        </ul>
    </nav>
    )
}

const mapStateToProps = (state)=>{
    return{
        isAuth: state.login.auth
    }

}

const mapDispatchToProps = {
    signIn,
    signOut
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu)