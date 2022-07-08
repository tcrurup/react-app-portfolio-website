import logo from './logo.svg';
import './App.css';
import oAuthSignIn from './oAuthSign.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={oAuthSignIn}></button>
      </header>
    </div>
  );
}

export default App;
