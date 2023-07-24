import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Logout = () => {
  const goHome = useNavigate();
  const navigate = useNavigate();

  const handleLogout = () => {
    goHome('/login');
  };

  useEffect(() => {
    localStorage.removeItem('token');
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Logout</h1>
      <p>Are you sure you want to logout?</p>
      <button type="button" className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
