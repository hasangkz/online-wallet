import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Balance = () => {
  const { balance } = useContext(AppContext);
  const birimler = balance.map((item) => item.amount);
  const netBakiye = birimler.reduce((acc, item) => (acc += item), 0).toFixed(1);
  return (
    <>
      <h3>Your Balance</h3>
      <h1 id='bakiye'>{netBakiye}</h1>
    </>
  );
};
