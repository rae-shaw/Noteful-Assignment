import React, { Component } from 'react';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
import FormConfig from '../FormConfig/FormConfig';
import ValidationError from '../ValidationError.js';
import ErrorBoundary from '../ErrorBoundary.js';
import PropTypes from 'prop-types';

export default class FormNote extends Component{
	static defaultProps = {
    	history: {
      	push: () => { }
    	},
  	}

  	static contextType = APIContext;

	constructor(props) {
    	super(props);
    	this.state = {
      		name: {
        		value: "",
        		touched: false
      		}
      	}
    }

  	updateName(name) {
    	this.setState({ name: { value: name, touched: true } });
  	}

  	validateName() {
    	const name = this.state.name.value.trim();
    		if (name.length === 0) {
      			return "Name is required";
    		}
    		 else if (name.length < 3 || name.length > 20) {
      			return 'Folder name must be between 3 and 12 characters long';
      		}
  	}

  handleSubmit = e => {
    e.preventDefault()
    const newNote = {
      name: e.target['note-name'].value,
      content: e.target['note-content'].value,
      folderId: e.target['note-folder-id'].value,
      modified: new Date(),
    }
    fetch(`${APIconfigure.API_END}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newNote),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(note => {
        this.context.addNote(note)
        this.props.history.push(`/folder/${note.folderId}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }


render() {
    const { folders=[] } = this.context
    const nameError = this.validateName();
    return (
    	<ErrorBoundary>
	      <section className='AddNote'>
	        <h2>Create a note</h2>
	        <FormConfig onSubmit={this.handleSubmit}>
	          <div className='field'>
	            <label htmlFor='note-name-input' >
	              Name
	            </label>
	            <input type='text' id='note-name-input' name='note-name' onChange={e => this.updateName(e.target.value)} />
	          	{this.state.name.touched && (
	  			<ValidationError message={nameError} />
				)}
	          </div>
	          <div className='field'>
	            <label htmlFor='note-content-input'>
	              Content
	            </label>
	            <textarea id='note-content-input' name='note-content' />
	          </div>
	          <div className='field'>
	            <label htmlFor='note-folder-select'>
	              Folder
	            </label>
	            <select id='note-folder-select' name='note-folder-id'>
	              <option value={null}>...</option>
	              {folders.map(folder =>
	                <option key={folder.id} value={folder.id}>
	                  {folder.name}
	                </option>
	              )}
	            </select>
	          </div>
	          <div className='buttons'>
	            <button type='submit'>
	              Add note
	            </button>
	          </div>
	        </FormConfig>
	      </section>
    	</ErrorBoundary>
    )
  }
}
