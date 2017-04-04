import React, {Component} from 'react';
import { Modal, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { unselectPhoto } from '../actions/actions_photo';

class PhotoModal extends Component {
  render() {
    if(!this.props.photo) {
      return null;
    }

    return (
      <div>
        <Modal 
          dialogClassName="photo-modal" 
          show={!this.props.photo ? false : true} 
          onHide={() => this.props.unselectPhoto()}>
          
          <Modal.Header closeButton>
            <Modal.Title>{this.props.photo.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Image src={this.props.photo.url} />
          </Modal.Body>

        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {photo: state.photos.selectedPhoto};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({unselectPhoto}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoModal);