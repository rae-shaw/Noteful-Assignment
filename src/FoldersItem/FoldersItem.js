import React from 'react';
import { Link } from 'react-router-dom';
import './FoldersItem.css';

export default function FoldersItem(props){
	const folderPath= props.folderIdPath

	return(
		<div>
			<ul>
				<li>
					<Link to={folderPath}>
						{props.name}
					</Link>
				</li>
				<li>
					{props.noteCount}
				</li>
			</ul>
		</div>)
}