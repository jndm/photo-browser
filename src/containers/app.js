import React, {Component} from 'react';
import {connect} from 'react-redux';

import AlbumList from '../containers/album_list';
import PhotoList from './photo_list';

/*
*	Component that handles choosing	which 
*	view (albumlist or photolist) to render
*/
class App extends Component {
	render() {
		if(!this.props.selectedAlbumData) {
			return (
				<div>
					<div className="header">
						Albums
					</div>
					<AlbumList />
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

function mapStateToProps(state) {
	return { 
		selectedAlbumData: state.albums.selectedAlbumData,
	};
}

export default connect(mapStateToProps)(App);