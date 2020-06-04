import React, { useState } from 'react';
import { Button } from '@material-ui/core';

type Props = {
  defaultValue: number;
};
export default function IncrementsButton(props: Props) {
  const [count, setCount] = useState(props.defaultValue);
  return (
    <Button
      variant={'contained'}
      color={'primary'}
      onClick={(e) => setCount(count + 1)}
    >{`押した回数: ${count}`}</Button>
  );
}
