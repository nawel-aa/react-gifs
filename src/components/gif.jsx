import React, { Component } from 'react';

class Gif extends Component {
  render() {
    return (
      <div className="selected-gif">
        <img className="gif" src={`https://media.giphy.com/media/${this.props.id}/giphy.gif`} alt="A gif" onClick={this.props.selectGif}data-id={this.props.id}/>
      </div>
    );
  }
}

export default Gif;
