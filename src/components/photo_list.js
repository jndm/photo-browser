import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../actions/index';
import { Image } from 'react-bootstrap';
import _ from 'lodash';

class PhotoList extends Component {
	componentWillMount() {
		this.props.fetchPhotos();
	}
	
	renderPhotos() {
		console.log("heloou?");
		return this.props.photos.map((photos) => {
				return photos.map((photo) => {
						console.log(photo);
						return (
							<div className="test">
								<Image src={photo.thumbnailUrl} thumbnail/>
							</div>
						);
					});
		});
	}

	render() {
		return (
			<div>
					{this.renderPhotos()}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPhotos}, dispatch)
}

function mapStateToProps(state) {
	return { photos: state.photos };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);