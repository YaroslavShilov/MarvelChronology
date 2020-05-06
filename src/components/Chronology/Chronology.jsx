import React from 'react';
import s from './Chronology.module.scss';
import ItemContainer from "../Item/ItemContainer";

const Chronology = (props) => {
	return (
			<div className={s.chronology}>
				<section className={'wrap'}>
					
					<ItemContainer 
						title={'Ultimate X-Men'} 
						num={1} 
						state={props.state}
						getComics={props.getComics}
					/>
					
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

export default Chronology;
