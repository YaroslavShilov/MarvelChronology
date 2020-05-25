import {API_KEY} from "../../api/apiKey";
import {ADD_COMIC_ERROR, ADD_COMIC_SUCCESS} from "./actionTypes";

export function addComicSuccess(title, comic) {
	return {
		type: ADD_COMIC_SUCCESS,
		title,
		comic,
	}
}

export function addComicError(error,title,comic) {
	return {
		type: ADD_COMIC_ERROR,
		error,
		title,
		comic,
	}
}


export function addComic(title, number) {
	return async (dispatch, getState) => {

		try {
			const urlName = getState().comicsNameUrl[title];
			const url = `https://gateway.marvel.com:443/v1/public/comics?title=${urlName}&issueNumber=${number}&apikey=${API_KEY}\n`;
			const response = await fetch(url);
			const json = await response.json();
			const  item = json.data.results[0];
			
			let desc = item.description;

			if(!desc) { //check description
				desc = "Sorry. But this comic doesn't have description";
			}
			if(desc.length > 390) {
				desc = desc.slice(0, 390) + '.....';
			}
			
			const comic = {
				number,
				desc,
				thumb: `${item.thumbnail.path}.${item.thumbnail.extension}`,
				link: item.urls[0].url,
			}
			dispatch(addComicSuccess(title, comic));
			
		} catch (err) {
			//console.log(err)
			const comic = {
				number,
				desc: 'Sorry, but this comic is not founded',
				thumb: 'https://i.annihil.us/u/prod/marvel/i/mg/8/a0/5aea3123880ca/clean.jpg',
				link: 'https://www.marvel.com/',
			}
			dispatch(addComicError(err, title, comic));
		}
		
	}
}