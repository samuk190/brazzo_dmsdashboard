/* eslint-disable no-nested-ternary */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'react-multilevel-sidebar/src/Sidebar.css';
import Typography from '@material-ui/core/Typography';
import { Container } from './styles';
import 'echarts-gl';
// const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function Ticket() {
  // const profile = useSelector(state => state.user.profile);
  const getOption = () => {
    const value = 120;
    // const a = 1;
    // const b = 3;
    // const c = 4;
    const valuef = 300;
    const valued = 100;
    // função antes
    return {
      dataZoom: [
        {
          id: 'dataZoomX',
          type: 'slider',
          xAxisIndex: [0],
          filterMode: 'filter',
        },
        {
          id: 'dataZoomY',
          type: 'slider',
          yAxisIndex: [0],
          filterMode: 'empty',
        },
      ],
      color: ['#1231', '#000'],
      xAxis: {
        type: 'category',
        data: [
          'Loja Volvo',
          'Loja Renault',
          'Loja Teste',
          'Loja Teste',
          'Loja Teste',
          'Loja Teste',
          'Loja Testej',
          'Loja Testeh',
          'Loja Testeg',
          'Loja Testef',
        ],
      },
      yAxis: {
        type: 'value',
      },

      // dataZoom: [
      //   {
      //     // The first dataZoom component
      //     yAxisIndex: [0, 2], // Indicates that this dataZoom component
      //     // controls the first and the third yAxis
      //   },
      //   {
      //     // The second dataZoom component
      //     yAxisIndex: 3, // indicates that this dataZoom component
      //     // controls the fourth yAxis
      //   },
      // ],
      series: [
        {
          data: [
            {
              value: 300,
              itemStyle: { color: `${valuef > 190 ? '#3AC88C' : '#DFAE35'}` },
            },
            {
              value: 250,
              itemStyle: { color: `${value > 190 ? '#3AC88C' : '#DFAE35'}` },
            },
            {
              value: 150,
              itemStyle: {
                color: `${
                  valued > 190 ? '#3AC88C' : value > 110 ? '#DFAE35' : 'red'
                }`,
              },
            },
            {
              value: 110,
              itemStyle: {
                color: `${
                  valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
                }`,
              },
            },
            {
              value: 90,
              itemStyle: {
                color: `${
                  valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
                }`,
              },
            },
            {
              value: 70,
              itemStyle: {
                color: `${
                  valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
                }`,
              },
            },
            {
              value: 60,
              itemStyle: {
                color: `${
                  valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
                }`,
              },
            },
            {
              value: 50,
              itemStyle: {
                color: `${
                  valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
                }`,
              },
            },
            {
              value: 40,
              itemStyle: {
                color: `${
                  valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
                }`,
              },
            },
            {
              value: 20,
              itemStyle: {
                color: `${
                  valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
                }`,
              },
            },
          ],
          type: 'bar',
        },
      ],
    };
  };
  return (
    <Container>
      <header />
      <Typography variant="h2" component="h2">
        TICKET MÉDIO - MARCA VOLVO
      </Typography>
      <ReactEcharts
        option={getOption()}
        style={{ height: '500px', width: '100%' }}
        className="react_for_echarts"
      />
    </Container>
  );
}

export default Ticket;
