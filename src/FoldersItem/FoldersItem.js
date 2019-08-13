import React from 'react';
import { Link } from 'react-router-dom';
import './FoldersItem.css';

export default function FoldersItem(props){
	const foldersPath= `/folder/${props.name}`
	return(
		<div>
			<ul>
				<li>
					<Link to={foldersPath}>
						{props.name}
					</Link>
				</li>
				<li>
					{props.noteCount}
				</li>
			</ul>
		</div>
	)
}