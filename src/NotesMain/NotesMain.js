import React from 'react';
import './NotesMain';


export default function NotesMain(props){
	return(
		<div className='body'>
			<h1>List All Notes</h1>
			<div>
				<h2>Name</h2>
				<p>Date Modified</p>
				<button>Delete Note</button>
			</div>
			<div>
				<h2>Name</h2>
				<p>Date Modified</p>
				<button>Delete Note</button>
			</div>
			<div>
				<h2>Name</h2>
				<p>Date Modified</p>
				<button>Delete Note</button>
			</div>
			<div>
				<button>Add Note</button>
			</div>
		</div>
	);
}