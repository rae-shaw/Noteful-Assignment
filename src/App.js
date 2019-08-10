import React from 'react';
import { Route } from 'react-router-dom';
import FoldersMain from './FoldersMain/FoldersMain.js';
import NotesMain from './NotesMain/NotesMain.js';
import NoteView from './NoteView/NoteView.js';
import FolderView from './FolderView/FolderView.js';
import STORE from './dummy-store.js';
import './App.css';

class App extends React.Component {
  state ={ 
    notes:[],
    folders: []
  };

  componentDidMount() {
        setTimeout(() => this.setState(STORE), 600);
    }

  renderViewRoutes(){

  }
  renderMainRoutes(){

  }
  render(){
    return (
      <div className='App'>
        <header>
          <h1>Noteful</h1>
        </header>
        <section className='sidebar'>
         <Route exact path='/' component={FoldersMain}/>
         <Route path='/folder/<with-a-folder-id-here>' component={FoldersMain}/>
         <Route path='/note/<with-a-note-id-here>' component={FolderView}/>
        </section>
        <main className='main'>
          <Route exact path='/' component={NotesMain}/>
          <Route path='/folder/<with-a-folder-id-here>' component={NotesMain}/>
          <Route path='/note/<with-a-note-id-here>' component={NoteView}/>
        </main>
        
      </div>
    );
  }
}

export default App;

//in FoldersMain and NotesMain for the folders route add/pass a prop for folderID to both above components
//in NoteView and FolderView for the note route add/pass a prop for noteID to both above components
