import React, { useState } from 'react';
import { Button } from '@material-ui/core';
type Props = {
  unit: number; // 1ページあたりの数
};
export default function Paging(props: React.PropsWithChildren<Props>) {
  const [page, setPage] = useState(0);
  const { unit, children } = props;
  if (!Array.isArray(children)) {
    return <>{children}</>;
  }
  return (
    <>
      <div key={'page' + page}>
        {children.filter((child, i) => page * unit <= i && (page + 1) * unit > i)}
      </div>
      <Button
        variant="contained"
        color="primary"
        disabled={page <= 0}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        戻る
      </Button>

      <Button
        variant="contained"
        color="primary"
        disabled={(page + 1) * unit >= children.length}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        次へ
      </Button>
    </>
  );
}
