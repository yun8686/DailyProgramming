import React, { useState } from 'react';
import * as Icons from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const IconNames = Object.keys(Icons);
const IconLength = IconNames.length;

export default function MaterialIconChangeButton() {
  const [index, setIndex] = useState<number>(Math.floor(Math.random() * IconLength));
  return (
    <>
      <div>
        {React.createElement((Icons as any)[IconNames[index]])}
        <Typography>{IconNames[index]}</Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => {
          setIndex(Math.floor(Math.random() * IconLength));
        }}
      >
        Change
      </Button>
    </>
  );
}
