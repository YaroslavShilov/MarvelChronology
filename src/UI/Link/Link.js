import React from "react";
import s from './Link.module.scss';

export default (props) => (
	<a className={s.Link} href={props.link} target={'_blank'} rel="noopener noreferrer">
		{props.children}
	</a>
)