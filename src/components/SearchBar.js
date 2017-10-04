import React, { Component } from 'react';

import Companies from './Companies';
import TrackedCompanies from './TrackedCompanies';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTxt: "",
      responses: [],
    }
  }

  handleSearch(event) {
    // set state of searchTxt equal to what's being typed
    this.setState({
      searchTxt: event.target.value
    }, function() {
      // fetch the data from the API that matches searchTxt
      let search = this.state.searchTxt;

      fetch("https://young-plains-68972.herokuapp.com/api/autocomplete?q=" + search)
        .then(resp => resp.json())
        .then(response => {
          this.setState({
            responses: response,
          })
        })
    })
  }

  render() {
    const searchResults = this.state.responses.map( (result, index) => {
      return(
        <Companies key={index} company={result} />
      );
    })

    return(
      <div>
        <input className="search-bar" type="text"
        placeholder="Search Ticker Symbols"
        onChange={ event => this.handleSearch(event)}/>
        <ul>
          {searchResults}
        </ul>
        <div>
          <h2>Tracked Companies</h2>
          <ul>
            <TrackedCompanies />
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchBar;
