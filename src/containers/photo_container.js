import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../actions/index';
import {Grid, Row, Col, Image, Pagination} from 'react-bootstrap';
import _ from 'lodash';

const Thumbnail = (props) => {
	return (
		<Col lg={2}>
			<Image src={props.url} />
		</Col>
	);
}

class PhotoContainer extends Component {
	componentWillMount() {
		this.props.fetchPhotos(1);
	}
	
	renderThumbnailRows() {
		const photos = this.props.photos;
		if(photos == null) {
			return null;
		}

		var thumbnailRows = [];
		for(var i=0; i<photos.length - 5; i=i+5){
			thumbnailRows.push(
				<Row className="thumbnailRow" key={i - (i * 4)}>
					<Thumbnail url={photos[i].thumbnailUrl} />
					<Thumbnail url={photos[i+1].thumbnailUrl} />
					<Thumbnail url={photos[i+2].thumbnailUrl} />
					<Thumbnail url={photos[i+3].thumbnailUrl} />
					<Thumbnail url={photos[i+4].thumbnailUrl} />
					<Thumbnail url={photos[i+5].thumbnailUrl} />
				</Row>
			)
		}

		return thumbnailRows;
	}

	render() {
		return (
			<div>
				<Grid>
					{this.renderThumbnailRows()}
				</Grid>
				<Row className="paginationRow">
						<Pagination bsSize="Large" prev next first last items={20} maxButtons={10}/>
				</Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer);