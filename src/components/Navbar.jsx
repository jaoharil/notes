import React from 'react';
import '/src/css/Navbar.css';

function Navbar({ searchKeyword, setSearchKeyword }) {
  return (
    <div className="navbar">
      <div className="navbar-title">Catatan Saya</div>
      <input type="text" placeholder="Cari catatan..." value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
      <div className="navbar-icons">
        <i className="fas fa-user-circle"></i>
        <i className="fas fa-cog"></i>
      </div>
    </div>
  );
}

export default Navbar;
