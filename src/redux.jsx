import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './components/accounts/account.slice';
import createCustomerReducer from './components/customers/customer.slice';
// import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: createCustomerReducer
  }
});

export default store;
