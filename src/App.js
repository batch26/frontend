import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrementByAmount, incrementByAmount } from './features/counter/counterSlice'
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value)
  const [input, setInput] = useState(0);

  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>

        </form>
        <input type="number" name="inputs" required="" value={input} onChange={e => setInput(e.target.value)}></input>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(incrementByAmount(Number(input)))}>+</button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrementByAmount(Number(input)))} disabled={count<=0}>-</button>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Basic with Amartek 3
        </a>
      </header>
    </div>
  );
}

export default App;
