import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos, selectPhoto } from '../actions/actions_photo';
import {Grid, Row, Col, Image, Pagination} from 'react-bootstrap';

const Thumbnail = (props) => {
	return (
		<Col md={2} lg={2}>
			<Image src={props.photo.thumbnailUrl} onClick={() => props.onClick(props.photo)}/>
		</Col>
	);
}

class PhotoList extends Component {
	componentWillMount() {
		this.props.fetchPhotos(1);
	}
	
	renderThumbnailRows() {
		const photos = this.props.photos;

		var thumbnailRows = [];
		for(var i=0; i<photos.length - 5; i=i+5){
			thumbnailRows.push(
				<Row className="thumbnailRow" key={i - (i * 4)}>
					<Thumbnail photo={photos[i]}   onClick={this.props.selectPhoto} />
					<Thumbnail photo={photos[i+1]} onClick={this.props.selectPhoto} />
					<Thumbnail photo={photos[i+2]} onClick={this.props.selectPhoto} />
					<Thumbnail photo={photos[i+3]} onClick={this.props.selectPhoto} />
					<Thumbnail photo={photos[i+4]} onClick={this.props.selectPhoto} />
					<Thumbnail photo={photos[i+5]} onClick={this.props.selectPhoto} />
				</Row>
			)
		}

		return thumbnailRows;
	}

	renderFullSizeImage() {
		if(!this.props.selectedPhoto) {
			return null;
		}

		return (
			<Row>
					<Image src={this.props.photos.selectedPhoto.url}/>
			</Row>
		)
	}

	render() {
		return (
			<div>
				<Grid className="photoGrid">
					<Row>
						<h3>Otsikko</h3>
						Tekijän nimi
					</Row>
						{this.renderFullSizeImage()}
						{this.renderThumbnailRows()}
					<Row className="paginationRow">
						<Pagination bsSize="Large" prev next first last items={20} maxButtons={10}/>
					</Row>
				</Grid>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPhotos, selectPhoto}, dispatch)
}

function mapStateToProps(state) {
	return { photos: state.photos.all, selectedPhoto: state.photos.selectedPhoto };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);