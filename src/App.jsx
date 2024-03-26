import './App.css';
import './index.css';

import CreateCustomer from './components/customers/customer';
import CreateAccount from './components/accounts/bankAccount';
import Header from './components/header';
import { useSelector } from 'react-redux';
import Customer from './components/customers/customerHeader';

function App() {
  const fullName = useSelector(state => state.customer.fullname);

  return (
    <div className='app'>
      <Header />
      {fullName === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <CreateAccount />
        </>
      )}
    </div>
  );
}

export default App;

