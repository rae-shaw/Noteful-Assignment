import React from 'react';
import './FoldersMain.css';
import FoldersItem from '../FoldersItem/FoldersItem.js';

export default function FoldersMain(props){
	const folders = props.info.folders.map((folder, i) => (<FoldersItem{...folder} key={i} />))
	console.log(folders, 'folders from FoldersMain')
	const countNotesForFolder = (notes, folderId) => notes.filter(note => note.folderId === folderId).length
	console.log(props.info.notes, 'here are the notes');
	return(
		<div className='foldersBody'>
			<h1>All Folders Listed</h1>
			<div>
				{folders}
			</div>	
			<div>
				{countNotesForFolder(props.info.notes, props.info.folderId)}
			</div>
			<div>
				<button>Add Folder</button>
			</div>
		</div>
	);
}