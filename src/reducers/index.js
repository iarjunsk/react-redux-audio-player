import { combineReducers } from 'redux'

import settingsReducer from './reducer_settings'
import tracksReducer from './reducer_tracks'

export default combineReducers({
     settingsReducer,
     tracksReducer
});

