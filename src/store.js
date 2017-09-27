import { createStore } from 'redux';

function reducer(state, action) {

  if (action.type === 'ADD_TRACKED') {

  }


  return state;
}

export default createStore(reducer, {
  companies: [],
});
