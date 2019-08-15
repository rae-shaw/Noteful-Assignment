import React, { Component } from 'react';

export default class FormFolder extends Component{
	render(){
		return(
			<section className='AddFolder'>
				<h2>Create a folder</h2>
				<div className='field'>
					<label htmlFor='folder-name-input'>
						Name
					</label>
					<input type='text' id='folder-name-input' name='folder-name' />
				</div>
				<div className='buttons'>
					<button type='submit'>
						Add folder
					</button>
				</div>
			</section>
		)
	}
}