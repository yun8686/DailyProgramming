import React from 'react';
import TweetWrapper from '../components/TweetWrapper';
import SortablePaneSample from '../components/SortablePaneSample';
import { ModalSample } from '../components/ModalSample';
import ImageCarousel from '../components/ImageCarousel';
import ZipCodeForm from '../components/ZipCodeForm';
import IncrementsButton from '../components/IncrementsButton';
import GoogleLineChart from '../components/GoogleLineChart';
import ColorPickerSample from '../components/ColorPickerSample';
import ReactSelect from '../components/ReactSelect';
import YoutubePlayer from '../components/YoutubePlayer';
import TopLoadingBar from '../components/TopLoadingBar';
import StepperSample from '../components/StepperSample';
import MaterialIconChangeButton from '../components/MaterialIconChangeButton';
import Paging from '../board_components/LazyShow';
import { Typography } from '@material-ui/core';
import ReactPoseSample from '../components/ReactPoseSample';

export function Created() {
  return (
    <Paging unit={3}>
      <TweetWrapper
        title="react-poseを使ってクリックすると透明度が変化するアニメーションを入れてみました"
        component={<ReactPoseSample />}
        tweetId="1273256770106875904"
      />

      <TweetWrapper
        title="React.PropsWithChildrenを使って子コンポーネントをページングするコンポーネントを作ってみました"
        component={<Typography>このサイトに実装しました</Typography>}
        tweetId="1272897624899760128"
      />
      <TweetWrapper
        title="MaterialUIのアイコンをランダムに表示するボタンを作ってみました"
        component={<MaterialIconChangeButton />}
        tweetId="1272518056711839745"
      />
      <TweetWrapper
        title="Material-UIを使ってステッパーをつくってみました"
        component={<StepperSample />}
        tweetId="1272008158848749568"
      />
      <TweetWrapper
        title="Material-UIのLinearProgressを使ってプログレスバーを作ってみた"
        component={<TopLoadingBar />}
        tweetId="1271683283466588161"
      />
      <TweetWrapper
        title="react-youtubeを使ってYoutubeプレイヤーを作ってみました"
        component={<YoutubePlayer />}
        tweetId="1271438220845215744"
      />
      <TweetWrapper
        title="react-selectを使って検索可能なセレクトボックスを作ってみました"
        component={<ReactSelect />}
        tweetId="1271076272240615424"
      />
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
    </Paging>
  );
}
