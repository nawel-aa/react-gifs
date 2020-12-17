import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  const { gifList } = props;

  return (
    <div className="gif-list">
      {gifList.map((gif) => {
        return (
          <button type="button" onClick={props.selectGif} data-id={gif.id} key={gif.id}>
            <Gif id={gif.id} />
          </button>
        );
      })}
    </div>
  );
};

export default GifList;
