import React from 'react';
import './FoldersMain.css';
import FoldersItem from '../FoldersItem/FoldersItem.js';
import APIContext from '../APIContext.js';
import { Link} from 'react-router-dom';

export default class FoldersMain extends React.Component {
	static defaultProps ={
		match: {
			params: {}
		}
	}

	static contextType = APIContext;

	render(){
	const countNotesForFolder = (notes, folder_id) => notes.filter(note => 
			note.folder_id === folder_id).length
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
						<Link className= 'folders-item' to='/folder/add-folder'>
							Add Folder
						</Link>		
					</div>
				</div>
			);
	}else{
		const countNotesForFolder = (notes, folder_id) => notes.filter(note => 
			note.folder_id === folder_id).length
		const currentFolder = this.props.match.params.folder_id;
		const folders = this.context.folders.map((folder, i) => {
			const noteCount = countNotesForFolder(this.context.notes, folder.id)
			const folderIdPath=`folder/${folder.id}`
			return (<FoldersItem{...folder} noteCount ={noteCount} highlighted = {currentFolder === folder.id} key={i} folderIdPath={folderIdPath} />)
		})
			return(
				<div className='foldersBody'>
					<h1>All Folders Listed</h1>
					<div >
						{folders}
					</div>	
					<div>
						<Link className= 'folders-item' to='/folder/add-folder'>
							Add Folder
						</Link>		
					</div>
				</div>
			);
	}
}
}
