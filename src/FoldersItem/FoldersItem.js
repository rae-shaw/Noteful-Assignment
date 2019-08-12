import React from 'react';
import { Link } from 'react-router-dom';
import './FoldersItem.css';

export default function FoldersItem(props){

	return(
		<div>
			<ul>
				<li>
					<Link to={props.folderIdPath}>
						{props.name}
					</Link>
				</li>
				<li>
					{props.noteCount}
				</li>
			</ul>
		</div>)
}