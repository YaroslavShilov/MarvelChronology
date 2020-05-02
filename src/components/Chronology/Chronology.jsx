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
		
		this.getComics(title, num).then((comics) => {
			console.log('comics - ',comics);
			this.setState(comics);
		});
		
	};
	
	render() {
		this.addComics('Alesha', 33);
		
		return (
			<div className={s.chronology}>
				<section className={'wrap'}>
					<div className={s.row}>
						<Item/>

						<span className={s.line}></span>
						<div></div>
					</div>

					<div className={s.row}>
						<Item/>

						<span className={s.line}></span>
						<div></div>
					</div>

					<div className={s.row}>
						<Item/>

						<span className={s.line}></span>
						<div></div>
					</div>

					<div className={s.row}>
						<Item/>

						<span className={s.line}></span>
						<div></div>
					</div>


				</section>


			</div>
		);
	}
 
}

export default Chronology;
