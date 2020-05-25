import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyle/normalize.scss'
import './globalStyle/fonts.scss'
import './globalStyle/basic.scss'
import {App} from './components/App/App';
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";

//BEGIN for browser extension
const devTools = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
const composeEnhancers = 
	typeof window === 'object' && window[devTools]
		? window[devTools]({})
		: compose;
//END for browser extension

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(
	app,
  document.getElementById('root')
);
