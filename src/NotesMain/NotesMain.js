import React from 'react';
import NotesItem from '../NotesItem/NotesItem.js';
import './NotesMain.css';


export default function NotesMain(props){
	
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
}