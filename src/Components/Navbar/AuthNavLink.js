import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'


class AuthNavLinks extends Component {
    render() {
        return (
            <ul className="nav__ul">
                <li>
                    <NavLink
                        to="/user-profile"
                        className="navbar"
                        activeStyle={{ fontWeight: "bold" }}
                        activeClassName="selected"
                    >
                    Welcome {this.props.username}
                    </NavLink>
                </li>
                <li className="left-link">
                    <NavLink
                        to='/strain'
                        className='navbar'
                        activeStyle={{fontWeight: 'bold'}}
                        activeClassName='selected'
                        
                    >
                        Strains
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className="navbar"
                        activeStyle={{ fontWeight: "bold" }}
                        activeClassName="selected"
                        onClick={() => this.props.logout()}
                    >
                    logout
                    </NavLink>
                </li>
            </ul>
        );
    }
}

export default AuthNavLinks;