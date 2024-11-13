import { useState, useEffect } from 'react';
import { INITIAL_DATA } from '../data/mockData';

export const useUserAccess = (userId) => {
  const [userAccess, setUserAccess] = useState(null);

  useEffect(() => {
    // In a real app, this would be an API call
    const userData = INITIAL_DATA.userAccess[userId];
    if (userData) {
      setUserAccess({
        userId,
        modules: userData.modules,
        transactions: userData.transactions,
      });
    }
  }, [userId]);

  return userAccess;
};