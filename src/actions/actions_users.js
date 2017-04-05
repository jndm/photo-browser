import axios from 'axios';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export const FETCH_USERS = 'FETCH_USERS';

/*
* GETs all users from back-end
*/
export function fetchUsers() {
	const url = `${ROOT_URL}/users/`;
	const request = axios.get(url);

	return {
		type: FETCH_USERS,
		payload: request
	};
}