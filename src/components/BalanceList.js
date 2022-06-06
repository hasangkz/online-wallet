import React, { useContext } from 'react';
import { SingleBalance } from './SingleBalance';
import { AppContext } from '../context/AppContext';
export const BalanceList = () => {
  const { balance } = useContext(AppContext);
  return (
    <>
      <div className='gridItem'>
        <h3>Balance List</h3>
        <ul className='liste' id='liste'>
          {balance.map((item) => (
            <SingleBalance key={item.id} balance={item} />
          ))}
        </ul>
      </div>
    </>
  );
};
