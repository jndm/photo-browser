import { FETCH_PHOTOS } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_PHOTOS:
			return action.payload.data;
	}
	return state;
}