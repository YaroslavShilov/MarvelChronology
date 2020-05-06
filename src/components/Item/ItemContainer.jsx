import React from 'react';
import Item from "./Item";

class ItemContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = props.state
		this.comics = {
			title: '',
			num: '',
			till: '',
			desc: '',
			link: '',
			thumb: '',
		}
		this.title = props.title;
		this.number = props.num
		this.getComics = props.getComics;
	}
	

	addComics = (title, num) => {

		if(!this.state[title]) {
			this.setState(state => {
				return {
					...state,
					[title]: {
						title,
						items: [{}]
					}
				}
			})
		}

		this.getComics(title, num).then((comics) => {
			console.log('state after get: ', this.state);
			console.log('comics: ', comics)

			let changeState = true;

			this.state[title].items.forEach((i) => {
				if(i.number === comics.number) {
					console.log("we don't need to change this state")
					changeState = false;
				}
			});

			if(changeState) {
				this.setState((state) => {
					console.log('change state');
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
			console.log(this.state)
			
		})

	};
	
	componentDidMount() {
		this.addComics(this.title, this.number);
	}

	render() {
		return (
			<Item
				{...this.comics}
			/>
		);
	}
	

}

export default ItemContainer;
