import React from 'react';
import s from './header.module.scss';
import logo from './logo.png';

export function Header(props) {
	return (
		<header className={s.header}>
			<div className="wrap">
				<div className={s.header_main}>
					{/*<div className={s.burger}>
						<span></span>
						<span></span>
						<span></span>
					</div>*/}
					<h1 className={'vis-hid'}>The ultimate marvel chronology</h1>
					<a href="#" className={s.header_logo}>
						<img src={logo} alt="The ultimate marvel chronology"/>
					</a>
					{/*<form action="" className={s.search}>
						<button></button>
					</form>*/}
				</div>
			</div>
		</header>
	)
};