import React from 'react';

const SearchBox = (props) => {
  const { search } = props;

  return (
    <input type="text" className="form-search" onChange={search} />
  );
};

export default SearchBox;
