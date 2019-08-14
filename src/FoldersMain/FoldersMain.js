import React from 'react';
import './FoldersMain.css';
import FoldersItem from '../FoldersItem/FoldersItem.js';

export default class FoldersMain extends React.Component {
	render(){
	const countNotesForFolder = (notes, folderId) => notes.filter(note => 
			note.folderId === folderId).length
	if (this.props.routerProps.match.path === '/'){
		
		const folders = this.props.info.folders.map((folder, i) => {
			const noteCount = countNotesForFolder(this.props.info.notes, folder.id)
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
		console.log('props from FoldersMain else', this.props)
		const folders = this.props.propinfo.folders.map((folder, i) => {
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
