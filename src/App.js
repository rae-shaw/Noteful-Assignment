import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FoldersMain from './FoldersMain/FoldersMain.js';
import NotesMain from './NotesMain/NotesMain.js';
import NoteView from './NoteView/NoteView.js';
import FolderView from './FolderView/FolderView.js';
import NotFound from './NotFound/NotFound.js';
import APIconfigure from './APIconfigure.js';
import APIContext from './APIContext.js';
import './App.css';

class App extends React.Component {
  state ={ 
    notes:[],
    folders: []
  };

  componentDidMount() {
        Promise.all([
          fetch(`${APIconfigure.API_END}/folders`),
          fetch(`${APIconfigure.API_END}/notes`)
        ])
        .then(([foldersResults, notesResults]) => {
          if (!foldersResults.ok)
            return foldersResults.json().then(e => Promise.reject(e));
          if (!notesResults.ok)
            return notesResults.json().then(e => Promise.reject(e));
          return Promise.all([foldersResults.json(), notesResults.json()]);
        })
        .then(([folders, notes]) => {
          this.setState({folders, notes});
        })
        .catch(error => {
          console.error({error});
        });
    }

  handleDeleteNote = noteId =>{
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  }

  render(){
    const contextValue ={
      notes: this.state.notes,
      folders: this.state.folders, 
      deleteNote: this.handleDeleteNote
    }

    return (
      <APIContext.Provider value={contextValue}>
        <div className='App'>
          <header>
            <h1>Noteful</h1>
          </header>
          <div className='mainSection'>
            <section className='sidebar'>
              <Switch>
                 <Route exact path='/' component = {FoldersMain} /> 
                 <Route path='/folder/:folderId' component = {FoldersMain} />
                 <Route path='/note/:noteId' component = {FolderView}/>
                 <Route component={NotFound} />
              </Switch>
            </section>
            <main className='main'>
              <Switch>
                <Route exact path='/' component = {NotesMain} />
                <Route path='/folder/:folderId' component = {NotesMain}/>
                <Route path='/note/:noteId' component = {NoteView} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>
        </div>
      </APIContext.Provider>
    );
  }
}

export default App;

//in FoldersMain and NotesMain for the folders route add/pass a prop for folderID to both above components
//in NoteView and FolderView for the note route add/pass a prop for noteID to both above components
