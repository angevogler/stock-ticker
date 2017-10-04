import { createStore } from 'redux';

function reducer(state, action) {

  if (action.type === 'ADD_TRACKED') {
    return {
      trackedCompanies: state.trackedCompanies.concat(action.payload),
    };
  }


  return state;
}

export default createStore(reducer, {
  trackedCompanies: [],
});
