import React from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

const AlbumListItem = (props) => {
	return (
		<Panel className="albumListItem" collapsible header={`Album creator: ${props.user.name}`}>
    	<div>Name: {props.user.name}</div>
			<div>Email: {props.user.email} </div>
			<div>Phone: {props.user.phone} </div>
			<div>Website: {props.user.website}</div>
   	 <ListGroup fill>
    	  {props.albums.map((album) => {
					return (
						<ListGroupItem key={album.id} onClick={() => {console.log("")}}>
							{`ALBUM: ${album.title}`}
						</ListGroupItem>
					);
				})}
    	</ListGroup>
  	</Panel>
	);
}

export default (props) => {
	if(!props.albums || !props.users) {
		return null;
	}

	return (
		<div className="albumList">
			{props.users.map((user) => { 
				return <AlbumListItem key={user.id} user={user} albums={props.albums.filter((album) => album.userId === user.id)} /> 
			})}
		</div>
	);
}
