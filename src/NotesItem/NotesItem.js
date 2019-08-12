import React from 'react';
import './NotesItem.css';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function NotesItem(props){
	return(
		<section className= 'NotesItemList'>
			<ul >
				<li> 
					<Link to={props.folderId}>
						{props.name}
					</Link>
				</li>
				<li>
					Modified {format(props.modified, 'Do MMM YYYY')}
				</li>
				<li>
					<button>Delete Note</button>
				</li>
			</ul>
		</section>
	);
}