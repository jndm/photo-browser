import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';

import PhotoModal from './photo_modal';
import {unselectAlbum} from '../actions/actions_album';
import {fetchPhotos, fetchPhotosCount, selectPhoto, removePhotoData} from '../actions/actions_photo';

const MAX_PHOTO_LIMIT = 24;
var pageNumber = 1;

/*
*	Component to render photos in selected album.
* Photo count shown in view is based on MAX_PHOTO_LIMIT
*/
class PhotoList extends Component {
	componentWillMount() {
		this.props.fetchPhotosCount(this.props.selectedAlbumData.album.id);
		this.props.fetchPhotos(this.props.selectedAlbumData.album.id, MAX_PHOTO_LIMIT, pageNumber);
	}

	componentWillUnmount() {
		pageNumber = 1;
		this.props.removePhotoData();
	}

	previousPage() {
		pageNumber--;
		this.props.removePhotoData();
		this.props.fetchPhotos(this.props.selectedAlbumData.album.id, MAX_PHOTO_LIMIT, pageNumber);
	}

	nextPage() {
		pageNumber++;
		this.props.removePhotoData();
		this.props.fetchPhotos(this.props.selectedAlbumData.album.id, MAX_PHOTO_LIMIT, pageNumber);
	}

	render() {
		if(!this.props.photos || !this.props.photosCount) {
			return null;
		}

		var disablePreviousButton = pageNumber <= 1;
		var disableNextButton = pageNumber >= Math.ceil(this.props.photosCount / MAX_PHOTO_LIMIT);

		return (
			<div>
				<Grid className="photoGrid">
					
					<Row>
						<Button 
							className="return-button" 
							bsStyle="primary" 
							bsSize="large" 
							onClick={() => this.props.unselectAlbum()}
						>
							&larr; Back To Albums
						</Button>
					</Row>

					<Row>
						<h2>{this.props.selectedAlbumData.album.title}</h2>
						<strong>{`By: ${this.props.selectedAlbumData.creator.name}`}</strong>	
					</Row>

					<Row>
						<PhotoModal />
						{this.props.photos.map((photo) => { 
							var photoThumbnailUrlHttps = photo.thumbnailUrl.replace("http://", "https://") + "/";
							return (
								<Col key={photo.id} className="thumbnail-col" md={2} lg={2}>
									<Image src={photoThumbnailUrlHttps} onClick={() => this.props.selectPhoto(photo)}/>
								</Col>
							); 
						})}
					</Row>

					<Row>
						<Col className="page-select-col" md={2} lg={2}>
							<Button 
								className="page-change-button" 
								disabled={disablePreviousButton} 
								onClick={() => this.previousPage()}
							>
								&larr; Previous Page
							</Button>
						</Col>
						<Col className="page-select-col" md={2} lg={2} mdOffset={8} lgOffset={8}>
							<Button 
								className="page-change-button"
								disabled={disableNextButton} 
								onClick={() => this.nextPage()}
							>
								Next Page &rarr;
							</Button>
						</Col>
					</Row>

				</Grid>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchPhotos, 
		selectPhoto, 
		unselectAlbum, 
		removePhotoData, 
		fetchPhotosCount}, dispatch);
}

function mapStateToProps(state) {
	return { 
		photos: state.photos.all, 
		selectedPhoto: state.photos.selectedPhoto, 
		selectedAlbumData: state.albums.selectedAlbumData, 
		photosCount: state.photos.photosCount 
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);