import React from 'react';
import s from './Chronology.module.scss';
import Item from "../Item/Item";

class Chronology extends React.Component {
	constructor({state, getComics}) {
		super();
		this.state = state;
		this.getComics = getComics;
	}
	
	addComics(title, num) {
		return this.getComics(title, num).then((comics) => {
			
			if(!this.state[title]) {
				this.setState(state => {
					const item = {[title]: {
						title,
						items: [{}],
					}}
					return {...state, ...item}
				});
			}
			
			
			let changeState = true;
			
			this.state[title].items.forEach((i) => {
				if(i.number === comics.number) {
					changeState = false;
				}
			});
			
			if(changeState) {
				this.setState((state) => {
					let copyState = {...state};
					copyState[title] = {...state[title]};
					copyState[title].items = [...state[title].items, comics];
					return {...copyState}
				});
			}
				
		})
		
	};
	
	comics = async (title, num, till = '') => {
		await this.addComics(title, num);
		let item = await this.state[title];
		//** TODO you need **//
		return (
			<div className={s.row}>
				<Item {...{
					title: item.title,
					num,
					till,
					image: item.thumb,
					desc: item.desc,
					link: item.link,
				}}/>

				<span className={s.line}></span>
				<div></div>
			</div>
		)
	};

	
	render() {
		
		return (
			<div className={s.chronology}>
				<section className={'wrap'}>
					{
						this.comics('Ultimate Spider-Man', 1, 13)
					}
					
					{/*{this.comics('Ultimate X-Men', 1, 6)}*/}
					{/*{this.comics('Ultimate X-Men', 7, 14)}*/}
					{/*{this.comics('Ultimate X-Men', 7, 14)}*/}
					{/*{this.comics('Ultimate X-Men', 7, 14)}*/}
					{/*{this.comics('Ultimate X-Men', 7, 14)}*/}
					{/*{this.comics('Ultimate X-Men', 7, 14)}*/}
				</section>


			</div>
		);
	}
 
}

export default Chronology;
