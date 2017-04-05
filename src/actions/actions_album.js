import axios from 'axios';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const SELECT_ALBUM = 'SELECT_ALBUM';
export const UNSELECT_ALBUM = 'UNSELECT_ALBUM';

export function fetchAlbums(limit) {
	const url = `${ROOT_URL}/albums/`;
	const request = axios.get(url);

	return {
		type: FETCH_ALBUMS,
		payload: request
	};
}

export function selectAlbum(album, user) {
	return {
		type: SELECT_ALBUM,
		payload: {album: album, creator: user}
	}
}

export function unselectAlbum() {
	return {
		type: UNSELECT_ALBUM,
		payload: null
	}
}