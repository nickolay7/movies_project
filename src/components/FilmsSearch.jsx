import React from 'react';

export default class FilmsSearch extends React.Component {
  state = {
    search: '',
    type: '',
  }

  filterHandler = (e) => {
    this.setState({type: e.target.dataset.type});
  }
  // searchHandler = () => {
  //   const href = `http://www.omdbapi.com/?apikey=c2f54cee&s=${this.state.search}`;
  //   fetch(href)
  //     .then((response) => response.json())
  //     .then((data) => this.props.cb(data));
  // }

  render() {
    return (
      <div className="input-field">
        <input
          className="validate"
          type='search'
          placeholder='&#128269;'
          name='search'
          value={this.state.search}
          onChange={(e) => this.setState({search: e.target.value})}
        />
        <button
          className="btn btn-search blue-grey lighten-2"
          onClick={() => this.props.cb(this.state.search, this.state.type)}
        >
          Search
        </button>
        <div className="filter">
          <p>
            <label>
              <input
                className="radio-filter"
                onChange={this.filterHandler}
                data-type=""
                name="group1"
                type="radio"
                checked={this.state.type === ''}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="radio-filter"
                onChange={this.filterHandler}
                data-type="movie"
                name="group1"
                type="radio"
                checked={this.state.type === 'movie'}
              />
              <span>Movies only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="radio-filter"
                onChange={this.filterHandler}
                data-type="series"
                name="group1"
                type="radio"
                checked={this.state.type === 'series'}
              />
              <span>Series only</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}
