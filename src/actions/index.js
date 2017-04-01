import axios from 'axios';

const ROOT_URL = 'http://jsonplaceholder.typicode.com';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export function fetchPhotos(page) {
	const url = `${ROOT_URL}/photos?_page=${page}&_limit=20`;
	const request = axios.get(url);

	return {
			type: FETCH_PHOTOS,
			payload: request
	};
}