import React from 'react';
import './FoldersMain.css';
import FoldersItem from '../FoldersItem/FoldersItem.js';

export default function FoldersMain(props){
	const countNotesForFolder = (notes, folderId) => notes.filter(note => note.folderId === folderId).length
	const folders = props.info.folders.map((folder, i) => {
		const noteCount = countNotesForFolder(props.info.notes, folder.id)
		const folderIdPath=`folder/${folder.id}`
		return (<FoldersItem{...folder} key={i} noteCount={noteCount} folderIdPath={folderIdPath} />)
		console.log(noteCount, 'here is noteCount')
	})
	
	
	return(
		<div className='foldersBody'>
			<h1>All Folders Listed</h1>
			<div>
				{folders}
			</div>	
			<div>
				<button>Add Folder</button>
			</div>
		</div>
	);
}