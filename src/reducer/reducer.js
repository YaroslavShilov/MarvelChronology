
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

export default (state, action) => {
	switch(action.type) {
		case 'addComics':
			const title = action.title;
			const number = action.number;
			let updateState;
			//BEGIN check this comics (maybe we already have this comics)
			//if we don't have this series, we add title of this series
			if(!state[action.title]) {
				
				updateState = {
					...state,
					[title]: {
						title,
					}
				}
				
				addComics(updateState);
			}
			//if we don't have this comics in this series, we add this comics
			else if(!state[title].items.filter(i => i.number === number)) {
				updateState = {...state}
				updateState[title] = {...state[title]}
				addComics(updateState);
			}
			//we already have this comics in this series
			else {
				
				return state;
			}
			//END check this comics

			//BEGIN addComics
			function addComics(updateState) {
				const urlName = getComicsUrl(title);
				const url = `111https://gateway.marvel.com:443/v1/public/comics?title=${urlName}&issueNumber=${number}&apikey=${API_KEY}\n`;
	
				getJson(url)
					.catch(err => limitIsOver(true))
					.then((comics) => {
						//BEGIN change this.state
						updateState[title].items = [...state[title].items, ...comics];
						
						//*TODO you need to return this state from promise
						return {...updateState};
					})
	
			}
			//END addComics
			
			//BEGIN function limitIsOver (if our limit of API is over)
			function limitIsOver(boolean, item = '') {
				//*TODO you need to fix it
				let number;
				let desc;
				let thumb;
				let link;
	
				if(boolean) {
					number = num;
					desc = 'Sorry, but limit of Marvel API request is over. You can see Images later, after give a new limit request';
					thumb = 'https://i.annihil.us/u/prod/marvel/i/mg/8/a0/5aea3123880ca/clean.jpg';
					link = 'https://www.marvel.com/';
				}
	
				else {
					number = num;
					desc = item.description;
					thumb = `${item.thumbnail.path}.${item.thumbnail.extension}`;
					link = item.urls[0].url;
				}
	
				return {number, desc, thumb, link}
			}
			//END function limitIsOver

			

			//BEGIN function getJson
			async function getJson(url) {
				const response = await fetch(url);
				const json = await response.json();
		
				if(json.data.results[0]) {
					return limitIsOver(false, json.data.results[0]);
				} else {
					return limitIsOver(true)
				}
			}
			//END function getJson
			
			return updateState
		
		
		default: return state
	}
}