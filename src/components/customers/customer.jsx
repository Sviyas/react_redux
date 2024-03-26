import { useState } from 'react';
import '../../index.css';
import { createCustomer } from './customer.slice';
import { useDispatch } from 'react-redux';

// ? Create A New Customer
export default function CreateCustomer() {
  // ? user details
  const [name, setName] = useState('');
  const [nationalId, setNationalId] = useState('');

  const dispatch = useDispatch();

  const onHandleFunction = () => {
    if (!name || !nationalId) return;
    dispatch(createCustomer(name, nationalId));
  };

  return (
    <div className='create-cus'>
      <h1>Create New Customer</h1>

      <div className='customer'>
        <div>
          <label htmlFor='name'>Customer Full Name</label>
          <input
            type='text'
            placeholder='Name'
            autoCorrect={'off'}
            spellCheck='false'
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='name'>National ID</label>
          <input type='text' placeholder='National ID' onChange={e => setNationalId(e.target.value)} />
        </div>

        <button type='button' className='create-cus-btn' onClick={() => onHandleFunction()}>
          CREATE NEW ACCOUNT
        </button>
      </div>
    </div>
  );
}
