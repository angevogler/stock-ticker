import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTracked } from '../actions';

class Companies extends Component {
  render() {
    const company = this.props.company;

    return(
      <div>
        <li onClick={ () => this.props.handleTracked(company) }>{company.name} <span>({company.ticker})</span></li>
      </div>
    )
  }
}

function mapState2Props(state) {
  return {
    trackedCompanies: state.trackedCompanies,
  };
}

function mapDispatch2Props(dispatch) {
  return {
    handleTracked: function(event) {
      console.log(event.ticker)
      fetch("https://young-plains-68972.herokuapp.com/api/companies/" + event.ticker)
        .then(resp => resp.json())
        .then(response => {
          const action = addTracked(response)
          console.log(action)
          dispatch(action)
        })
    }
  }
}



export default connect(mapState2Props, mapDispatch2Props) (Companies);
