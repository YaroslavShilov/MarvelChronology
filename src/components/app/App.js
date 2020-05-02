import React from 'react';
import s from './App.module.scss';
import {Header} from "../Header/header";
import {Footer} from "../Footer/Footer";
import Chronology from "../Chronology/Chronology";

function App({state, getComics}) {
	
  return (
    <div className={s.app}>
      <Header />
      <main>
	      <Chronology {...{state, getComics}}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
