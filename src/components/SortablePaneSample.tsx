import React, { useState } from 'react';
import { SortablePane, Pane } from 'react-sortable-pane';
import { Typography } from '@material-ui/core';

export default function SortablePaneSample() {
  const [order, setOrder] = useState(['0', '1', '2']);
  return (
    <div style={{ padding: 10, height: 350 }}>
      <SortablePane
        direction="vertical"
        margin={20}
        order={order}
        onOrderChange={(newOrder) => {
          setOrder(newOrder);
        }}
      >
        {[0, 1, 2].map((key) => (
          <Pane
            key={key}
            size={{ width: '100%', height: 100 }}
            resizable={{ xy: false, x: false, y: false }}
            style={{
              display: 'flex' as 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'solid 1px #ddd',
              backgroundColor: '#f0f0f0',
            }}
          >
            <Typography>{order.indexOf(key.toString()) + 1}位</Typography>
            <Typography>{['肉', '魚', '野菜'][key]}</Typography>
          </Pane>
        ))}
      </SortablePane>
    </div>
  );
}
