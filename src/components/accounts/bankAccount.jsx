import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit } from './account.slice';

// ? craeate a bank account
export default function CreateAccount() {
  const amount = useSelector(state => state.account.balance);

  console.log('amount :>> ', amount);

  const [depositAmt, setDepositAmt] = useState('');
  const [withDrawAmt, setWithDrawAmt] = useState('');
  const [requestLoanAmt, setRequestLoanAmt] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');

  const dispatch = useDispatch();

  const onDeposite = () => {
    if (!depositAmt) return;

    dispatch(deposit(depositAmt));
    // ? clear the current state
    setDepositAmt('');
  };

  return (
    <div className='create-account'>
      <h2>Your Account Operations</h2>

      <div className='account-op'>
        {/*  deposit */}
        <div>
          <label htmlFor='Deposit'>Deposit</label>
          <input
            type='number'
            spellCheck='false'
            autoCorrect='off'
            placeholder='Amount'
            value={depositAmt}
            onChange={e => setDepositAmt(+e.target.value)}
          />

          <select name='    ' id=''>
            <option value='US Dollar'>US Dollar</option>
            <option value='INR Dollar'>INR Dollar</option>
          </select>

          <button className='deposit-btn' type='button' onClick={() => onDeposite()}>
            DEPOSIT
          </button>
        </div>

        {/*  withdraw */}
        <div>
          <label htmlFor='Withdraw'>Withdraw</label>
          <input type='number' spellCheck='false' autoCorrect='off' placeholder='Amount' />
          <button className='withdraw-btn' type='button'>
            WITHDRAW
          </button>
        </div>

        {/* request loan */}
        <div>
          <label htmlFor='Request loan'>Request Loan</label>
          <input type='text' placeholder='LOAN AMOUNT' spellCheck='false' />
          <input type='text' placeholder='LOAN PURPOSE' spellCheck='false' />
          <button className='request-btn' type='button'>
            REQUEST LOAN
          </button>
        </div>

        {/* pay loan */}
        <div>
          <label htmlFor='payloan'>
            Pay Back <span>X</span>
          </label>
          <button className='payloan-btn' type='button'>
            PAYLOAN
          </button>
        </div>
      </div>
    </div>
  );
}
