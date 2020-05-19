import React from 'react';
import Item from "./Item";

export default ({state, chronology}) => {
	
	const comics = chronology.map((i, inx, arr) => {
		let even = false;
		let first = false;
		let last = false;
		
		if((inx+1) % 2 === 0) {even = true}
		if(inx === 0) {first = true}
		if(inx === arr.length-1) {last = true}

		let number = i.from;
		let desc = 'Loading....';
		let thumb = 'https://i.annihil.us/u/prod/marvel/i/mg/8/a0/5aea3123880ca/clean.jpg';
		let link = 'https://www.marvel.com/';


		if(state[i.title]) {
			let comics = state[i.title].filter(j => j.number === i.from)
			if(comics.length === 1) {
				number = comics[0].number;
				desc = comics[0].desc;
				thumb = comics[0].thumb;
				link = comics[0].link;
				if(!desc) {
					desc = "Sorry. But this comic doesn't have description";
				}
				if(desc.length > 390) {
					desc = desc.slice(0, 390) + '.....';
				}
			}
		}


		return (
			<Item
				key={inx}
				even={even}
				first={first}
				last={last}
				title={i.title}
				from={number}
				desc={desc}
				thumb={thumb}
				link={link}
				till={i.till ? `#${i.till}` : 'last'}
			/>
		)
	})
	
	return (
		<>
			{comics}
		</>
	)
}
