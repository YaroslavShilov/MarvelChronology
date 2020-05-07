export let store = {
	_state: {},
	_comicsNameUrl: {
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
	},
	getState() {
		console.log('hello')
		return this._state;
	},
	API_KEY: 'c6633ad6a8d5b89011bbcb78acab94ea',
	getUrlComics(title) {
		return this._comicsNameUrl[title];
	},
	
	getComics: async (title, num) => {
		
		this.getState();
		
		//BEGIN function limitIsOver (if our limit of API is over)
		let limitIsOver = (boolean, item = '') => {
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
		let getJson = async (url) => {
			const response = await fetch(url);
			const json = await response.json();

			if(json.data.results[0]) {
				return limitIsOver(false, json.data.results[0]);
			} else {
				return limitIsOver(true)
			}
		}
		//END function getJson
		
		//BEGIN addComics
		let addComics = () => {
			const urlName = this.getUrlComics(title);
			const url = `111https://gateway.marvel.com:443/v1/public/comics?title=${urlName}&issueNumber=${num}&apikey=${this.API_KEY}\n`;
			
			getJson(url).catch(err => limitIsOver(true)).then((comics) => {
				//BEGIN change this.state
				let copyState = {...this._state};
				copyState[title] = {...this._state[title]}
				copyState[title].items = [...this._state[title].items, ...comics];
				this._state = {...copyState};
			})
			
		}
		//END addComics
		
		//BEGIN check this comics (maybe we already have this comics)
		if(!this._state[title]) {
			//if we don't have this series, we add title of this series
			this._state = {
				...this._state,
				[title]: {
					title,
					items: [{}]
				}
			}
			//and add this comics
			addComics();
		} else if(!this._state[title].items.filter(i => i.number === num)) {
			//if we don't have this comics in this series, we add this comics
			addComics();
		} else {
			//we already have this comics in this series
			//*TODO you need to return this comics */
		}
		//END check this comics 
	} 
};
