import React from 'react';
import './FolderView';

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
				<button>Go Back</button>
				<h1>{folderName.name}</h1>
			</ >
		);
	}
}