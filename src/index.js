import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyle/normalize.scss'
import './globalStyle/fonts.scss'
import './globalStyle/basic.scss'


import App from './components/app/App';


const url = 'https://gateway.marvel.com:443/v1/public/comics?title=Ultimate%20Spider-Man&issueNumber=1&apikey=c6633ad6a8d5b89011bbcb78acab94ea\n';

async function fetchComix(url) {
	console.log('start: ', url)
	const response = await fetch(url);
	console.log('result response: ', response);
	const data = await response.json();
	console.log('result data: ', data);	
}

fetchComix(url);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
