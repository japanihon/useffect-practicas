import logo from './logo.svg';
import './App.css';

import Lifecycle from './Lifecycle'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Lifecycle />
      </header>
    </div>
  );
}

export default App;
