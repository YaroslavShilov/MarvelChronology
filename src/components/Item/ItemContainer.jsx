import React, {useEffect} from 'react';
import {addComic} from "../../store/actions/actionComics";
import {connect} from "react-redux";
import {Item} from "./Item";

function ItemContainer({state, chronology, addComic}) {

	useEffect(() => {
		chronology.forEach(i => {
			addComic(i.title, i.from)
		})
	}, [chronology, addComic])

	const comics = chronology.map((i, inx, arr) => {
		
		let isReady = false;
		let link = '';
		let thumb = '';
		let desc = 'Loading . . .';
		
		//BEGIN add class name
		const cls = [];
		if((inx+1) % 2 === 0) {cls.push('__even')}
		if(inx === 0) {cls.push('__first')}
		if(inx === arr.length-1) {cls.push('__last')}
		//END add class name
		

		if(state[i.title]) { //check this comics
			let comics = state[i.title].filter(j => j.number === i.from)
			
			if(comics.length === 1) { //check this comic
				desc = comics[0].desc;
				link = comics[0].link;
				thumb = comics[0].thumb
				isReady = true;
			}
		}
		
		return (
			<Item
				key={inx}
				cls={cls}
				isReady={isReady}
				title={i.title}
				number={i.from}
				till={i.till ? `#${i.till}` : 'last'}
				desc={desc}
				link={link}
				thumb={thumb}
				
			/>
		)
	})
	
	return (<>
		{comics}
	</>)
}

function mapStateToProps(state) {
	return {
		state: state.comics,
		chronology: state.chronology,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addComic: (title, number) => dispatch(addComic(title, number)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);