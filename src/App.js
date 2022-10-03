import logo from './logo.svg';
import './App.css';

import Lifecycle from './Lifecycle'
import FetchCard from './FetchCard'
import Divider from './Divider'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Lifecycle />
        <Divider />
        <FetchCard />
      </header>
    </div>
  );
}

export default App;
