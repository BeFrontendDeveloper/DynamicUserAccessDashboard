import React from 'react';

export const PRIList = ({ pris, selectedPRI, onPRISelect }) => {
  return (
    <div className="pri-list">
      {pris.map(pri => (
        <div
          key={pri}
          className={`pri ${selectedPRI === pri ? 'active' : ''}`}
          onClick={() => onPRISelect(pri)}
        >
          {pri}
        </div>
      ))}
    </div>
  );
};