import React from "react";
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Card from './components/Card';
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';

function App() {
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
  ]);
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert('Computer Number: ' + randomNum + ', Your guess: ' + userInput);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Fruits fruits={fruits}/>
        <FruitsCounter fruits={fruits}/>
        <Heading firstName="Ulysses" />
        <Heading firstName="Theseus" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Guess the number between 1 and 3</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Card h2="First card h2" h3="First card h3" classes="card-component" />
      <Card h2="Second card h2" h3="Second card h3" classes="card-component" />
    </div>
  );
}

export default App;
