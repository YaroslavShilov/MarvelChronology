import React from 'react';
import s from './Chronology.module.scss';
import ItemContainer from "../Item/ItemContainer";

const Chronology = (props) => {
	return (
			<div className={s.chronology}>
				<div className={'wrap'}>
					
					<section className={s.chronology_main}>
						<ItemContainer
							chronology={props.chronology}
							state={props.state}
						/>
					</section>
					
				</div>
			</div>
		);
 
}

export default Chronology;
