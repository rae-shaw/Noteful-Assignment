import React from 'react';
import NotesItem from '../NotesItem/NotesItem.js';


export default function NotesMain(props){
	// const notes=props.notePieceOfState.notes.map(note=> (<NotesItem name=note.name modified=note.modified} key={i} />))
	const notes = props.notePieceOfState.notes.map((note,i) => (<NotesItem {...note} key={i} />))
	return(
		<div className='body'>
			<h1>List All Notes</h1>
			<div>
				<li>
					<h2>{notes}</h2>
					<p>Date Modified</p>
					<button>Delete Note</button>
				</li>
			</div>
		</div>
	);
}