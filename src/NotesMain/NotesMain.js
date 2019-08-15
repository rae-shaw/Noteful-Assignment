import React from 'react';
import NotesItem from '../NotesItem/NotesItem.js';
import './NotesMain.css';
import APIContext from '../APIContext.js';
import { Link} from 'react-router-dom';


export default class NotesMain extends React.Component{

	static defaultProps ={
		match: {
			params: {}
		}
	}

	static contextType = APIContext;



	onDeleteNote = noteId => {
    	this.props.history.push(`/`)
    	
  	}


	render(){
		console.log('props from notes main!', this.props)
		console.log('handle delete note', this.onDeleteNote)
		
		if (this.props.match.path === '/'){
			const notes = this.context.notes.map((note,i) => (<NotesItem {...note} key={i} />))

			return(
				<div className='body'>
					<h1>List All Notes</h1>
					<div>
						{notes}

					</div>
					<div>
						<Link className= 'folders-item' to='note/add-note'>
							Add Note
						</Link>	
					</div>
				</div>
			);
		}else{
			const notesFiltered = this.context.notes.filter(notes =>
				notes.folderId === this.props.match.params.folderId)
			const notesToRender= notesFiltered.map((note,i) => (<NotesItem {...note} key={i} />))
			return(
				<div className='body'>
					<h1>Notes</h1>
					<div>
						{notesToRender}
					</div>
					<div>
						<Link className= 'folders-item' to='note/add-note'>
							Add Note
						</Link>	
					</div>
				</div>
			)
		}
	}
}