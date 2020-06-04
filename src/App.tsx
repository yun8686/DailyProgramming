import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncrementsButton from './components/IncrementsButton';
import Header from './components/Header';
import TweetWrapper from './components/TweetWrapper';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TweetWrapper />
    </div>
  );
}

export default App;
