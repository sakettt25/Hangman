import React, { Component } from 'react';

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
  };

  constructor(props) {
    super(props);
    this.state = {
      guessed: new Set(),
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.answer !== this.props.answer || prevProps.category !== this.props.category) {
      this.setState({ guessed: new Set() });
    }
  }

  handleKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.props.reset();
      return;
    }
    
    if (evt.key.length === 1 && evt.key.match(/[a-z]/i)) {
      this.handleGuess({ target: { value: evt.key.toLowerCase() } });
    }
  }

  handleGuess(evt) {
    let letter = evt.target.value;
    const gameOver = this.props.noOfWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.props.answer;

    if (gameOver || isWinner) {
      return;
    }

    if (!this.state.guessed.has(letter)) {
      this.setState((st) => ({
        guessed: new Set(st.guessed).add(letter),
      }));
      const newWrongCount = this.props.noOfWrong + (this.props.answer.includes(letter) ? 0 : 1);
      this.props.updateNoOfWrong(newWrongCount);
    }
  }

  guessedWord() {
    return this.props.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  generateKeypad() {
    const rows = [
      "qwertyuiop",
      "asdfghjkl",
      "zxcvbnm"
    ];

    return rows.map((row, rowIndex) => (
      <div key={rowIndex} className="flex justify-center mb-2">
        {row.split("").map((letter) => (
          <button
            key={letter}
            value={letter}
            onClick={this.handleGuess}
            disabled={this.state.guessed.has(letter) || this.props.noOfWrong >= this.props.maxWrong || this.guessedWord().join("") === this.props.answer}
            className={`bg-blue-500 text-white rounded-md p-1 sm:p-3 mx-1 shadow-md hover:bg-blue-600 disabled:bg-gray-400 text-sm sm:text-lg ${
              this.state.guessed.has(letter) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {letter}
          </button>
        ))}
      </div>
    ));
  }

  render() {
    const gameOver = this.props.noOfWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.props.answer;

    const gameStateMessages = {  
      win: "Congrats, You have won the Game 🎉🥳",
      loss: "Better Luck Next Time 🙂"
    };

    let gameState = this.generateKeypad();
    if (isWinner) gameState = gameStateMessages.win;
    if (gameOver) gameState = gameStateMessages.loss;

    return (
      <div className="text-black text-center text-base sm:text-lg">
        <p className="mb-4 text-base sm:text-xl font-semibold">
          Guessed Left: {this.props.maxWrong - this.props.noOfWrong} / {this.props.maxWrong}
        </p>
        <p className="mb-4 font-bold text-base sm:text-xl">Category: {this.props.category}</p>
        <p className="text-4xl sm:text-6xl mb-4 font-bold tracking-wider">
          {!gameOver ? this.guessedWord().join(" ") : this.props.answer}
        </p>
        <p className="mb-6 text-sm sm:text-lg">{gameState}</p>
      </div>
    );
  }
}

export default Hangman;
