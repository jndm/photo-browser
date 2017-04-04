import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PhotoModal from './photo_modal';
import { unselectAlbum } from '../actions/actions_album';
import { fetchPhotos, selectPhoto } from '../actions/actions_photo';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';

class PhotoList extends Component {
  
}