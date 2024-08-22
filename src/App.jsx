import React, { useState, useEffect } from 'react';
import { Header } from './hangmanSrc/Header';
import { Footer } from './hangmanSrc/Footer';
import { ContentGraphics } from './hangmanSrc/MiddlePart';
import { randomWord } from './hangmanSrc/RandomWords';

function App() {
  const [noOfWrong, setNoOfWrong] = useState(0);
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');

  // Function to reset the game
  const reset = () => {
    setNoOfWrong(0);
    try {
      const newWord = randomWord();
      setAnswer(newWord.word);
      setCategory(newWord.category);
    } catch (error) {
      console.error('Error resetting game:', error);
    }
  };

  // UseEffect to automatically reset the game on startup
  useEffect(() => {
    reset(); // Automatically trigger reset when component mounts
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to update the number of wrong guesses
  const updateNoOfWrong = (newCount) => {
    setNoOfWrong(newCount);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex">
        <ContentGraphics
          noOfWrong={noOfWrong}
          answer={answer}
          updateNoOfWrong={updateNoOfWrong}
          reset={reset}
          category={category}
        />
      </main>
      <Footer reset={reset} />
    </div>
  );
}

export default App;
