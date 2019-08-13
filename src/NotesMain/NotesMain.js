import React from 'react';
import NotesItem from '../NotesItem/NotesItem.js';
import './NotesMain.css';


export default function NotesMain(props){
	if (props.routerProps.match.path === '/'){
		const notes = props.info.notes.map((note,i) => (<NotesItem {...note} key={i} />))
		console.log('notes from NotesMain', notes)

		return(
			<div className='body'>
				<h1>List All Notes</h1>
				<div>
					{notes}

				</div>
			</div>
		);
	}else{
		console.log ('props from NotesMain else', props.info.notes)
		console.log('notes.folderID from NotesMain else', props.info.notes.folderId)
		console.log ('params folderId', props.routerProps.match.params.folderId)
		const notesFiltered = props.info.notes.filter(notes =>
			notes.folderId === props.routerProps.match.params.folderId)
		console.log ('notesFiltered', notesFiltered)
		const notesToRender= notesFiltered.map((note,i) => (<NotesItem {...note} key={i} />))
		return(
			<div className='body'>
				<h1>Notes</h1>
				<div>
					{notesToRender}
				</div>
			</div>)
	}
}