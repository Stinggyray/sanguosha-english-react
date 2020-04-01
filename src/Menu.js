import React from 'react';
import logo from './sanguosha.png';
import './Menu.css';

/*
function Menu() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Menu.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Menu;
 */

export default class Menu extends React.Component {
	render() {
		return (
		    <div className = "MenuPage">
			    <h1>Sanguosha English Guide</h1>
			    <img src = {logo} className="SanguoshaPic" alt="logo"/>
			    <div className = "menunavbar">
				    <a href="/setup">Setup</a>
				    <a href="/howtoplay">How to Play</a>
				    <a href="/credits">Cards</a>
				    <a href="/donate">Characters</a>
			    </div>
			</div>
		);
	}
}
