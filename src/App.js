import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FoldersMain from './FoldersMain/FoldersMain.js';
import NotesMain from './NotesMain/NotesMain.js';
import NoteView from './NoteView/NoteView.js';
import FolderView from './FolderView/FolderView.js';
import NotFound from './NotFound/NotFound.js';
import STORE from './dummy-store.js';
import './App.css';

class App extends React.Component {
  state ={ 
    notes:[],
    folders: []
  };

  componentDidMount() {
        //setTimeout(() => this.setState(STORE), 600);
        this.setState(STORE)
    }

  renderViewRoutes(){

  }
  renderMainRoutes(){

  }
  render(){
    console.log('state from App', this.state)
    return (
      <div className='App'>
        <header>
          <h1>Noteful</h1>
        </header>
        <div className='mainSection'>
          <section className='sidebar'>
            <Switch>
               <Route exact path='/' render={props =>(<FoldersMain info={this.state}/>)}/> 
               <Route path='/folder/:folderId' render={props=>(<FoldersMain routerProps={props} propinfo={this.state}/>)} />
               <Route path='/note/:noteId' render={props=>(<FolderView routerProps={props} info={this.state}/>)}/>
               <Route component={NotFound} />
            </Switch>
          </section>
          <main className='main'>
            <Switch>
              <Route exact path='/' render={props=>(<NotesMain info={this.state}/>)}/>
              <Route path='/folder/:folderId' render={props=>(<NotesMain routerProps={props} info={this.state}/>)}/>
              <Route path='/note/:noteId' render={props=>(<NoteView routerProps={props} info={this.state}/>)} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

//in FoldersMain and NotesMain for the folders route add/pass a prop for folderID to both above components
//in NoteView and FolderView for the note route add/pass a prop for noteID to both above components
