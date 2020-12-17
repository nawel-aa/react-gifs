import React from 'react';

const Gif = (props) => {
  const { id } = props;

  return (
    <div className="selected-gif">
      { id ? <img src={`https://media.giphy.com/media/${id}/giphy.gif`} alt="A gif" className="gif" /> : null}
    </div>
  );
};

export default Gif;
