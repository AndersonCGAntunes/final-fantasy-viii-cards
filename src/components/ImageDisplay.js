import React from 'react';

const ImageDisplay = ({ imageName }) => {
  const imagePath = `/images/TT${imageName}.webp`;

  return (
    <div className='eleDisplay'>
      <h3>Descrição: {imageName}</h3>
      <img className='imagem' src={imagePath} alt={imageName} />
    </div>
  );
};

export default ImageDisplay;
