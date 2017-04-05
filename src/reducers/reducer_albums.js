import {FETCH_ALBUMS, SELECT_ALBUM, UNSELECT_ALBUM} from '../actions/actions_album';

const INITIAL_STATE = {all: [], selectedAlbumData: null}

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_ALBUMS:
			return {...state, all: action.payload.data};

		case SELECT_ALBUM:
			return {...state, selectedAlbumData: action.payload};

		case UNSELECT_ALBUM:
			return {...state, selectedAlbumData: action.payload};

		default:
			return state;
	}
}