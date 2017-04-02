import axios from 'axios';

const ROOT_URL = 'http://jsonplaceholder.typicode.com';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const SELECT_PHOTO = 'SELECT_PHOTO';

export function fetchPhotos() {
	const url = `${ROOT_URL}/photos`;
	const request = axios.get(url);

	return {
		type: FETCH_PHOTOS,
		payload: request
	};
}

export function selectPhoto(photo) {
	return {
		type: SELECT_PHOTO,
		payload: photo
	}
}