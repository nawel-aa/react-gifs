import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './gif';
import GifList from './gif_list';
import SearchBox from './search_box';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifId: "1VVK8MkhTTZIEELV9H",
      gifList: []
    };
  }

  search = (event) => {
    giphy('bt0cx4Qwyd3E0z59Ib3hjLIZXFx21f1z').search({
      q: event.currentTarget.value,
      rating: 'g',
      limit: 10
    }, (_error, result) => {
      this.setState({ gifList: result.data });
    });
  }

  selectGif = (event) => {
    this.setState({ gifId: event.currentTarget.dataset.id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBox search={this.search} />
          <Gif id={this.state.gifId} />
        </div>
        <div className="right-scene">
          <GifList gifList={this.state.gifList} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
