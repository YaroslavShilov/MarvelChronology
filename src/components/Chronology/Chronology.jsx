import React from 'react';
import s from './Chronology.module.scss';
import Item from "../Item/Item";

function Chronology(props) {
	
  return (
    <div className={s.chronology}>
	    <section className={'wrap'}>
		    <div className={s.row}>
			    <Item/>

			    <span className={s.line}></span>
			    <div></div>
		    </div>

		    <div className={s.row}>
			    <Item/>

			    <span className={s.line}></span>
			    <div></div>
		    </div>

		    <div className={s.row}>
			    <Item/>

			    <span className={s.line}></span>
			    <div></div>
		    </div>

		    <div className={s.row}>
			    <Item/>

			    <span className={s.line}></span>
			    <div></div>
		    </div>
		    
		    
	    </section>
	    
	    
    </div>
  );
}

export default Chronology;
