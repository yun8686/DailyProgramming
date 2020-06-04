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
      <TweetWrapper
        title="useStateを使って押した回数をカウントするボタンを作ってみました"
        component={<IncrementsButton defaultValue={0} />}
        tweetId="1268485591533944832"
      />
    </div>
  );
}

export default App;
