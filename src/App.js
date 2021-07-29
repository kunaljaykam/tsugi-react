import './App.css';
import { TsugiWelcome } from './lib/components/TsugiWelcome';
import TsugiZap from './lib/components/TsugiZap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <TsugiWelcome name="Chuck"/>
      <TsugiZap name="Chuck Zap"/>
      </header>
    </div>
  );
}

export default App;
