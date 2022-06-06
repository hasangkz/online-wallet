import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const SingleBalance = ({ balance }) => {
  const isaret = balance.amount < 0 ? '-' : '+';

  const { deleteBalance } = useContext(AppContext);

  return (
    <li className={balance.amount < 0 ? 'eksi' : 'arti'}>
      {balance.text}
      <span>
        {isaret} ${Math.abs(balance.amount)}
      </span>
      <button className='sil-btn' onClick={() => deleteBalance(balance.id)}>
        x
      </button>
    </li>
  );
};
