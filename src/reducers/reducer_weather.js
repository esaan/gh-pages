import { FETCH_WEATHER} from '../actions/index';

export default function(state = [],action){
	//console.log('Action received', action); //this a redux promise (middle ware converts the promise to Object which is called redux promise)
	switch(action.type){
		case FETCH_WEATHER:
		//return [action.payload.data]; //it will replace the existing city
		return state.concat([action.payload.data]); //appends each searched city
		//return [action.payload.data, ...state] //ES6 way of appending the items in a array		
	}
	return state;
}