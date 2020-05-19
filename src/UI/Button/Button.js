import React from "react";
import s from './Button.module.scss';

export default (props) => (
	<span className={s.button}>
		{props.children}
	</span>
)