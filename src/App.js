import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';
;

export function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [number, setNumber] = useState('')

  return (
    <div>
      <div>
        <input name='input' value={number} onChange={e => setNumber(e.target.value)}></input>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(Number(number)))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
