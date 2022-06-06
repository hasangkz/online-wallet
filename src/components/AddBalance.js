import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

export const AddBalance = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addBalance } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBalance = { id: uuidv4(), text, amount: +amount };
    addBalance(newBalance);
    setText('');
    setAmount(0);
  };
  return (
    <div className='gridItem'>
      <form id='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='islemAd'>Process Name</label>
          <input
            id='islemAd'
            type='text'
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='miktar'>Amount</label>
          <input
            type='number'
            id='miktar'
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type='submit' className='btn'>
          Add
        </button>
      </form>
    </div>
  );
};
