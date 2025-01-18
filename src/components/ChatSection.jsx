import React from 'react';
import '/src/css/ChatSection.css';

function ChatSection({ note, onDeleteNote, onToggleArchive }) {
  if (!note) {
    return (
      <div className="chat-section">
        <p>Pilih catatan untuk melihat detailnya</p>
      </div>
    );
  }

  return (
    <div className="chat-section">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <p className="note-date">Dibuat pada: {new Date(note.createdAt).toLocaleString()}</p>
      <button onClick={() => onDeleteNote(note.id)}>Hapus</button>
      <button onClick={() => onToggleArchive(note.id)}>{note.archived ? 'Pindahkan ke Catatan Aktif' : 'Arsipkan'}</button>
    </div>
  );
}

export default ChatSection;
