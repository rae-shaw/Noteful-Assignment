import React from 'react';
import './FolderView';
import { Link } from 'react-router-dom';

export default class FolderView extends React.Component{
	render(){
		const thisNote = this.props.info.notes.find(note =>
   		note.id === this.props.routerProps.match.params.noteId
 		)

 		const folderName = this.props.info.folders.find(folder=>
 			folder.id=== thisNote.folderId)

 		console.log('folder props!', folderName)
 		
	return(
			< >
				<button>
					<Link to={`/`}>
					Go Back
					</Link>
				</button>
				<h1>{folderName.name}</h1>
			</ >
		);
	}
} 