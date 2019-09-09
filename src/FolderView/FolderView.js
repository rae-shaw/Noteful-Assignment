import React from 'react';
import './FolderView';
import { Link } from 'react-router-dom';
import APIContext from '../APIContext.js';

export default class FolderView extends React.Component{

	static defaultProps ={
		match: {
			params: {}
		}
	}

	static contextType = APIContext;

	render(){
		console.log('made it to FolderView!')
		console.log('props!', this.props)
 		console.log('folderview context!', this.context)
		const thisNote = this.context.notes.find(note =>
   		note.id === +this.props.match.params.noteId
 		)

 		const folderName = this.context.folders.find(folder=>
 			folder.id=== thisNote.folder_id)

 		
 		
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