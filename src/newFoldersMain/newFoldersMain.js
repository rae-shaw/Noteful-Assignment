import React from 'react';


export default function NewFoldersMain(props) {
  const countNotesForFolder = (notes, folderId) => notes.filter(note => note.folderId === folderId).length
  return (
    <div className='NewFoldersMain'>
      <ul className='NewFoldersMain__list'>
        {props.folders.map(folder =>
          <li key={folder.id}>
              <span className='NoteListNav__num-notes'>
                {countNotesForFolder(props.notes, folder.id)}
              </span>
              {folder.name}
          </li>
        )}
      </ul>
    </div>
  )
}

NewFoldersMain.defaultProps = {
  folders: []
}
