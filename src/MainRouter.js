import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Toastify from './Components/Toastify/Toastify'

const Signup = React.lazy(() => import('./Components/Signup/Signup'));
const Navbar = React.lazy(() => import('./Components/Navbar/Navbar'));
const Login = React.lazy(() => import('./Components/Login/Login'));
const Footer = React.lazy(() => import('./Components/Footer/Footer'))
const Strain = React.lazy(() => import('./Components/Strain/Strain'))

export default class MainRouter extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Toastify />
                <Switch>
                    <Route exact path='/sign-up' component={Signup}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/strain' component={Strain}/>
                </Switch>
                <Footer />
            </>
        )
    }
}
