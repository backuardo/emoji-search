import React, { Component } from 'react';
import EmojiSearch from '../EmojiSearch';
import SearchBar from './SearchBar';
import Emoji from './Emoji';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: {} };
    this.emojiSearch = new EmojiSearch();
    this.search('leaf');
  }

  search = (searchTerm) => {
    const results = this.emojiSearch.search(searchTerm);
    this.setState({ results });
  }

  render() {
    console.log(this.state.results);
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
