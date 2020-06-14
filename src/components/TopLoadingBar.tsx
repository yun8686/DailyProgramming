import React, { useState } from 'react';
import { LinearProgress, Button } from '@material-ui/core';

export default function TopLoadingBar() {
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <LinearProgress color="secondary" variant="determinate" value={progress} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setProgress(0);
        }}
      >
        リセット
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setProgress(Math.min(progress + 30, 100));
        }}
      >
        進める
      </Button>
    </div>
  );
}
