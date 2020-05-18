import React from "react";
import s from './Item.module.scss';

export default (props) => {
	
	
	const  {title, from, desc, thumb, link, till,} = props;
	
	const classModif = props.even && s.__even;
	
	return (
		<div className={`${s.item} ${classModif}`}>
			
			<article className={s.main}>
				<div className={s.cont}>
					<h2 className={s.title}>{title}</h2>
					<p className={s.num}>#{from} - {till}</p>

					<p className={s.desc}>
						{desc}
						<span className={s.link}>
						<a href={link} target={'_blank'} rel="noopener noreferrer">Read more</a>
					</span>
					</p>
				</div>

				<div className={s.img}>
					<img src={thumb} alt={title}/>
				</div>

				<span className={s.arrow}></span>
				<span className={s.point}></span>
			</article>
			
			<div className={s.hollow}></div>

		</div>
	)
}
