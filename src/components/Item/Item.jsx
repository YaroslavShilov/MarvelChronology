import React from 'react';
import s from './Item.module.scss';

const Item = (props) => {

	return (

		<article className={s.item}>

			<h2 className={s.title}>Spider Man</h2>
			<p className={s.num}>#1 - #13</p>

			<figure className={s.cont}>

				<img src='#' alt="Image"/>

				<figcaption className={s.desc}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolorum fuga hic incidunt iusto quae quaerat quasi quo quos sed sit, tempore ullam. Ducimus eaque explicabo modi quam rem! Quaerat.

					<p className={s.desc_link}>
						<a href="#">Read more</a>
					</p>
				</figcaption>

			</figure>

			<div className={s.arrow}>
				<span className={s.arrow_point}></span>
			</div>

		</article>
	);

}

export default Item;
