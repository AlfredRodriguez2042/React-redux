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
    <nav className="main_menu">
        <ul className="menu_left">
         <li className="menu_item"> <Link to="/">HOME</Link> </li>
         { props.isAuth
         ?<>
         <li className="menu_item"><Link to="/about">ABOUT</Link></li>            <li className="menu_item"><Link to="/chapters">CHAPTERS</Link></li>
          <li className="menu_item"><Link to="/contact">CONTACT</Link></li>
         </>
         :null}
        </ul>
        <ul className="menu_right">
            { !props.isAuth
            ? <>
            <li className="menu_item"><Link to="/singup">REGISTER</Link> </li>
            <li className="menu_item"><Link to="/login">LOGIN</Link> </li>
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