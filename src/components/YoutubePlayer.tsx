import React from 'react';
import YouTube from 'react-youtube';

export default function YoutubePlayer() {
  return (
    <YouTube
      videoId="SX_ViT4Ra7k"
      opts={{
        height: '200',
        width: '300',
      }}
    />
  );
}
