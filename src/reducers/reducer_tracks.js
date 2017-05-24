const default_state = {
    fetching : false,
    fetched : false,
    error: null,
    tracks: []
};

function tracksReducer( state=default_state, action ) {

    switch ( action.type ) {

        case "FETCH_TRACKS_INIT":{
            return Object.assign(
                {},
                state,
                {
                    fetching: true
                }
            );
        }
        case "FETCH_TRACKS_REJECTED":{
            return Object.assign(
                {},
                state,
                {
                    fetching: false,
                    error: action.payload
                }
            );
        }
        case "FETCH_TRACKS_FULFILLED":{
            return Object.assign(
                {},
                state,
                {
                    fetching: false,
                    fetched: true,
                    tracks: action.payload
                }
            );
        }
        default :
            return state;

    }

}

export default tracksReducer;