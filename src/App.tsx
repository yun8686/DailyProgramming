import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncrementsButton from './components/IncrementsButton';
import Header from './components/Header';
import TweetWrapper from './components/TweetWrapper';
import ZipCodeForm from './components/ZipCodeForm';
import ImageCarousel from './components/ImageCarousel';
import { AppBar } from '@material-ui/core';
import { ModalSample } from './components/ModalSample';
import SortablePaneSample from './components/SortablePaneSample';

function App() {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Header></Header>
      </AppBar>
      <div className="App">
        <TweetWrapper
          title="react-sortable-paneを使ってかんばん風カードを作ってみました"
          component={<SortablePaneSample />}
          tweetId="1269786875713052672"
        />
        <TweetWrapper
          title="Material-UIのモーダルを使ってみました"
          component={<ModalSample />}
          tweetId="1269478731417964545"
        />
        <TweetWrapper
          title="react-swipeable-viewsを使って画像のカルーセルを作ってみました"
          component={<ImageCarousel />}
          tweetId="1269165549847638018"
        />
        <TweetWrapper
          title="useEffectを使って郵便番号から住所をサジェストするフォームを作ってみました"
          component={<ZipCodeForm />}
          tweetId="1268693255421480961"
        />
        <TweetWrapper
          title="useStateを使って押した回数をカウントするボタンを作ってみました"
          component={<IncrementsButton defaultValue={0} />}
          tweetId="1268485591533944832"
        />
      </div>
    </>
  );
}

export default App;
