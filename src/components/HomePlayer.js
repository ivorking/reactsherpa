import React, { Component } from 'react';
import MainNav from '../components/MainNav';
import './styles/App.css';

class HomePlayer extends Component {
   render() {
      return (
         <div>
            <header className="App-header">
               <h1 className="App-title">Board Games Coach </h1>
            </header>
            <MainNav />
            <h2 className="App-header">Board Games Coach</h2>
            <p className="Page-type">Player Home</p>
            <p className="Ordinary-text">Select a menu item below...</p>
            <ul>
               <li><a href="/findcoach">Find a Coach for an event</a></li>
               <li><a href="/GamesPage">Update favourite games list</a></li>
               <li><a href="/accounts">Account</a></li>
            </ul>
         </div>
      )
   }
};

export default HomePlayer;