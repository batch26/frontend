import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './components/page/layout/index.js'
import Dashboard from './components/page/admin/dashboard/index.js';
import Demo from './components/page/admin/demo/index.js';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Admin/>}>
        <Route index element={<Dashboard/>} />
        <Route path="demo" element={<Demo/>} />
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>

        </form>
        <input type="number" name="inputs" required="" value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(incrementByAmount(Number(inputValue)))}>+</button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrementByAmount(Number(inputValue)))} disabled={count<=0}>-</button>
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
    </div> */}