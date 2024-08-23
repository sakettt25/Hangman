import React from 'react';

// Style for the head of the Hangman figure
const HEAD_STYLE = {
  width: '5rem', // of square
  height: '5rem',
  borderRadius: '100%', // Makes it a circle
  border: '6px solid black', // Black border
  position: 'absolute', // Positioning it absolutely within its container
  top: '3rem', // Positioned from the top of the container
  right: '2.8rem', // Positioned to the left of the container's right edge
};

// Style for the body of the Hangman figure
const BODY_STYLE = {
  width: '0.35rem', //bold
  height: '7rem', // inc , line height inc downwards
  backgroundColor: 'black',
  position: 'absolute',
  top: '8rem', // Positioned from the top of the container
  right: '5rem',
};

// Style for the right arm of the Hangman figure
const RIGHT_ARM_STYLE = {
  width: '6.15rem', // 90px ---- inc , down
  height: '0.35rem', // 4px ---- bold
  backgroundColor: 'black',
  position: 'absolute',
  top: '9.9rem', // Positioned 150.5px from the top of the container
  right: '-1rem', // Positioned 90px to the left of the container's right edge
  transform: 'rotate(-30deg)', // Rotate 30 degrees
  transformOrigin: 'left center', // Adjust rotation origin to the left center
  borderRadius: '0.3rem', // Rounded corners


};

// Style for the left arm of the Hangman figure
const LEFT_ARM_STYLE = {
  width: '6rem', // 90px
  height: '0.35rem', // 4px
  backgroundColor: 'black',
  position: 'absolute',
  top: '10rem', // Positioned 151.5px from the top of the container
  right: '5rem', // Positioned 2px to the right of the container's right edge
  transform: 'rotate(30deg)', // Rotate 30 degrees
  transformOrigin: 'right center', // Adjust rotation origin to the right center
  borderRadius: '0.3rem', // Rounded corners 
};

// Style for the right leg of the Hangman figure
const RIGHT_LEG_STYLE = {
  width: '7.2rem', // 100px
  height: '0.35rem', // 4px
  backgroundColor: 'black',
  position: 'absolute',
  top: '14.65rem', // Positioned 210px from the top of the container
  right: '-2rem', // Positioned 90px to the left of the container's right edge
  transform: 'rotate(30deg)', // Rotate 30 degrees down
  transformOrigin: 'left center', // Adjust rotation origin to the left center
  borderRadius: '0.3rem', // Rounded corners
};

// Style for the left leg of the Hangman figure
const LEFT_LEG_STYLE = {
  width: '7.1rem', // 100px
  height: '0.35rem', // 4px
  backgroundColor: 'black',
  position: 'absolute',
  top: '14.6rem', // Positioned 210px from the top of the container
  right: '5rem', // Aligned with the right edge of the container
  transform: 'rotate(-30deg)', // Rotate 30 degrees down
  transformOrigin: 'right center', // Adjust rotation origin to the right center
  borderRadius: '0.3rem', // Rounded corners

 
};

const BODY_PARTS = [
  <div style={HEAD_STYLE} key="head" />,
  <div style={BODY_STYLE} key="body" />,
  <div style={RIGHT_ARM_STYLE} key="right-arm" />,
  <div style={LEFT_ARM_STYLE} key="left-arm" />,
  <div style={RIGHT_LEG_STYLE} key="right-leg" />,
  <div style={LEFT_LEG_STYLE} key="left-leg" />,
];

const HangmanDraw = ({ numberOfGuess }) => {
  return (
    <div style={{ position: 'relative', width: '200px', height: '400px' }}>
      {BODY_PARTS.slice(0, numberOfGuess)}
      <div style={{
        // hanging part
        width: '0.5rem',
        height: '3rem',
        backgroundColor: 'black',
        position: 'absolute',
        top: '0',
        right: '5rem', // inc val , shift left
      }} />
      <div style={{
        // beam
        width: '10rem',
        height: '0.5rem',
        backgroundColor: 'black',
        marginLeft: '-3rem',
      }} />
      <div style={{
        // long line
        width: '0.5rem',
        height: '25rem',
        backgroundColor: 'black',
        marginLeft: '-3rem',
      }} />
      <div style={{
        // base 
        width: '15rem',
        height: '0.5rem',
        backgroundColor: 'black',
        borderRadius: '0.375rem',
        marginLeft: '-5rem',
      }} />
    </div>
  );
};

export default HangmanDraw;
