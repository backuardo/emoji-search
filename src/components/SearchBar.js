import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div id="search-bar">
        <input
          onChange={this.handleChange}
          value={this.state.searchTerm}
          placeholder="find an emoji..."
        />
      </div>
    );
  }
}

export default SearchBar;
