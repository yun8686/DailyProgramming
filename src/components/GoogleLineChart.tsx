import React from 'react';
import { Chart } from 'react-google-charts';

const roll = (times: number) => {
  let sum = 0;
  for (let i = 0; i < times; i++) {
    sum += ~~(Math.random() * 6) + 1;
  }
  return sum;
};

export default function GoogleLineChart() {
  const data = [['sum', 'count']];
  const dataMap: any = {};
  for (let i = 0; i < 10000; i++) {
    const sum = roll(4).toString();
    dataMap[sum] = (dataMap[sum] || 0) + 1;
  }
  Object.keys(dataMap).forEach((key) => {
    data.push([key, dataMap[key]]);
  });
  return (
    <Chart
      chartType="AreaChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: '4 Dices Sum Expectation (trials: 10000)',
        hAxis: { title: 'Sum', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
      }}
    />
  );
}
