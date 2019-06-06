import React from 'react'
import logo from '../../logo.svg'

import Menu from './Menu'


const Header = ()=>(
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Menu/>
    </header>
)

export default Header