import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/authUserActions'
import AuthNavLink from './AuthNavLink'
import UnAuthNavLink from './UnAuthNavLink'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        const { isAuthenticated, user} = this.props.authUser
        return (
            <div>
                <header>
                    <nav>
                        {user && isAuthenticated ? (
                            <AuthNavLink
                                {...user}
                                {...isAuthenticated}
                                logout={this.props.logout}
                            />
                        ): (
                        <UnAuthNavLink />
                        )}
                    </nav>
                </header>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.authUser,
    }
}


export default connect(mapStateToProps, { logout })(Navbar)