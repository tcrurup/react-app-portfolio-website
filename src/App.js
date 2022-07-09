import logo from './logo.svg';
import './App.css';
import oAuthSignIn from './oAuthSign.js';
import Homepage from './containers/Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={oAuthSignIn}></button>
          <Homepage />
      </header>
    </div>
  );
}

export default App;
