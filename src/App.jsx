import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');
  const [isTyping, setIsTyping] = useState(false); // Untuk menunjukkan apakah pengguna sedang mengetik

  // Memuat data catatan dari localStorage saat aplikasi dimuat
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Menyimpan data catatan ke localStorage setiap kali catatan berubah
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  // Fungsi untuk menambahkan catatan
  const addNote = () => {
    if (note.trim()) {
      const newNote = { text: note, time: new Date().toLocaleTimeString() };
      setNotes([...notes, newNote]);
      setNote('');
      setIsTyping(false); // Reset status mengetik setelah menambah catatan
    }
  };

  // Fungsi untuk menghapus catatan
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes); // Perbarui state dengan catatan yang telah dihapus
  };

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    setNote(e.target.value);
    setIsTyping(e.target.value.length > 0); // Menampilkan status mengetik
  };

  return (
    <div className="App">
      <div className="chat-window">
        <div className="chat-header">
          <h1>Daftar Catatan</h1>
        </div>
        <div className="chat-box">
          {notes.map((note, index) => (
            <div key={index} className="chat-bubble">
              <div className="note-text">{note.text}</div>
              <div className="note-time">{note.time}</div>
              <button className="delete-btn" onClick={() => deleteNote(index)}>
                Hapus
              </button>
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <input type="text" value={note} onChange={handleInputChange} placeholder="Tulis catatan..." />
          <button onClick={addNote} disabled={!note.trim()}>
            Kirim
          </button>
        </div>
        {isTyping && <div className="typing-indicator">Mengetik...</div>}
      </div>
    </div>
  );
}

export default App;
