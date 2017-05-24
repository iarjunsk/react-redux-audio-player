import React, { Component } from 'react';
import './MusicBar.css'

var audio_html_dom;

import {play_track, pause_track  } from "../actions/actions_settings"
import {connect} from "react-redux"


class MusicBar extends Component {

    componentDidMount() {
        audio_html_dom = document.getElementById("audio-player");
    }


    componentDidUpdate(){
        if(this.props.settingsObj.isPlaying){
            audio_html_dom.play();
        }else{
            audio_html_dom.pause();
        }
    }
    componentWillReceiveProps(nextProps) {
       if(this.props.settingsObj.isPlaying !== nextProps.settingsObj.isPlaying) {
            return true;
        }else{
            return false;// no re-rendering is required
        }
    }

    render() {

        return (
           <footer style={{display:(this.props.settingsObj.playedForOnce)?'block': 'none'}} className="fixedBottom" >

               <audio
                   onPlay={ () => this.props.play_track(this.props.settingsObj.trackID)   }
                   onPause={this.props.pause_track}
                   id="audio-player"
                   width="100%"
                   src={"https://api.soundcloud.com/tracks/"+ this.props.settingsObj.trackID +"/stream?client_id=1AVHvmUbJVx9PaAcjaMka6XvKv2F8eQw"}
                   type="audio/mp3"
                   controls="controls">
               </audio>;

           </footer >
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


export default connect( mapStateToProps,mapDispatchToProps)(MusicBar);
