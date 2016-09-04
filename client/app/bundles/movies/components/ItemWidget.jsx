import React, { PropTypes } from 'react';

const ItemWidget = (dataItem) => {
  const { image, title, genre, rating, releaseYear } = dataItem;
  const separetedGenres = genre.join(', ');

  return (
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img src={image} alt={title} />

        <div className="caption">
          <h3>{title}</h3>
          <h6>Release year: {releaseYear}</h6>
          <h6>Rating: {rating}</h6>
          <h6>Genre: {separetedGenres}</h6>
        </div>
      </div>
    </div>
  );
};

ItemWidget.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  releaseYear: PropTypes.number.isRequired,
};

export default ItemWidget;
