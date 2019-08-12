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
        <div className='mainSection'>
          <section className='sidebar'>
             <Route exact path='/' render={props =>(<FoldersMain info={this.state}/>)}/> 
             <Route path='/folder/:folderId' component={FoldersMain}/>
             <Route path='/note/:noteId' render={props=>(<FolderView info={this.state}/>)}/>
          </section>
          <main className='main'>
              <Route exact path='/' render={props=>(<NotesMain info={this.state}/>)}/>
              <Route path='/folder/:folderId' component={NotesMain}/>
              <Route path='/note/:noteId' component={NoteView}/>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

//in FoldersMain and NotesMain for the folders route add/pass a prop for folderID to both above components
//in NoteView and FolderView for the note route add/pass a prop for noteID to both above components
