import axios from 'axios';

const ROOT_URL = 'http://jsonplaceholder.typicode.com';

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers() {
	const url = `${ROOT_URL}/users`;
	const request = axios.get(url);

	console.log('fetching users');
	return {
		type: FETCH_USERS,
		payload: request
	};
}