import axios from 'axios';

const ROOT_URL = 'http://jsonplaceholder.typicode.com';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const SELECT_ALBUMS = 'SELECT_ALBUMS';

export function fetchAlbums(limit) {
	const url = `${ROOT_URL}/albums`;
	const request = axios.get(url);

	return {
		type: FETCH_ALBUMS,
		payload: request
	};
}

export function selectAlbum(photo) {
	return {
		type: SELECT_ALBUMS,
		payload: photo
	}
}