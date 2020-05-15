import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import {Header} from "../Header/header";
import {Footer} from "../Footer/Footer";
import Chronology from "../Chronology/Chronology";
import {data} from "../../state/state"

function App(props) {

	//BEGIN state
	const [state, setState] = useState({...data});
	

	const API_KEY = 'c6633ad6a8d5b89011bbcb78acab94ea';
	
	const comicsNameUrl = {
		'All-New Ultimates': 'All-New%20Ultimates',
		'Hunger': 'Hunger',
		'Miles Morales: Ultimate Spider-Man': 'Miles%20Morales%3A%20Ultimate%20Spider-Man',
		'Spider-Men': 'Spider-Men',
		'Ultimate Comics Spider-Man': 'Ultimate%20Comics%20Spider-Man',
		'Ultimate Comics Ultimates': 'Ultimate%20Comics%20Ultimates',
		'Ultimate Comics X-Men': 'Ultimate%20Comics%20X-Men',
		'Ultimate Fantastic Four': 'Ultimate%20Fantastic%20Four',
		'Ultimate Spider-Man': 'Ultimate%20Spider-Man%20',
		'Ultimate X-Men': 'Ultimate%20X-Men',
	}

	const getComicsUrl = title => comicsNameUrl[title];

	function getComics(title, number) {

		//const title = action.title;
		//const number = action.number;
		const urlName = getComicsUrl(title);
		const url = `111https://gateway.marvel.com:443/v1/public/comics?title=${urlName}&issueNumber=${number}&apikey=${API_KEY}\n`;
		
		//BEGIN check this comics (maybe we already have this comics)
		//if we don't have this series, we add title of this series
		if(!state[title] || !state[title].filter(i => i.number === number)) {
			addComics();
		}
		//END check this comics

		//BEGIN addComics
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
		//END addComics
		
		function defaultComics() {
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

			if(json.data.results[0]) {
				//return limitIsOver(false, json.data.results[0]);
				const item = json.data.results[0];
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
	//END state
	
	//BEGIN chronology
	const chronology = [
		{
			title: 'Ultimate Spider-Man',
			from: 1,
			till: 13,
		},
		{
			title: 'Ultimate X-Men',
			from: 1,
			till: 6,
		},
		{
			title: 'Ultimate Spider-Man',
			from: 14,
			till: 21,
		},
		{
			title: 'Ultimate X-Men',
			from: 7,
			till: 14,
		},
	]
	//END chronology
	
	
	
	useEffect(() => {
		chronology.forEach(i => {
			getComics(i.title, i.from)
		})
	}, [])

	
	
	
	
	
  return (
    <div className={s.app}>
      <Header />
      <main>
	      <Chronology 
		      chronology={chronology}
		      state={state}
	      />
      </main>
      <Footer />
    </div>
  );
}

export default App;
