import React from 'react';
import Item from "./Item";

export default ({state, chronology}) => {
	
	return (
		<>
			{
				chronology.map((i, inx) => {
					const even = (inx+1) % 2 === 0;

					let number = i.from;
					let desc = 'Sorry';
					let thumb = 'https://i.annihil.us/u/prod/marvel/i/mg/8/a0/5aea3123880ca/clean.jpg';
					let link = 'https://www.marvel.com/';


					if(state[i.title]) {
						let comics = state[i.title].filter(j => j.number === i.from)
						if(comics.length === 1) {
							number = comics[0].number;
							desc = comics[0].desc;
							thumb = comics[0].thumb;
							link = comics[0].link;
						}

					}


					return (
						<Item
							key={inx}
							even={even}
							title={i.title}
							from={number}
							desc={desc}
							thumb={thumb}
							link={link}
							till={i.till ? `#${i.till}` : 'last'}
						/>
					)
				})
			}
		</>
	)
}
