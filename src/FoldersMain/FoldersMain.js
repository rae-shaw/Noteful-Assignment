import React from 'react';
import './FoldersMain.css';
import FoldersItem from '../FoldersItem/FoldersItem.js';

export default function FoldersMain(props){
	if (props.routerProps.match.path === '/'){
		const countNotesForFolder = (notes, folderId) => notes.filter(note => 
			note.folderId === folderId).length
		const folders = props.info.folders.map((folder, i) => {
			const noteCount = countNotesForFolder(props.info.notes, folder.id)
			const folderIdPath=`folder/${folder.id}`
			return (<FoldersItem{...folder} key={i} noteCount={noteCount} folderIdPath={folderIdPath} />)
		})
		console.log('props from FoldersMain', props.routerProps.match.path)

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
	}else{
		console.log('props from FoldersMain else', props)
		const folders = props.propinfo.folders.map((folder, i) => {
			const folderIdPath=`folder/${folder.id}`
			return (<FoldersItem{...folder} key={i} folderIdPath={folderIdPath} />)
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
}
