import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ChatSection from './components/ChatSection';
import AddNoteForm from './components/AddNoteForm';
import './App.css';

const initialData = [
  {
    id: 1,
    title: 'Babel',
    body: 'Babel adalah tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama.',
    archived: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'React',
    body: 'React adalah library JavaScript untuk membangun UI.',
    archived: false,
    createdAt: new Date().toISOString(),
  },
];

function App() {
  const [notes, setNotes] = useState(initialData);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  const handleAddNote = (note) => {
    setNotes([note, ...notes]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setSelectedNote(null);
  };

  const handleToggleArchive = (id) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)));
  };

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchKeyword.toLowerCase()));

  return (
    <div className="container">
      <div className="app">
        <Navbar searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
        <div className="app-body">
          <Sidebar notes={filteredNotes} setSelectedNote={setSelectedNote} selectedNoteId={selectedNote?.id} />
          <ChatSection note={selectedNote} onDeleteNote={handleDeleteNote} onToggleArchive={handleToggleArchive} />
          <AddNoteForm onAddNote={handleAddNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
