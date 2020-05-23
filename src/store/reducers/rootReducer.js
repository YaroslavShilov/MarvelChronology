import {combineReducers} from "redux";
import comics from './comics';
import chronology from "./chronology";

export default combineReducers({
	comics,
	chronology,
})