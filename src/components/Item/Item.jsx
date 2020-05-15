import React from "react";
import s from './Item.module.scss';

export default (props) => {
	
	
	const  {title, from, desc, thumb, link, till,} = props;
	
	const classModif = props.even && s.__even;
	
	return (
		<div className={`${s.item} ${classModif}`}>
			<article className={s.item_main}>
				<div className={s.item_cont}>
					<h2 className={s.item_title}>{title}</h2>
					<p className={s.num}>#{from} - {till}</p>

					<p className={s.item_desc}>
						{desc}
						<span className={s.item_link}>
						<a href={link} target={'_blank'} rel="noopener noreferrer">Read more</a>
					</span>
					</p>
				</div>

				<div className={s.item_img}>
					<img src={thumb} alt={title}/>
				</div>

				<div className={s.item_arrow}>
					<span className={s.item_point}></span>
				</div>
			</article>
			
			<div className={s.item_hollow}></div>

		</div>
	)
}
