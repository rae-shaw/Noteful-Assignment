import React from 'react';


export default function NotesItem(props){
	return(
		<div>
			<ul>
				<li>
					{props.name}
				</li>
				<li>
					{props.modified}
				</li>
			</ul>
		</div>
	);
}