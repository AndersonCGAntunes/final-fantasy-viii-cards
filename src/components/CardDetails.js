import React from 'react';

const CardDetails = ({ cardData }) => {
  const cardName = Object.keys(cardData)[0];
  const { elemental, cardMod, howToObtain } = cardData[cardName];

  return (
    <div className='eleDetails'>
      <h3>Detalhes da carta</h3>
      <p><strong>Elemental:</strong> {elemental}</p>
      <p><strong>Pode Modificar em:</strong> {cardMod}</p>
      <p><strong>Como Obter:</strong></p>
      <ul>
        {howToObtain.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardDetails;
