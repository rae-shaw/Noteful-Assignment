import React, { Component } from 'react';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
import { Redirect } from 'react-router-dom';



class DeleteNote extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		redirect: false
    	};
  	}


	handleClickDelete=(noteId, callback) => {
			

			fetch(`${APIconfigure.API_END}/notes/${noteId}`, {
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
				this.setState({
					redirect: true
				});
				callback(noteId)
			})

			.catch(error => {
				console.error({ error })
			})
	}
	render (){
		if (this.state.redirect) {
			return <Redirect to="/" />;
		}
		return(
			<APIContext.Consumer>
				{(context) => (
					<button 
						onClick={() => {
							this.handleClickDelete(this.props.noteId, context.deleteNote);
						}}
					>
						delete note 
					</button>
				)}
			</APIContext.Consumer>
		);
	};
}

export default DeleteNote;