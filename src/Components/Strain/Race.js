import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GET_BY_RACE} from '../../redux/constants/strainConstants'

export class GetAll extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps) (GetAll)
