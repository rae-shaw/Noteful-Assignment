import React from 'react';
import './FoldersMain.css';
import FoldersItem from '../FoldersItem/FoldersItem.js';
import APIContext from '../APIContext.js';

export default class FoldersMain extends React.Component {
	static defaultProps ={
		match: {
			params: {}
		}
	}

	static contextType = APIContext;

	render(){
	const countNotesForFolder = (notes, folderId) => notes.filter(note => 
			note.folderId === folderId).length
	if (this.props.match.path === '/'){
		
		const folders = this.context.folders.map((folder, i) => {
			const noteCount = countNotesForFolder(this.context.notes, folder.id)
			const folderIdPath=`folder/${folder.id}`
			return (<FoldersItem{...folder} key={i} noteCount={noteCount} folderIdPath={folderIdPath} />)
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
	}else{
		const folders = this.context.folders.map((folder, i) => {
			const folderIdPath=`folder/${folder.id}`
			return (<FoldersItem{...folder} key={i} folderIdPath={folderIdPath} />)
		})
			return(
				<div className='foldersBody'>
					<h1>All Folders Listed</h1>
					<div >
						{folders}
					</div>	
					<div>
						<button>Add Folder</button>
					</div>
				</div>
			);
	}
}
}
