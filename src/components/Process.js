import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
export const Process = () => {
  const { balance } = useContext(AppContext);
  const birimler = balance.map((item) => item.amount);

  const incomes = birimler
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(1);

  const expenses = (
    birimler
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(1);

  return (
    <ul>
      <li>
        Income
        <p id='para-arti' className='para arti'>
          {incomes}
        </p>
      </li>
      <li>
        Expense
        <p id='para-eksi' className='para eksi'>
          {expenses}
        </p>
      </li>
    </ul>
  );
};
