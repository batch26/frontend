import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount , decrementByAmount} from './features/counter/counterSlice'
import { useState } from 'react'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('');

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
        <div>
          <div>
            <input className="form-control" type="number" required="" value={inputValue} placeholder="" onChange={e => setInputValue(e.target.value)} />
          </div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(incrementByAmount(Number(inputValue)))}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrementByAmount(Number(inputValue)))}
              disabled = {count <= 0}
            >
              Decrement
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
