import React from 'react';

export const ScopeAreaList = ({ scopeAreas, selectedScopeArea, onScopeAreaSelect }) => {
  return (
    <div className="scope-area-list">
      {scopeAreas.map(sa => (
        <div
          key={sa}
          className={`scope-area ${selectedScopeArea === sa ? 'active' : ''}`}
          onClick={() => onScopeAreaSelect(sa)}
        >
          {sa}
        </div>
      ))}
    </div>
  );
};