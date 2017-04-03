import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AlbumListItem from '../components/album_list_item';
import { fetchUsers } from '../actions/actions_users';
import { fetchAlbums } from '../actions/actions_album';

class AlbumList extends Component {
	componentWillMount() {
		this.props.fetchAlbums();
		this.props.fetchUsers();
	}

	render() {
		if(!this.props.albums || !this.props.users) {
			return <div> Loading album data... </div>;
		}

		return (
			<div className="album-list">
				{this.props.users.map((user) => { 
					return <AlbumListItem 
										key={user.id} 
										user={user} 
										albums={this.props.albums.filter((album) => album.userId === user.id)}/>
				})}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchAlbums, fetchUsers}, dispatch)
}

function mapStateToProps(state) {
	return { 
		albums: state.albums.all,
		users: state.users
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
