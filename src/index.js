import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyle/normalize.scss'
import './globalStyle/fonts.scss'
import './globalStyle/basic.scss'


import App from './components/app/App';
import {getComics, store} from "./store/store";


ReactDOM.render(
  <App {...{state: store.getState(), getComics}}/>,
  document.getElementById('root')
);
