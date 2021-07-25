import React from 'react';

export default function Movie (props) {
  const {
    Poster: img,
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
  } = props;
  return (
    <div id={id} className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src={img !== 'N/A'
              ? img
              : `https://via.placeholder.com/300x400?text=${title}`} />
            <span className="card-title">{title ? title : null}</span>
          </div>
          <div className="card-content">
            <p>{year} <span className="right">{type}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
