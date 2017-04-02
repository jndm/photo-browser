import { FETCH_PHOTOS, SELECT_PHOTO } from '../actions/actions_photo';

const INITIAL_STATE = {all: [], selectedPhoto: null}

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_PHOTOS:
			return {...state, all: action.payload.data};
		case SELECT_PHOTO:
			return {...state, selectedPhoto: action.payload};
		default:
			return state;	
	}
}