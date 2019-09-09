import React from 'react';
import './NoteView.css';
import { format } from 'date-fns';
import APIContext from '../APIContext.js';
import DeleteNote from '../DeleteNote/DeleteNote.js';
import { Link} from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary.js';


export default class NoteView extends React.Component{
	
	static defaultProps ={
		match: {
			params: {}
		},
	}

	static contextType = APIContext;

	
	render(){
		console.log(this.props)
		console.log('notes context', this.context.notes)
		const thisNote = this.context.notes.find(note =>
   			note.id === +this.props.match.params.noteId
 		)
 		console.log('noteName', thisNote.name)
		return(
			<ErrorBoundary>
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
								<DeleteNote noteId ={this.props.match.params.noteId} />
							</li>
						</ul>
					</div>
					<p>
						{thisNote.content}
					</p>
					<div>
						<Link className= 'folders-item' to='note/add-note'>
							Add Note
						</Link>
					</div>
				</section>
			</ErrorBoundary>
		);			
	}
}
	
