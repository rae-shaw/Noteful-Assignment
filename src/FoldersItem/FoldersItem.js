import React from 'react';
import './FoldersItem.css';

export default function FoldersItem(props){

	return(
		<div>
			<li>
				{props.name}
			</li>
		</div>)
}