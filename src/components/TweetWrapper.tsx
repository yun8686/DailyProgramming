import React, { useState } from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import IncrementsButton from './IncrementsButton';

export default function TweetWrapper() {
  return (
    <Paper style={{ maxWidth: 680, margin: '10px auto 10px auto' }}>
      <Typography>useStateを使って押した回数をカウントするボタンを作ってみました</Typography>
      <div>
        <IncrementsButton defaultValue={0} />
      </div>
      <blockquote className="twitter-tweet">
        <p lang="ja" dir="ltr">
          useStateを使ってみた <a href="https://t.co/EeIpIRJEqI">https://t.co/EeIpIRJEqI</a>{' '}
          <a href="https://twitter.com/hashtag/ReviewMe?src=hash&amp;ref_src=twsrc%5Etfw">
            #ReviewMe
          </a>{' '}
          <a href="https://twitter.com/hashtag/%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%83%9F%E3%83%BC?src=hash&amp;ref_src=twsrc%5Etfw">
            #レビューミー
          </a>{' '}
          # <a href="https://twitter.com/kikun_triplei?ref_src=twsrc%5Etfw">@kikun_triplei</a>より{' '}
          <a href="https://twitter.com/hashtag/%E6%AF%8E%E6%97%A5%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0?src=hash&amp;ref_src=twsrc%5Etfw">
            #毎日プログラミング
          </a>{' '}
          <a href="https://twitter.com/hashtag/React?src=hash&amp;ref_src=twsrc%5Etfw">#React</a>
        </p>
        &mdash; キーくん@React勉強中 (@kikun_triplei){' '}
        <a href="https://twitter.com/kikun_triplei/status/1268485591533944832?ref_src=twsrc%5Etfw">
          June 4, 2020
        </a>
      </blockquote>{' '}
    </Paper>
  );
}
