export function play_track(new_id){
    return {
        type:"PLAY_TRACK",
        payload:{
            isPlaying : true,
            trackID : new_id
        }
    }
}

export function pause_track(){
    return {
        type:"PAUSE_TRACK",
        payload:{
            isPlaying : false
        }
    }
}

