import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        React is awesome!
        </p>
        <h1>Testing</h1>
        <p>Denis Pugliese</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I WILL learn React
        </a>
      </header>
    </div>
  );
}

export default App;
