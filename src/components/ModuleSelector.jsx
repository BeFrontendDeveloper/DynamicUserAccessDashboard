import React from 'react';

export const ModuleSelector = ({ modules, selectedModule, onModuleSelect }) => {
  return (
    <div className="module-selector">
      {modules.map(module => (
        <button
          key={module}
          onClick={() => onModuleSelect(module)}
          className={selectedModule === module ? 'active' : ''}
        >
          {module}
        </button>
      ))}
    </div>
  );
};