import React from 'react';
import NotesItem from '../NotesItem/NotesItem.js';
import './NotesMain.css';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';


export default class NotesMain extends React.Component{

	static defaultProps ={
		match: {
			params: {}
		},
		onDeleteNote: () => {},
	}

	static contextType = APIContext;

	handleClickDelete = e => {
		e.preventDefault()

		fetch(`${APIconfigure.API_END}/notes/${this.props.match.params.noteId}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json'
			},
		})

		.then(res => {
			if (!res.ok)
				return res.json().then(e => Promise.reject(e))
			return res.json()
		})

		.then(() => {
			 this.context.deleteNote(this.props.match.params.noteId)
			 this.props.onDeleteNote(this.props.match.params.noteId)
		})

		.catch(error => {
			console.error({ error })
		})
	}

	handleDeleteNote = noteId => {
    	this.props.history.push(`/`)
    	
  	}


	render(){
		console.log('props from notes main!', this.props)
		console.log('handle delete note', this.handleDeleteNote)
		
		if (this.props.match.path === '/'){
			const notes = this.context.notes.map((note,i) => (<NotesItem {...note} key={i} />))

			return(
				<div className='body'>
					<h1>List All Notes</h1>
					<div>
						{notes}

					</div>
				</div>
			);
		}else{
			const notesFiltered = this.context.notes.filter(notes =>
				notes.folderId === this.props.match.params.folderId)
			const notesToRender= notesFiltered.map((note,i) => (<NotesItem {...note} key={i} onDeleteNote = {this.handleDeleteNote} />))
			return(
				<div className='body'>
					<h1>Notes</h1>
					<div>
						{notesToRender}
					</div>
				</div>)
		}
	}
}