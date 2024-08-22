import React, { useState } from 'react';
import { Header } from './hangmanSrc/Header';
import { Footer } from './hangmanSrc/Footer';
import { ContentGraphics } from './hangmanSrc/MiddlePart';
import { randomWord } from './hangmanSrc/RandomWords';

function App() {
  const [noOfWrong, setNoOfWrong] = useState(0);
  const [answer, setAnswer] = useState(randomWord().word);
  const [category, setCategory] = useState(randomWord().category);

  // Reset function to start a new game
  const reset = () => {
    setNoOfWrong(0);
    const newWord = randomWord(); 
    setAnswer(newWord.word);
    setCategory(newWord.category);
  };

  // Update the number of wrong guesses
  const updateNoOfWrong = (newCount) => {
    setNoOfWrong(newCount);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header Component */}
      <Header />

      {/* Main content area */}
      <main className="flex-grow flex">
        <ContentGraphics
          noOfWrong={noOfWrong}
          answer={answer}
          updateNoOfWrong={updateNoOfWrong}
          reset={reset}
          category={category}
        />
      </main>

      {/* Footer Component */}
      <Footer reset={reset} />
    </div>
  );
}

export default App;
