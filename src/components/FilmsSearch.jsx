import React, { useState } from 'react';

export default function FilmsSearch(props) {
  const [search, setSearch] = useState();
  const [type = '', setType] = useState();

  const filterHandler = (e, cb) => {
    setType(e.target.dataset.type);
    cb(search, type);
  }

  return (
    <div className="input-field">
      <input
        className="validate"
        type='search'
        placeholder='&#128269;'
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="btn btn-search blue-grey lighten-2"
        onClick={() => props.cb(search, type)}
      >
        Search
      </button>
      <div className="filter">
        <p>
          <label>
            <input
              className="radio-filter"
              onChange={(e) => filterHandler(e, props.cb)}
              data-type=""
              name="group1"
              type="radio"
              checked={type === ''}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="radio-filter"
              onChange={(e) => filterHandler(e, props.cb)}
              data-type="movie"
              name="group1"
              type="radio"
              checked={type === 'movie'}
            />
            <span>Movies only</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="radio-filter"
              onChange={(e) => filterHandler(e, props.cb)}
              data-type="series"
              name="group1"
              type="radio"
              checked={type === 'series'}
            />
            <span>Series only</span>
          </label>
        </p>
      </div>
    </div>
  );
}
