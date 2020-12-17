import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <input type="text" className="form-search" onChange={this.props.search} />
    );
  }
}

export default SearchBox;
