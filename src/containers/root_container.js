import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';

import { fetchAlbums, selectAlbum } from '../actions/actions_album';
import { fetchPhotos } from '../actions/actions_photo';
import { fetchUsers } from '../actions/actions_users';

import AlbumList from './album_list';
import PhotoList from './photo_list';

class RootContainer extends Component {
	componentWillMount() {
		this.props.fetchAlbums();
		this.props.fetchUsers();
	}

	render() {
		console.log(this.props.users);
		if(this.props.selectedAlbum == null) {
			return (
					<div>
						<h1>Albums:</h1>
						<AlbumList albums={this.props.albums} users={this.props.users} />
					</div>
			);
		} 
		else {
			return (
					<div>
						<PhotoList />
					</div>
			);
		}
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchAlbums, selectAlbum, fetchPhotos, fetchUsers}, dispatch)
}

function mapStateToProps(state) {
	return { 
		albums: state.albums.all, 
		selectedAlbum: state.albums.selectedAlbum,
		photos: state.photos.all,
		users: state.users
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);