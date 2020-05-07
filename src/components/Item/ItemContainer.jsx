import React from 'react';
import Item from "./Item";
import {store} from "../../store/store";

class ItemContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			num: '',
			till: '',
			desc: '',
			link: '',
			thumb: '',
		}
		this.title = props.title;
		this.number = props.num
	}
	

	addComics = (title, num) => {
		store.getComics(title, num).then(() => {
			
			this.setState(state => {
				let copyState = store.getState();
				let comics = copyState[title].items.filter(i => i.number === num);
				
				return {
					title: title,
					...comics,
				}
			})
		});
		//BEGIN change this.comics
		
		//END change this.comics

		/*if(!this.state[title]) {
			this.setState(state => {
				return {
					...state,
					[title]: {
						title,
						items: [{}]
					}
				}
			})
		}*/

		
			/*.then((comics) => {

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

					//BEGIN change this.comics
					this.comics = {
						title: this.state[title].title,
						...comics
					}
					//END change this.comics
					
					return {...copyState}
				});
			}
			
		})*/

	};
	
	componentDidMount() {
		this.addComics(this.title, this.number);
	}

	render() {
		return (
			<Item
				{...this.state}
			/>
		);
	}
	

}

export default ItemContainer;
