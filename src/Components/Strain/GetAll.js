import React, { Component } from 'react'
import { connect } from 'react-redux'
import Strain from './Strain'
import './GetAll.css'
export class GetAll extends Component {
    render() {
        return (
            <div className='logo'>
                <h1 className='head-text'>Welcome {this.props.authUser.user.username}! </h1>
                <h3 className='head-text'>Search by strain</h3>
                <div>
                    <Strain />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authUser: state.authUser,
    // searchByStrain: state.searchByStrain,
    searchByRace: state.searchByRace
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GetAll)
