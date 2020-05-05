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
		return this._state;
	},
	getUrlNameComics(title) {
		return this._comicsNameUrl[title];
	},
};

export async function getComics(title, num) {
	const urlName = store.getUrlNameComics(title);
	const url = `1111https://gateway.marvel.com:443/v1/public/comics?title=${urlName}&issueNumber=${num}&apikey=c6633ad6a8d5b89011bbcb78acab94ea\n`;
	
	//BEGIN function limitIsOver
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
	
	//BEGIN function changeStore
	let returnComics = (dataObj) => {
		return {
			title,
			items: [dataObj]
		}
		
	}
	//END function changeStore
	
	//BEGIN function getUrl
	async function getUrl() {
		const response = await fetch(url);
		const json = await response.json();

		if(json.data.results[0]) {
			return limitIsOver(false, json.data.results[0]);
		} else {
			return limitIsOver(true)
		}
	}
	//END function getUrl
	
	
	

	return getUrl().then(rev => returnComics(rev)).catch(err => limitIsOver(true))
	
}
