import React from 'react';
import './NotesItem.css';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function NotesItem(props){
	const notePath = `/note/${props.id}`
	console.log('notesitem props!', props.onDeleteNote)
	return(
		<section className= 'NotesItemList'>
			<ul >
				<li> 
					<Link to={notePath}>
						{props.name}
					</Link>
				</li>
				<li>
					Modified {format(props.modified, 'Do MMM YYYY')}
				</li>
				<li>
					<button
					onClick = {props.onDeleteNote}>Delete Note</button>
				</li>
			</ul>
		</section>
	);
}