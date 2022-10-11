import logo from './logo.svg';
import './App.css';

import React from 'react';

import Lifecycle from './Lifecycle'
import FetchCard from './FetchCard'
import Divider from './Divider'

import ResizeApp from './ResizeApp'


function App() {

  const [render, setRender] = React.useState(false)

  function renderComponent() {
    setRender(render => !render)
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={renderComponent} > Show Component </button>
        <img src={logo} className="App-logo" alt="logo" />
        <Lifecycle />
        <Divider />
        {render && <FetchCard />}
        <Divider />
        <ResizeApp />
        <Divider />
      </header>
    </div>
  );
}

export default App;
