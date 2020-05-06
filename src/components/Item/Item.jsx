import React from 'react';
import s from './Item.module.scss';

class Item extends React.Component {


	render() {
		const  {title, number, till,  desc, link, thumb} = this.props;
		
		
		
		return (

			<article className={s.item}>

				<h2 className={s.title}>{title}</h2>
				{till ?
					<p className={s.num}>#{number} - #{till}</p>: 
					<p className={s.num}>#{number} - last</p>
					
				}
				<figure className={s.cont}>

					<img src={thumb} alt={title}/>

					<figcaption className={s.desc}>
						{desc}

						<p className={s.desc_link}>
							<a href={link}>Read more</a>
						</p>
					</figcaption>

				</figure>

				<div className={s.arrow}>
					<span className={s.arrow_point}></span>
				</div>

			</article>
		);
	}
	

}

export default Item;
