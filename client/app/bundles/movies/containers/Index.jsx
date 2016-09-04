import React, { PropTypes } from 'react';
import ItemWidget from '../components/ItemWidget';

const Index = (data) => {
  const items = data.listOfMovies.map((item, index) => <ItemWidget {...item} key={index} />);

  return <div>{items}</div>;
};

Index.propTypes = {
  listOfMovies: PropTypes.array.isRequired,
};

export default Index;
