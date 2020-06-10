import React from 'react';
import TweetWrapper from '../components/TweetWrapper';
import SortablePaneSample from '../components/SortablePaneSample';
import { ModalSample } from '../components/ModalSample';
import ImageCarousel from '../components/ImageCarousel';
import ZipCodeForm from '../components/ZipCodeForm';
import IncrementsButton from '../components/IncrementsButton';
import GoogleLineChart from '../components/GoogleLineChart';
import ColorPickerSample from '../components/ColorPickerSample';

export function Created() {
  return (
    <>
      <TweetWrapper
        title="react-input-colorを使ってカラーピッカーを作ってみました"
        component={<ColorPickerSample />}
        tweetId="1270722007634599936"
      />
      <TweetWrapper
        title="react-google-chartsを使ってサイコロを4個投げたときの目の合計をグラフにしてみました"
        component={<GoogleLineChart />}
        tweetId="1270311218469670914"
      />
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
    </>
  );
}
