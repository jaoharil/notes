import React from 'react';
import '/src/css/Asrip.css';

const Asrip = ({ archivedNotes, onDelete, onArchiveToggle }) => {
  return (
    <div className="asrip-container">
      <div>Catatan Arsip</div>
      {archivedNotes.length > 0 ? (
        <div className="asrip-list">
          {archivedNotes.map((note) => (
            <div key={note.id} className="asrip-item">
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              <p className="note-date">{new Date(note.createdAt).toLocaleString()}</p>
              <div className="note-actions">
                <button onClick={() => onDelete(note.id)}>Hapus</button>
                <button onClick={() => onArchiveToggle(note.id)}>Pindahkan ke Aktif</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-message">Tidak ada catatan diarsipkan.</p>
      )}
    </div>
  );
};

export default Asrip;
