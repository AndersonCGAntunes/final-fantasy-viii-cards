// CardList.js
import React from 'react';

const CardList = ({ cards, onSelectCard, valorDefault }) => {
  const data = cards.data || []; // Acessar o array 'data' dentro do objeto 'cards'

  return (
    <div className='eleSelect'>
      <h3>Escolha a carta</h3>
      <select value={valorDefault} onChange={(e) => onSelectCard(e.target.value)}>
        {data.map((card, index) => {
          const cardName = Object.keys(card)[0]; // Obter o nome da primeira propriedade
          return (
            <option key={index} value={cardName}>
              {cardName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CardList;
