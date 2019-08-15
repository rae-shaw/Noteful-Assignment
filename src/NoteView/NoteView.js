import React from 'react';
import './NoteView.css';
import { format } from 'date-fns';
import APIContext from '../APIContext.js';

export default class NoteView extends React.Component{
	
	static defaultProps ={
		match: {
			params: {}
		},
		onDeleteNote: () => {},
	}

	static contextType = APIContext;

	handleDeleteNote = noteId => {
    	this.props.history.push(`/`)	
  	}
	
	render(){
		console.log(this.props)
		const thisNote = this.context.notes.find(note =>
   			note.id === this.props.match.params.noteId
 		)
		return(
			
			<section>
				<div>
					<ul >
						<li> 
							{thisNote.name}
						</li>
						<li>
							Modified {format(thisNote.modified, 'Do MMM YYYY')}
						</li>
						<li>
							<button 
								onClick={this.handleDeleteNote}>
									Delete
							</button>
						</li>
					</ul>
				</div>
				<p>
					{thisNote.content}
				</p>	
			</section>
		);			
	}
}
	
