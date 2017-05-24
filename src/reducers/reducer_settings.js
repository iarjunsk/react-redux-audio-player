const default_state = {
    isPlaying : false,
    trackID : 0,
    playedForOnce : false
};

function settingsReducer(state = default_state, action) {

    switch(action.type){
        case "PLAY_TRACK" :
            return Object.assign(
                {},
                state,
                {
                    isPlaying : action.payload.isPlaying,
                    trackID : parseInt(action.payload.trackID,10),
                    playedForOnce : true
                }
            );

        case "PAUSE_TRACK" :
            return Object.assign(
                {},
                state,
                {
                    isPlaying : action.payload.isPlaying
                }
            );

        default :
            return state
    }
}

export default settingsReducer;