import React from 'react';
import { Link } from 'react-router-dom';
import './FoldersItem.css';

export default function FoldersItem(props){
	const foldersPath= `/folder/${props.id}`
	console.log('folderspath', foldersPath)
	return(
		<div>
			<ul>
				<li>
					<Link className= 'folders-item' to={foldersPath}>
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