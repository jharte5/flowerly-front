import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getAllStrains} from '../../redux/actions/strainActions'
import './GetAll.css'

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
                            <h2 className="strain-name">{entry.name}</h2>
                            <ul>
                                <h3 className="positive-effects">Positive Effects</h3>
                                {entry.info.effects.positive.map(effect=>{
                                return(
                                    <li className="positive-effects">{effect}</li>
                                )
                            })}</ul>
                            <ul>
                                <h3 className="negative-effects">Negative Effects</h3>
                                {entry.info.effects.negative.map(effect=>{
                                return(
                                    <li className="negative-effects">{effect}</li>
                                )
                            })}</ul>
                            <ul>
                                <h3 className='medicinal'>For Medicinal Use</h3>
                                {entry.info.effects.medical.map(effect=>{
                                return(
                                    <li className='medicinal'>{effect}</li>
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

