import React, { Component } from 'react'
import { connect } from 'react-redux'
import Strain from './Strain'
import './GetAll.css'
export class GetAll extends Component {
    render() {
        return (
            <div className='logo'>
                {/* <h1>Welcome back {this.props.authUser.user.username}! </h1> */}
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
