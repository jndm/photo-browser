import {FETCH_PHOTOS, SELECT_PHOTO, UNSELECT_PHOTO, FETCH_PHOTOS_COUNT, REMOVE_PHOTO_DATA} from '../actions/actions_photo';

const INITIAL_STATE = {
	all: [], 
	selectedPhoto: null, 
	photosCount: 0
}

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_PHOTOS:
			return {...state, all: action.payload.data};

		case REMOVE_PHOTO_DATA:
			return {...state, all: action.payload};

		case FETCH_PHOTOS_COUNT:
			return {...state, photosCount: action.payload.data.length};

		case SELECT_PHOTO:
			return {...state, selectedPhoto: action.payload};

		case UNSELECT_PHOTO:
			return {...state, selectedPhoto: action.payload};

		default:
			return state;	
	}
}