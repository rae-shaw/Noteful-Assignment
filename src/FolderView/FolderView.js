import React from 'react';
import './FolderView';

export default class FolderView extends React.Component{
	render(){
		const thisNote = this.props.info.notes.find(note =>
   		note.id === this.props.routerProps.match.params.noteId
 		)
 		
	return(
			< >
				<button>Go Back</button>
				<h1>Folder #</h1>
			</>
		);
	}
}