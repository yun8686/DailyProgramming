import React from 'react';
import InputColor, { Color } from 'react-input-color';

export default function ColorPickerSample() {
  const [initial, setInitial] = React.useState('#ffffff');
  const [color, setColor] = React.useState<Color>();
  return (
    <div>
      <div
        style={{
          margin: '0 auto',
          width: 150,
          height: 150,
          marginBottom: 20,
          backgroundColor: color?.rgba,
        }}
      >
        {color?.rgba}
      </div>
      <div>
        <i>react-input-color</i>
        <br />
        <InputColor initialValue={initial} onChange={setColor} />
      </div>
      <div>
        <i>input type="color"</i>
        <br />
        <input
          type="color"
          value={color?.hex || initial}
          onChange={(e) => setInitial(e.target.value)}
        />
      </div>
    </div>
  );
}
