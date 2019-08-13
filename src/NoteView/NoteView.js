import React from 'react';
import './NoteView.css';
//import { format } from 'date-fns';


export default class NoteView extends React.Component{
	//console.log(this.info.notes, 'props in noteview')
	//console.log(this.match, 'props match from noteview')
	
	
	render(){
		console.log('Router prop', this.props)
		console.log('from state', this.props.info)
		const thisNote = this.props.info.notes.find(note =>
   			note.id === this.props.routerProps.match.params.noteId
 		)
 		console.log('params', this.props.routerProps.match.params.noteId)
 		console.log('note variable', thisNote)
		return(
			
			<section>
				<div>
					<ul >
						<li> 
							
						</li>
						<li>
							
						</li>
						<li>
							<button>Delete</button>
						</li>
					</ul>
				</div>
				<p>
					
				</p>	
			</section>
		);			
	}
}
	
