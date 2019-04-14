import React, { Component } from 'react';
import FuzzySearch from '../FuzzySearch';
import SearchBar from './SearchBar';
import Emoji from './Emoji';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: {} };
    this.fuzzy = new FuzzySearch();
  }

  search = (searchTerm) => {
    const results = this.fuzzy.search(searchTerm);
    this.setState({ results });
  }

  render() {
    return (
      <div id="app">
        <SearchBar onChange={this.search} />
        <div id="emoji-section">
          {this.state.results
            && Object.values(this.state.results)
              .map(emoji => <Emoji emoji={emoji} />)}
        </div>
      </div>
    );
  }
}

export default App;
