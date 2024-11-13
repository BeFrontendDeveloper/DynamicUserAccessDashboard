// src/App.js
import React, { useState } from 'react';
import { ModuleSelector } from './components/ModuleSelector';
import { ScopeAreaList } from './components/ScopeAreaList';
import { PRIList } from './components/PRIList';
import { TransactionList } from './components/TransactionList';
import { useUserAccess } from './hooks/useUserAccess';
import { getVisibleScopeAreas, getVisiblePRIs, getFilteredTransactions } from './utils/helpers';

const App = () => {
  const [currentUser, setCurrentUser] = useState('Person_1'); // In real app, this would come from auth
  const userAccess = useUserAccess(currentUser);
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedScopeArea, setSelectedScopeArea] = useState(null);
  const [selectedPRI, setSelectedPRI] = useState(null);

  if (!userAccess) return <div>Loading...</div>;

  return (
    <div className="app">
      <div className="header">
        <h1>Dynamic User Access Dashboard</h1>
        <p>Bhavya's assignment</p>
      </div>
      <div className="user-selector">
        <select value={currentUser} onChange={(e) => setCurrentUser(e.target.value)}>
          <option value="Person_1">Person 1</option>
          <option value="Person_2">Person 2</option>
          <option value="Person_3">Person 3</option>
        </select>
      </div>

      <ModuleSelector
        modules={userAccess.modules}
        selectedModule={selectedModule}
        onModuleSelect={setSelectedModule}
      />
      
      <div className="content">
        <ScopeAreaList
          scopeAreas={getVisibleScopeAreas(userAccess, selectedModule)}
          selectedScopeArea={selectedScopeArea}
          onScopeAreaSelect={setSelectedScopeArea}
        />
        
        {selectedScopeArea && (
          <PRIList
            pris={getVisiblePRIs(userAccess, selectedScopeArea)}
            selectedPRI={selectedPRI}
            onPRISelect={setSelectedPRI}
          />
        )}
        
        {(selectedScopeArea || selectedPRI) && (
          <TransactionList
            transactions={getFilteredTransactions(
              userAccess,
              selectedScopeArea,
              selectedPRI
            )}
          />
        )}
      </div>
    </div>
  );
};

export default App;