import React, {Component} from 'react';
import { connect } from 'react-redux';

import AlbumList from '../containers/album_list';
import PhotoList from './photo_list';

class App extends Component {
	render() {
		if(this.props.selectedAlbum == null) {
			return (
				<div>
					<div className="header">Albums</div>
					<AlbumList />
				</div>
			);
		} 
		else {
			return (
				<div>
					<PhotoList album={this.props.selectedAlbum}/>
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return { 
		selectedAlbum: state.albums.selectedAlbum,
	};
}

export default connect(mapStateToProps)(App);