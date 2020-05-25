import React from 'react';
import s from './Footer.module.scss';

export function Footer() {
	return (
		<footer className={s.footer}>
			<div className="wrap">
				<a href="https://github.com/YaroslavShilov" target={'__blank'}>Yaroslav Shilov</a>
				and
				<a href="https://developer.marvel.com/" target={'__blank'}>MarvelAPI</a>
			</div>
		</footer>
	)
};