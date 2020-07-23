import React, { Component } from 'react'
import { connect } from 'react-redux'
import Race from './Race'
import './GetAll.css'

export class GetRace extends Component {
    render() {
        return (
            <div className='logo'>
                <h1>High {this.props.authUser.user.username}!</h1>
                <h2>Search cannabis by Race(Sativa, Indica, Hybrid) here</h2>
                <div>
                    <Race />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authUser: state.authUser,
    searchByRace: state.searchByRace
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GetRace)
