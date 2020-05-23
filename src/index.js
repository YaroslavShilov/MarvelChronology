import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyle/normalize.scss'
import './globalStyle/fonts.scss'
import './globalStyle/basic.scss'
import App from './components/App/App';


const store = createStore(rootReducer);



const app = (
	<App/>
)

ReactDOM.render(
	app,
  document.getElementById('root')
);
