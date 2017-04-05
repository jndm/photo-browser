import React, {Component} from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectAlbum} from '../actions/actions_album';

/* 
*	Presentational component to render table
*	for album panel. 
*/
const UserInfo = (props) => {
	return (
		<table className="user-info-table">
			<tbody>
				<tr>
					<td className="bold">Name:</td>
					<td>{props.name}</td>
				</tr>
				<tr>
					<td className="bold">Email:</td>
					<td>{props.email}</td>
				</tr>
				<tr>
					<td className="bold">Phone:</td>
					<td>{props.phone}</td>
				</tr>
				<tr>
					<td className="bold">Website:</td>
					<td>{props.website}</td>
				</tr>
			</tbody>
		</table>
	);
}

/*
*	Presentational component to render album panel
*/
class AlbumListItem extends Component {
	render() {
		return (
				<Panel 
					className="album-list-item" 
					collapsible
					header={`${this.props.user.name} (${this.props.albums.length})`}
				>
					<UserInfo 
						name={this.props.user.name} 
						email={this.props.user.email} 
						phone={this.props.user.phone} 
						website={this.props.user.website}
					/>

					<ListGroup>
						<ListGroupItem className="list-group-item-header"> 
							ALBUMS 
						</ListGroupItem>
							{this.props.albums.map((album) => {
								return (
									<ListGroupItem key={album.id} onClick={() => this.props.selectAlbum(album, this.props.user)}>
										{album.title}
									</ListGroupItem>
								);
							})}
					</ListGroup>
				</Panel>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectAlbum}, dispatch)
}

export default connect(null, mapDispatchToProps)(AlbumListItem);