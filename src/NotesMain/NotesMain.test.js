import React from 'react';
import ReactDOM from 'react-dom';
import NotesMain from './NotesMain.js';

it ('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<NotesMain />, div);
	ReactDOM.unmountComponentAtNode(div);
})