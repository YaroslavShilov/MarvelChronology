import React from 'react';
import s from './header.module.scss';
import logo from './logo.png';
import {Link} from "react-router-dom";

export function Header() {
	return (
		<header className={s.header}>
			<div className="wrap">
				<div className={s.header_main}>
					<h1 className={'vis-hid'}>The ultimate marvel chronology</h1>
					<Link to="/" className={s.header_logo}>
						<img src={logo} alt="The ultimate marvel chronology"/>
					</Link>
				</div>
			</div>
		</header>
	)
};