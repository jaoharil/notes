import React from 'react';
import '/src/css/Sidebar.css';

function Sidebar({ notes, setSelectedNote, selectedNoteId }) {
  return (
    <div className="sidebar">
      <div>Catatan Aktif</div>
      {notes.length === 0 ? (
        <p>Tidak ada catatan</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className={`note-item ${note.id === selectedNoteId ? 'active' : ''}`} onClick={() => setSelectedNote(note)}>
            <h4>{note.title}</h4>
            <p>{note.body.substring(0, 50)}...</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Sidebar;
