import React from "react";
import s from './Item.module.scss';
import Button from "../../UI/Button/Button";

export default ({even, first, last, title, from, desc, thumb, link, till}) => {
	
	let cls = ``;
	if(even) {cls += ` ${s.__even}`}
	if(first) {cls += ` ${s.__first}`}
	if(last) {cls += ` ${s.__last}`}
	
	return (
		<div className={`${s.item} ${cls}`}>
			
			<article className={s.main}>
				<div className={s.cont}>
					<h2 className={s.title}>{title}</h2>
					<p className={s.num}>#{from} - {till}</p>

					<p className={s.desc}>
						{desc}
					</p>
					<p className={s.link}>
						<Button>
							<a href={link} target={'_blank'} rel="noopener noreferrer">Read more</a>
						</Button>
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
