import {combineReducers} from "redux";
import comics from './comics';
import chronology from "./chronology";
import comicsNameUrl from "./comicsNameUrl";

export default combineReducers({
	comics,
	chronology,
	comicsNameUrl,
})