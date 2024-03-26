import { useSelector } from 'react-redux';
import '../../index.css';

export default function Customer({ amount }) {
  const name = useSelector(state => state.customer.fullname);

  return (
    <div className='profile'>
      <h1>👋 Welcome {name}</h1>
      <h1>{amount ? '' : 15000} </h1>
    </div>
  );
}
