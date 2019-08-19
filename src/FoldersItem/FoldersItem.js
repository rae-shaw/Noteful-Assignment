import React from 'react';
import { Link } from 'react-router-dom';
import './FoldersItem.css';
import PropTypes from 'prop-types';

export default function FoldersItem(props){
	const foldersPath= `/folder/${props.id}`
	const className = 'folders-item' + (props.highlighted ? ' highlighted' : '');
	console.log('highlighted', props.highlighted)
	return(
		<div>
			<ul>
				<li>
					<Link className= {className} to={foldersPath}>
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

FoldersItem.propTypes = {
  value: PropTypes.number
};