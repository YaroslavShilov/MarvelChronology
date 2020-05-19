import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyle/normalize.scss'
import './globalStyle/fonts.scss'
import './globalStyle/basic.scss'
import App from './components/app/App';
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
  document.getElementById('root')
);
