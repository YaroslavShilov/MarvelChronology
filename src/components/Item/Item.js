import React from 'react';
import s from './Item.module.scss'
import Link from "../../UI/Link/Link";
import {Preloader} from "../Preloader/Preloader";

export const Item = ({cls, isReady, title, number, till, desc, link, thumb}) => {

	return (
		<div className={`${s.item} ${cls.map(i => s[i]).join(' ')}`}>
			<article className={s.main}>
				<div className={s.cont}>
					<h2 className={s.title}>{title}</h2>
					<p className={s.num}>#{number} - {till}</p>

					<p className={s.desc}>
						{desc}
					</p>
					{
						isReady &&
						<p className={s.link}>
							<Link link={link}>Read more</Link>
						</p>
					}

				</div>

				<div className={s.img}>
					{
						isReady
							? <img src={thumb} alt={title}/>
							: <Preloader/>
					}

				</div>

				<span className={s.arrow}></span>
				<span className={s.point}></span>
			</article>

			<div className={s.hollow}></div>

		</div>
	);
}
