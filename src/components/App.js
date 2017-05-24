import React, { Component } from 'react';
import './App.css';
import Grid from './Grid'
import MusicBar from './MusicBar'

import { connect } from "react-redux"
import {fetchTracks} from "../actions/actions_tracks"


class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTracks();
  }

  render() {
    return (

      <div>

        <div className="loader" style={{ display:(this.props.tracksObj.fetching)?'block': 'none' }}>
          <img alt="" src="/img/loading.gif"></img>
        </div>

        <div style={{display:(this.props.tracksObj.fetched)?'block': 'none'}}>
          {
            this.props.tracksObj.tracks.map((track, key) => {
              return <Grid track={track} key={key} />;
            })
          }
          <MusicBar/>
        </div>

      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return({
    fetchTracks: () => {dispatch(fetchTracks())}
  })
}


function mapStateToProps(store){
  return {
    tracksObj : store.tracksReducer
  }
}

export default connect( mapStateToProps, mapDispatchToProps  )(App);
