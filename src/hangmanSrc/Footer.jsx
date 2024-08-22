import React from 'react';
import logo from './img/logo.png'; 

export const Footer = ({ reset }) => (
  <footer className="bg-blue-950 p-2 text-center">
    <div className="flex justify-center items-center">
      <button
        onClick={reset}
        className="bg-blue-700 text-white rounded-md p-2 font-semibold hover:bg-slate-700 flex items-center space-x-2"
        aria-label="Retry the game"  
      >
        <span>RETRY</span>
        <img src={logo} alt="Logo" className="w-4 h-4" />
      </button>
    </div>
  </footer>
);
