import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getAllStrains} from '../../redux/actions/strainActions'

export class GetAll extends Component {

    state={
        searchQuery: '',

    }

    handleSearch=(event)=>{
        this.setState({searchQuery: event.target.value})
    }
    componentDidMount() {
        this.props.getAllStrains()
    }
    
    render() {
        // this.props.getAllStrains().map()
        console.log(this.props)
        return (
            <div>
                <input value={this.state.searchQuery} onChange={this.handleSearch}/>
                {this.props.allStrains.filter(item=>{
                    if(!this.state.searchQuery){
                        return item
                    }else{
                        if(item.name.toLowerCase().includes(this.state.searchQuery)){
                            return item
                        }
                    }
                }).map((entry)=>{
                    return(
                        <>
                            <div>{entry.name}</div>
                            <ul>{entry.info.effects.positive.map(effect=>{
                                return(
                                    <li>{effect}</li>
                                )
                            })}</ul>
                        </>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allStrains: state.strainR.allStrains,

})



export default connect(mapStateToProps, {getAllStrains})(GetAll)

