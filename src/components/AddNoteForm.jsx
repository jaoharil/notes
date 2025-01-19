import React, { useState } from 'react';
import '/src/css/AddForm.css';

function AddNoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxTitleLength = 50; // Batas maksimum karakter judul

  const handleTitleChange = (e) => {
    const input = e.target.value;
    // Potong input jika panjangnya melebihi batas
    if (input.length <= maxTitleLength) {
      setTitle(input);
    }
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || body.trim() === '') {
      alert('Judul dan isi catatan tidak boleh kosong!');
      return;
    }
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
      <div className="form-group">
        <label htmlFor="title">
          Judul Catatan <span>({maxTitleLength - title.length} karakter tersisa)</span>
        </label>
        <input type="text" id="title" placeholder="Judul catatan..." value={title} onChange={handleTitleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="body">Isi Catatan</label>
        <textarea id="body" placeholder="Isi catatan..." value={body} onChange={handleBodyChange}></textarea>
      </div>
      <button type="submit" disabled={!title || !body}>
        Tambah Catatan
      </button>
    </form>
  );
}

export default AddNoteForm;
