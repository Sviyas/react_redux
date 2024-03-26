import { createSlice } from '@reduxjs/toolkit';

console.log('createSlice :>> ', createSlice);

// ? customer state management
const initialCustomerState = {
  fullname: '',
  nationalID: '',
  createdAt: ''
};

export default function createCustomerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case 'customer/createUser':
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt
      };

    case 'customer/updateName':
      return {
        ...state,
        fullname: action.payload.fullname
      };

    default:
      return state;
  }
}

export const createCustomer = (fullname, id) => {
  return { type: 'customer/createUser', payload: { fullname, nationalID: id } };
};

export const updateCustomer = fullname => {
  return { type: 'customer/updateName', payload: { fullname } };
};
