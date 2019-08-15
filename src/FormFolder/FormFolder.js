import React, { Component } from 'react';
import APIContext from '../APIContext.js';
import APIconfigure from '../APIconfigure.js';
import FormConfig from '../FormConfig/FormConfig';
import ValidationError from '../ValidationError.js';
import ErrorBoundary from '../ErrorBoundary.js';
import PropTypes from 'prop-types';

export default class FormFolder extends Component{
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
    		 else if (name.length < 3 || name.length > 12) {
      			return 'Folder name must be between 3 and 12 characters long';
      		}
  	}


	handleSubmit = e => {
	    e.preventDefault()
	    const folder = {
	      name: e.target['folder-name'].value
	    }
	    fetch(`${APIconfigure.API_END}/folders`, {
	      method: 'POST',
	      headers: {
	        'content-type': 'application/json'
	      },
	      body: JSON.stringify(folder),
	    })
	      .then(res => {
	        if (!res.ok)
	          return res.json().then(e => Promise.reject(e))
	        return res.json()
	      })
	      .then(folder => {
	        this.context.addFolder(folder)
	        this.props.history.push(`/folder/${folder.id}`)
	      })
	      .catch(error => {
	        console.error({ error })
	      })
	}



	render(){
		const nameError = this.validateName();
		return(
			<ErrorBoundary>
				<section className='AddFolder'>
					<h2>Create a folder</h2>
					<FormConfig onSubmit={this.handleSubmit}>
						<div className='field'>
							<label htmlFor='folder-name-input'>
								Name
							</label>
							<input type='text' id='folder-name-input' name='folder-name' onChange={e => this.updateName(e.target.value)} />
							{this.state.name.touched && (
	  						<ValidationError message={nameError} />
							)}
						</div>
						<div className='buttons'>
							<button 
								type='submit' disabled={
	    						this.validateName()}
	    					>
									Add folder
							</button>
						</div>
					</FormConfig>
				</section>
			</ErrorBoundary>
		)
	}
}