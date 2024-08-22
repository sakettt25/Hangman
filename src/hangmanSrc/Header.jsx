import React from 'react';
import gameLogo from './img/game-logo.png'; 
import backLogo from './img/back-button2.png';

export const Header = () => (
  <header>
    <div className="bg-blue-950 p-2 flex items-center text-white text-base">
      <img src={gameLogo} alt="Game Logo" className="w-18 h-14 mr-3" />
      <span className="flex-grow text-center text-xl">WELCOME TO HANGMAN !!!</span>
      <div
        className="bg-blue-700 text-white rounded-md p-2 flex items-center space-x-2 hover:bg-slate-700 cursor-pointer"
        aria-label="Go back" 
      >
        <img src={backLogo} alt="Back Logo" className="w-6 h-5" />
        <span className="text-sm">Back</span>
      </div>
    </div>
  </header>
);
