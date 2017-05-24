/*
   Components are dumb
   Containers are smart
   ~This is a container
*/

import React, { Component } from 'react';
import './Grid.css';

import {play_track, pause_track  } from "../actions/actions_settings"
import {connect} from "react-redux"

class Grid extends Component {


    constructor(props) {
        super(props);
        this.onItemClick= this.onItemClick.bind(this);
    }

    onItemClick(event) {
        const {id} = event.target;

        if(this.props.settingsObj.isPlaying) {
            // === equal compares even the type
            if(id == this.props.settingsObj.trackID) {
                this.props.pause_track();
            }else{
                this.props.play_track(id);
            }

        }else{
            this.props.play_track(id);
        }

    };

  render() {

    var track = this.props.track;
    return (
      <div className="card card-2">


          <div className="container">
              <img className="cover_image" alt="" src={track.artwork_url}  style={{width: "100%" , height:"90%"}}  />
              <div className="middle">
                  <div className="text">
                      <i className={ (this.props.settingsObj.isPlaying && track.id==this.props.settingsObj.trackID) ? "fa fa-pause" :  "fa fa-play" } id={track.id} onClick={this.onItemClick} ></i>
                  </div>
              </div>
          </div>


          <div>

              <div style={{float: "left"}} className="song-card-bottom-div">
                <img className="avatar" alt="" src={track.user.avatar_url}/>
              </div>

              <div style={{margin:"2px"}} className="song-card-bottom-div">

                  <a className="song-card-title">
                    {track.title}
                  </a>

                  <a className="song-card-user-username">
                    {track.user.username}
                  </a>

              </div>

          </div>

      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {

    return({
        pause_track: () => {dispatch(pause_track())},
        play_track: (id) => {dispatch(play_track(id))}
    })
}

function mapStateToProps(store){
    return {
        settingsObj : store.settingsReducer
    }
}


export default connect( mapStateToProps,mapDispatchToProps)(Grid);
