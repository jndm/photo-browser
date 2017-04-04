import axios from 'axios';

const ROOT_URL = 'http://jsonplaceholder.typicode.com';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const SELECT_PHOTO = 'SELECT_PHOTO';
export const REMOVE_PHOTO_DATA = 'REMOVE_PHOTO_DATA';
export const UNSELECT_PHOTO = 'UNSELECT_PHOTO';
export const FETCH_PHOTOS_COUNT = 'FETCH_PHOTOS_COUNT';

export function fetchPhotosCount(albumId) {
	const url = `${ROOT_URL}/photos?albumId=${albumId}`;
	const request = axios.get(url);

	return {
		type: FETCH_PHOTOS_COUNT,
		payload: request
	};
}

export function fetchPhotos(albumId, limit, page) {
	const url = `${ROOT_URL}/photos?albumId=${albumId}&_page=${page}&_limit=${limit}`;
	const request = axios.get(url);

	return {
		type: FETCH_PHOTOS,
		payload: request
	};
}

export function removePhotoData() {
	return {
		type: REMOVE_PHOTO_DATA,
		payload: null
	}
}

export function selectPhoto(photo) {
	console.log("selecting photo");
	return {
		type: SELECT_PHOTO,
		payload: photo
	}
}

export function unselectPhoto() {
	return {
		type: UNSELECT_PHOTO,
		payload: null
	}
}