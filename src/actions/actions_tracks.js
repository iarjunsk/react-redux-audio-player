import axios from "axios"

export function fetchTracks(){
    return function(dispatch){

        dispatch({type:"FETCH_TRACKS_INIT"});

        axios.get("http://api.soundcloud.com/tracks?client_id=1AVHvmUbJVx9PaAcjaMka6XvKv2F8eQw")
        .then((response)=>{
                dispatch({type:"FETCH_TRACKS_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
                dispatch({type:"FETCH_TRACKS_REJECTED",payload: err})
        })
    }
}