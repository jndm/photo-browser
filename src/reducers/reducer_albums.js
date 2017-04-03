import { FETCH_ALBUMS, SELECT_ALBUM, UNSELECT_ALBUM } from '../actions/actions_album';

const INITIAL_STATE = {all: [], selectedAlbum: null}

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_ALBUMS:
			return {...state, all: action.payload.data};
		case SELECT_ALBUM:
			return {...state, selectedAlbum: action.payload};
		case UNSELECT_ALBUM:
			return {...state, selectedAlbum: action.payload};
		default:
			return state;	
	}
}