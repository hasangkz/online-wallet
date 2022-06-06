import { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

const initialState = {
  balance: [
    {
      id: 1,
      text: 'Salary',
      amount: +4500,
    },
    {
      id: 2,
      text: 'Shopping',
      amount: -500,
    },
    {
      id: 3,
      text: 'Lend',
      amount: -2000,
    },
  ],
};

export const AppContext = createContext(initialState);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteBalance = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const addBalance = (balance) => {
    dispatch({ type: 'ADD', payload: balance });
  };

  return (
    <AppContext.Provider
      value={{ balance: state.balance, deleteBalance, addBalance }}
    >
      {children}
    </AppContext.Provider>
  );
};
