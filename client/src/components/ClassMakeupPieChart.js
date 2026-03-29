import React from 'react';
import styled from "styled-components";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LegendList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: 10px;
`;

const LegendDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 20%;
  background-color: ${props => props.color};
  color: white;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
`;

const ClassMakeupPieChart = (props) => {
  const total = Number(props.data["TOTAL"])
  const chartData = [
    { name: 'Rising Sophomores', value: Number(props.data["SOPHOMORE"]), color: '#9F3636' },
    { name: 'Rising Juniors', value: Number(props.data["JUNIOR"]), color: '#FFD43B' },
    { name: 'Rising Seniors', value: Number(props.data["SENIOR"]), color: '#62CDA0' },
    { name: 'Mixed Point Groups', value: Number(props.data["MIXED"]), color: '#73A6E0' },
  ].filter(entry => entry.value > 0);

  if (chartData.length === 0) return null;

  return (
    <ChartWrapper>
      <PieChart width={250} height={250}>
        <Pie 
          data={chartData} 
          dataKey="value" 
          cx="50%" 
          cy="50%" 
          outerRadius={80}
        >
          {chartData.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <LegendList>
        {chartData.map((entry, index) => (
          <LegendItem key={index}>
            <LegendDot color={entry.color}>{Math.round(entry.value / total * 100)}%</LegendDot>
            {entry.name}
          </LegendItem>
        ))}
      </LegendList>
    </ChartWrapper>
  );
}

export default ClassMakeupPieChart;