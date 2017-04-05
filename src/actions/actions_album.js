import axios from 'axios';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const SELECT_ALBUM = 'SELECT_ALBUM';
export const UNSELECT_ALBUM = 'UNSELECT_ALBUM';

/*
*	GETs all albums from back-end
*/
export function fetchAlbums(limit) {
	const url = `${ROOT_URL}/albums/`;
	const request = axios.get(url);

	return {
		type: FETCH_ALBUMS,
		payload: request
	};
}

/*
*	Sets given user and parameter as
* selected album data object to storage
*/
export function selectAlbum(album, user) {
	return {
		type: SELECT_ALBUM,
		payload: {album: album, creator: user}
	}
}

/*
*	Nulls selected album data object from
* storage
*/
export function unselectAlbum() {
	return {
		type: UNSELECT_ALBUM,
		payload: null
	}
}