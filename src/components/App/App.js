import React from 'react';
import s from './App.module.scss';
import {Header} from "../Header/header";
import {Footer} from "../Footer/Footer";
import ItemContainer from "../Item/ItemContainer";

export const App = () => {

  return (
    <div className={s.app}>
	    <div className={s.bg}>
		    <Header />
		    <main className={s.main + ' wrap'}>
			    <ItemContainer/>
		    </main>
		    <Footer />
	    </div>
    </div>
  );
}
