import React from 'react';
import { Paper, Typography } from '@material-ui/core';
const { TwitterTweetEmbed } = require('react-twitter-embed');

type Props = {
  title: string;
  component: React.ReactElement;
  tweetId: string;
};

export default function TweetWrapper(props: Props) {
  return (
    <Paper style={{ maxWidth: 680, margin: '10px auto 10px auto' }}>
      <Typography>{props.title}</Typography>
      <div>{props.component}</div>
      <div style={{ margin: '0 auto', display: 'inline-block' }}>
        <TwitterTweetEmbed tweetId={props.tweetId} />
      </div>
    </Paper>
  );
}
