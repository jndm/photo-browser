import axios from 'axios';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const SELECT_PHOTO = 'SELECT_PHOTO';
export const REMOVE_PHOTO_DATA = 'REMOVE_PHOTO_DATA';
export const UNSELECT_PHOTO = 'UNSELECT_PHOTO';
export const FETCH_PHOTOS_COUNT = 'FETCH_PHOTOS_COUNT';

/*
*	GETs all photos by album id from back-end
* Only results count is saved in storage as photo count
*/
export function fetchPhotosCount(albumId) {
	const url = `${ROOT_URL}/photos/?albumId=${albumId}`;
	const request = axios.get(url);

	return {
		type: FETCH_PHOTOS_COUNT,
		payload: request
	};
}

/*
*	GETs all photos by album id from back-end
* limited by given limit, and page
*/
export function fetchPhotos(albumId, limit, page) {
	const url = `${ROOT_URL}/photos/?albumId=${albumId}&_page=${page}&_limit=${limit}/`;
	const request = axios.get(url);

	return {
		type: FETCH_PHOTOS,
		payload: request
	};
}

/*
*	Nulls photo data from storage
*/
export function removePhotoData() {
	return {
		type: REMOVE_PHOTO_DATA,
		payload: null
	}
}

/*
*	Makes parameter photo to selected photo
*/
export function selectPhoto(photo) {
	return {
		type: SELECT_PHOTO,
		payload: photo
	}
}

/*
*	Nulls selected photo in storage
*/
export function unselectPhoto() {
	return {
		type: UNSELECT_PHOTO,
		payload: null
	}
}