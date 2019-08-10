import React from 'react';
import './FoldersMain.css';

export default function FoldersMain(){
	return(
		<div className='foldersBody'>
			<h1>All Folders Listed</h1>
			<div>
				<p>Folder 1</p>
			</div>
			<div>
				<p>Folder 2</p>
			</div>
			<div>
				<p>Folder 3</p>
			</div>
			<div>
				<p>Folder 4</p>
			</div>
			<div>
				<button>Add Folder</button>
			</div>
		</div>
	);
}