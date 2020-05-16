import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import {Header} from "../Header/header";
import {Footer} from "../Footer/Footer";
import {store} from "../../store/store"
import {chronology} from "../../store/chronology";
import {API_KEY} from "../../api/apiKey";
import {Context} from "../../context/context";
import ItemContainer from "../Item/ItemContainer";


function App() {

	const [state, setState] = useState({...store.state});

	function getComics(title, number) {
		console.log('getComics')
		const urlName = store.getComicsUrl(title);
		const url = `111https://gateway.marvel.com:443/v1/public/comics?title=${urlName}&issueNumber=${number}&apikey=${API_KEY}\n`;
		
		
		//if we don't have this comics or number of this comics we add it
		if(!state[title]) {
			addComics();
		} else if (state[title].filter(i => i.number === number).length === 0) {
			addComics();
		}

		function addComics() {
			getJson(url)
				.catch(defaultComics)
				.then((comics) => {
					setState((state) => {
						return state[title]
							? {...state, [title]: [...state[title], {...comics}]}
							: {...state, [title]: [{...comics}] }
					})
				})
		}

		function defaultComics() {
			//use it if we can't get a comics from API
			return {
				number,
				desc: 'Sorry, but limit of Marvel API request is over. You can see Images later, after give a new limit request',
				thumb: 'https://i.annihil.us/u/prod/marvel/i/mg/8/a0/5aea3123880ca/clean.jpg',
				link: 'https://www.marvel.com/',
			}
		}

		//BEGIN function getJson
		async function getJson() {
			const response = await fetch(url);
			const json = await response.json();
			const  item = json.data.results[0];
			if(item) {
				return {
					number,
					desc: item.description,
					thumb: `${item.thumbnail.path}.${item.thumbnail.extension}`,
					link: item.urls[0].url,
				}
			} else {
				defaultComics();
			}
		}
		//END function getJson
	}
	
	
	useEffect(() => {
		chronology.forEach(i => {
			getComics(i.title, i.from)
		})
	}, [])
	
	
	
	

	
	
	
	
	
  return (
  	<Context.Provider value={{
  		state,
		  chronology,
	  }}>
	    <div className={s.app}>
	      <Header />
	      <main>
		      <ItemContainer />
	      </main>
	      <Footer />
	    </div>
	  </Context.Provider>
  );
}

export default App;
