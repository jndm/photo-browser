import {combineReducers} from 'redux';

import AlbumReducer from './reducer_albums';
import PhotoReducer from './reducer_photos';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
	albums: AlbumReducer,
	photos: PhotoReducer,
	users: UsersReducer
});

export default rootReducer;