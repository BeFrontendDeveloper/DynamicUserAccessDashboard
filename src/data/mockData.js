export const INITIAL_DATA = {
    scopeAreaMapping: {
      SA_1: ['PRI_1', 'PRI_2', 'PRI_3', 'PRI_4', 'PRI_5', 'PRI_6', 'PRI_7', 'PRI_8'],
      SA_2: ['PRI_9', 'PRI_10', 'PRI_11'],
      SA_3: ['PRI_12', 'PRI_13', 'PRI_14', 'PRI_15'],
    },
    
    userAccess: {
      Person_1: {
        modules: ['Module_1', 'Module_2', 'Module_3'],
        transactions: [
          { scopeArea: 'SA_1', pri: 'PRI_1', count: 4 },
          { scopeArea: 'SA_1', pri: 'PRI_3', count: 5 },
          { scopeArea: 'SA_2', pri: 'PRI_10', count: 2 },
          { scopeArea: 'SA_3', pri: 'PRI_14', count: 0 },
        ]
      },
      Person_2: {
        modules: ['Module_2'],
        transactions: [

          { scopeArea: 'SA_3', pri: 'PRI_12', count: 4 },
          { scopeArea: 'SA_3', pri: 'PRI_13', count: 9 },
          { scopeArea: 'SA_3', pri: 'PRI_14', count: 0 },
          { scopeArea: 'SA_3', pri: 'PRI_15', count: 10 },
        ]
      },
      Person_3: {
        modules: ['Module_1', 'Module_2', 'Module_3'],
        transactions: [
          { scopeArea: 'SA_1', pri: 'PRI_1', count: 0 },
          { scopeArea: 'SA_1', pri: 'PRI_3', count: 0 },
          { scopeArea: 'SA_3', pri: 'PRI_12', count: 12 },
          { scopeArea: 'SA_3', pri: 'PRI_13', count: 0 },
          { scopeArea: 'SA_2', pri: 'PRI_10', count: 7 },
        ]
      }
    }
  };