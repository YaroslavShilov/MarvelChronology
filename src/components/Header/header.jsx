import React from 'react';
import s from './header.module.scss';

export function Header(props) {
	return (
		<header className={s.header}>
			<div className="wrap">
				<div className={s.main}>
					{/*<div className={s.burger}>
						<span></span>
						<span></span>
						<span></span>
					</div>*/}
					<h1 className={s.title}>Ultimate Chronology</h1>
					{/*<form action="" className={s.search}>
						<button></button>
					</form>*/}
				</div>
			</div>
		</header>
	)
};