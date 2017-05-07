import React from 'react';
import { Component } from 'react';

export default class Searchbar extends Component {

  constructor() {
    super()

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    let value = e.target.value;
    let formattedValue = value.split(' ').join('%20');
    this.props.getInput(value);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.getArtist(this.props.searchValue);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange}/>
          <button>Search</button>
        </form>
      </div>
    );
  }
}
action creator.jsx:
import axios from 'axios';

//action types
export const GET_ARTIST = 'GET_ARTIST';
export const GET_INPUT = 'GET_INPUT';

//other constants
const BASE_URL = 'https://api.spotify.com/v1/search';

  //make sure to add query eventually
export const getArtist = (searchValue) => {

  return (dispatch, getState) => {
  const request = axios.get(`${BASE_URL}?q=${searchValue}&type=artist`);

    request.then(function(response) {
      console.log(response);
      dispatch({
        type: GET_ARTIST,
        payload: request
      });

      }, function(err) {
        console.log('Error loading data');
      });
  };
};

export const getInput = (input) => {
  return {
    type: GET_INPUT,
    payload: input
  }
}
main container.jsx:
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
//Child Components
import Searchbar from '../components/Searchbar';
import List from '../components/List';
//Actions
import { getArtist, getInput } from '../actions/actions';


class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Searchbar
          getInput={this.props.getInput}
          getArtist={this.props.getArtist}
          searchValue={this.props.searchValue}
        />
        <List
          artistData={this.props.artist}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    artist: state.artist,
    searchValue: state.searchValue
  })
}

export default connect(mapStateToProps, { getArtist, getInput } )(App);
reducer.jsx:
import Immutable from 'immutable';
import dotProp from 'dot-prop-immutable';

import { GET_ARTIST, GET_INPUT } from '../actions/actions';

const INITIAL_STATE = {
  artist: [],
  searchValue: ''

};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ARTIST:
      state = dotProp.set(state, 'artist', action.payload.data.artists.items[0]);
      console.log(state);
      return state;
    case GET_INPUT:
      state = dotProp.set(state, 'searchValue', action.payload);
      console.log(state);
      return state;
    default:
      return state;
  }
}
