import React, { useState } from 'react';
import '/src/css/AddForm.css';

function AddNoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) {
      setError('Harap isi semua form sebelum menambahkan catatan.');
      return;
    }
    setError('');
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote);
    setTitle('');
    setBody('');
  };

  return (
    <form className="add-note-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Judul catatan..." value={title} maxLength="50" onChange={(e) => setTitle(e.target.value)} />
      <p className="char-limit">{50 - title.length} karakter tersisa</p>
      <textarea placeholder="Isi catatan..." value={body} onChange={(e) => setBody(e.target.value)}></textarea>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" disabled={!title || !body}>
        Tambah Catatan
      </button>
    </form>
  );
}

export default AddNoteForm;
