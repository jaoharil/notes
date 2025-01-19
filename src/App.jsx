import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ChatSection from './components/ChatSection';
import AddNoteForm from './components/AddNoteForm';
import Asrip from './components/Asrip';

import { getInitialData } from './utils';
import './App.css';

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  const handleAddNote = (note) => {
    setNotes([note, ...notes]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (selectedNote?.id === id) {
      setSelectedNote(null);
    }
  };

  const handleToggleArchive = (id) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)));
  };

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchKeyword.toLowerCase()));

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <div className="app">
      {/* Navbar untuk pencarian */}
      <Navbar searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />

      <div className="app-body">
        {/* Sidebar untuk daftar catatan */}
        <Sidebar notes={activeNotes} setSelectedNote={setSelectedNote} selectedNoteId={selectedNote?.id} />

        {/* ChatSection untuk detail catatan */}
        <ChatSection note={selectedNote} onDeleteNote={handleDeleteNote} onToggleArchive={handleToggleArchive} />

        {/* Form untuk menambah catatan baru */}
        <AddNoteForm onAddNote={handleAddNote} />

        {/* Komponen untuk menampilkan catatan diarsipkan */}
        <Asrip archivedNotes={archivedNotes} onDelete={handleDeleteNote} onArchiveToggle={handleToggleArchive} />
      </div>
    </div>
  );
}

export default App;
