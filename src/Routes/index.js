import React from 'react'
import { Switch, Route} from 'react-router-dom'

//Paths
import Home from '../Views/Home'
import About from '../Views/About'
import Chapters from '../Views/Chapters'
import Contact from '../Views/Contact'
import Page404 from '../Views/Page404'
import Login from '../Views/login'
import register from '../Views/register';


const AppRoutes = ()=>(
     
         <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/about' component={About} />
             <Route exact path='/chapters' component={Chapters} />
             <Route exact path='/contact' component={Contact} />
             <Route exact path='/singup' component={register} />
             <Route exact path='/login' component={Login} />  
             <Route component={Page404} />
         </Switch>
)

export default AppRoutes