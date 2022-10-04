import logo from './logo.svg';
import './App.css';

import Lifecycle from './Lifecycle'
import FetchCard from './FetchCard'
import Divider from './Divider'
import Post from './Posts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Lifecycle />
        <Divider />
        <FetchCard />
        <Divider />
        <Post />
      </header>
    </div>
  );
}

export default App;
