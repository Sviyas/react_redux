const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: ''
};

// ? redux
export default function accountReducer(state = initialAccountState, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload
      };

    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload
      };

    case 'account/payLoan':
      return {
        ...state,
        balance: 0,
        loan: 0,
        loanPurpose: ''
      };

    case 'account/requestLoan':
      return {
        ...state
      };

    default:
      return state;
  }
}

export const deposit = amount => {
  return { type: 'account/deposit', payload: amount };
};

export const withdraw = amount => {
  return { type: 'account/withdraw', payload: amount };
};

export const requestLoan = (amount, purpose) => {
  return { type: 'account/requestLoan', payload: { amount, purpose } };
};

export const payLoan = () => {
  return { type: 'account/payLoan' };
};
