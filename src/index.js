import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import store from "./store"

import { Provider } from 'react-redux'
/*
import {fetchTracks} from './actions/actions_tracks';
store.dispatch(fetchTracks());
*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
