import React, { useState, useEffect } from 'react';
import { Header } from './hangmanSrc/Header';
import { Footer } from './hangmanSrc/Footer';
import { ContentGraphics } from './hangmanSrc/MiddlePart';
import { randomWord } from './hangmanSrc/RandomWords';

function App() {
  const [noOfWrong, setNoOfWrong] = useState(0);
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');

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

  useEffect(() => {
    reset(); 
  }, []); 

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
