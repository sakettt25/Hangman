import React from 'react';
import Hangman from './Hangman1';
import image0 from './img/hangPic/p0.jpg';
import image1 from './img/hangPic/p1.jpg';
import image2 from './img/hangPic/p2.jpg';
import image3 from './img/hangPic/p3.jpg';
import image4 from './img/hangPic/p4.jpg';
import image5 from './img/hangPic/p5.jpg';
import image6 from './img/hangPic/p6.jpg';

export const ContentGraphics = ({ noOfWrong, answer, updateNoOfWrong, reset, category }) => {
  const images = [image0, image1, image2, image3, image4, image5, image6];

  const imageIndex = Math.min(noOfWrong, images.length - 1);

  return (
    <main className="flex flex-1 overflow-hidden bg-gray-100">
      <div className="flex-grow bg-blue-600 p-4 flex flex-col items-center justify-center shadow-md">
        <Hangman
          noOfWrong={noOfWrong}
          answer={answer}
          updateNoOfWrong={updateNoOfWrong}
          reset={reset}
          category={category}
        />
      </div>
      <div className="w-1/3 bg-blue-300 p-8 flex items-center justify-center shadow-md">
        <img
          src={images[imageIndex]} 
          alt="Hangman"
          className="border-5 border-white shadow-md h-48 w-48 object-cover rounded-lg"
        />
      </div>
    </main>
  );
};
