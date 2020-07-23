import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllStrains } from "../../redux/actions/strainActions";
import "./GetAll.css";

export class GetRace extends Component {
  state = {
    searchQuery: "",
  };

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };
  componentDidMount() {
    this.props.getAllStrains();
  }

  render() {
    // this.props.getAllStrains().map()
    console.log(this.props);
    return (
      <div>
        <div>
          <input
            className="search"
            value={this.state.searchQuery}
            onChange={this.handleSearch}
          />
        </div>

        {/* <br />
                <div className='card'>
                    <h1 className='card-title'>name</h1>
                    <p className='card-content'>positive effects</p>
                    <p className='card-content'>negative effects</p>
                    <p className='card-content'>medicinal uses</p>
                </div>
                <div className='card'>
                    <h1 className='card-title'>name</h1>
                    <p className='card-content'>positive effects</p>
                    <p className='card-content'>negative effects</p>
                    <p className='card-content'>medicinal uses</p>
                </div> */}
        <div className="card-flex">
          {this.props.allStrains
            .filter((item) => {
              if (!this.state.searchQuery) {
                return item;
              } else {
                if (
                  item.info.race.toLowerCase().includes(this.state.searchQuery)
                ) {
                  return item;
                }
              }
            })
            .map((entry, i) => {
              return (
                <div className="card" key={i}>
                  <h2 className="strain-name card-title">{entry.name}</h2>
                  <ul className="card-body">
                    <h3 className="positive-effects card-text">
                      Positive Effects
                    </h3>
                    {entry.info.effects.positive.map((effect) => {
                      return (
                        <li className="positive-effects card-text">{effect}</li>
                      );
                    })}
                  </ul>
                  <ul>
                    <h3 className="negative-effects card-text">
                      Negative Effects
                    </h3>
                    {entry.info.effects.negative.map((effect) => {
                      return (
                        <li className="negative-effects card-text">{effect}</li>
                      );
                    })}
                  </ul>
                  <ul>
                    <h3 className="medicinal card-text">For Medicinal Use</h3>
                    {entry.info.effects.medical.map((effect) => {
                      return <li className="medicinal card-text">{effect}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allStrains: state.strainR.allStrains,
});

export default connect(mapStateToProps, { getAllStrains })(GetRace);
