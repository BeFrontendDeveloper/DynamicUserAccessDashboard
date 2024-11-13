export const getVisibleScopeAreas = (userAccess, selectedModule) => {
    if (!userAccess || !userAccess.transactions) return [];
    const activeTransactions = userAccess.transactions.filter(t => t.count >= 0);
    const uniqueScopeAreas = [...new Set(activeTransactions.map(t => t.scopeArea))];
    return uniqueScopeAreas;
  };
  
  export const getVisiblePRIs = (userAccess, selectedScopeArea) => {
    if (!userAccess || !userAccess.transactions) return [];
    const activeTransactions = userAccess.transactions.filter(
      t => t.scopeArea === selectedScopeArea && t.count >= 0
    );
    return activeTransactions.map(t => t.pri);
  };
  
  export const getFilteredTransactions = (userAccess, selectedScopeArea, selectedPRI) => {
    if (!userAccess || !userAccess.transactions) return [];
    return userAccess.transactions.filter(t => {
      if (selectedPRI) return t.pri === selectedPRI;
      if (selectedScopeArea) return t.scopeArea === selectedScopeArea;
      return true;
    });
  };