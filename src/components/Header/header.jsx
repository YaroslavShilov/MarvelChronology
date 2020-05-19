import React from 'react';
import s from './header.module.scss';
import logo from './logo.png';
import {Link} from "react-router-dom";

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
					<Link to="/" className={s.header_logo}>
						<img src={logo} alt="The ultimate marvel chronology"/>
					</Link>
					{/*<form action="" className={s.search}>
						<button></button>
					</form>*/}
				</div>
			</div>
		</header>
	)
};