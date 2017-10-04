import React, { Component } from 'react';

import { Sparklines, SparklinesLine } from 'react-sparklines';

import { connect } from 'react-redux';
import { addTracked } from '../actions';

class TrackedCompanies extends Component {
  render() {

    const trackedCo = this.props.trackedCompanies.map( co => {
      return(
        <li key={co.ticker}>
          <h3>{co.name} <span>({co.ticker})</span></h3>
          <Sparklines data={co.prices} width={140} height={40} margin={5}>
          <SparklinesLine color="red" />
          </Sparklines>
        </li>
      )
    })

    return(
      <div>
        {trackedCo}
      </div>
    );
  };
}

function mapState2Props(state) {
  return {
    trackedCompanies: state.trackedCompanies,
  };
}

function mapDispatch2Props(dispatch) {
  return {
  }
}



export default connect(mapState2Props, mapDispatch2Props) (TrackedCompanies);
