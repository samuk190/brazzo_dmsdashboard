/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useRecoilState } from 'recoil';
// import '~/pages/Ticket/node_modules/react-multilevel-sidebar/src/Sidebar.css';
import { makeStyles } from '@material-ui/core/styles';
import { selectedFilters } from '~/atoms/state';
import api from '~/services/api';

import { Container } from './styles';
import 'echarts-gl';

const useStyles = makeStyles({
  root: {
    padding: 0,
    margin: 0,
    backgroundColor: '#ccc',
    '@media (max-width:500px)': { width: 800, height: 350 },
    '@media (min-width:1000px)': { width: 1000, height: 500 },
    // width: 1000,
    // height: 500,
    // minWidth: 275,
    // maxWidth: 900,
    // maxHeight: 900,
  },
  header: {
    textAlign: 'center',
    // position: 'absolute',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    alignSelf: 'center',
  },
  heading: {
    textAlign: 'center',
  },
  pos: {
    marginBottom: 0,
  },
});
const arrayValue = [];

// const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const option = {
//   grid: {
//     left: 0,
//     top: 0,
//     right: 0,
//     bottom: 0,
//   },
//   tooltip: {
//     trigger: 'item',
//     formatter: '{a} <br/>{b}: {c} ({d}%)',
//   },
//   legend: {
//     padding: 0,
//     itemGap: 0,
//     orient: 'vertical',
//     left: 0,

//     data: [
//       '直达',
//       '营销广告',
//       '搜索引擎',
//       '邮件营销',
//       '联盟广告',
//       '视频广告',
//       '百度',
//       '谷歌',
//       '必应',
//       '其他',
//     ],
//   },
//   series: [
//     {
//       name: 'Grupos',
//       type: 'pie',
//       selectedMode: 'single',
//       radius: [0, '40%'],

//       label: {
//         position: 'inner',
//       },
//       labelLine: {
//         show: false,
//       },

//       data: [
//         //  selected: true
//         { value: 335, name: 'Hyundai' },
//         { value: 679, name: 'Renault' },
//         { value: 1548, name: 'Peugeot' },
//       ],
//     },
//     {
//       name: 'Concessionária',
//       type: 'pie',
//       radius: ['40%', '55%'],

//       label: {
//         formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
//         backgroundColor: '#eee',
//         borderColor: '#aaa',
//         borderWidth: 1,
//         //   radius: ['70%', '70%'],
//         // position: 'inner',

//         // position:'static',

//         // margin:250,
//         // padding:cpy1,
//         borderRadius: 4,
//         axisExpandWidth: 100,
//         // shadowBlur:3,
//         // shadowOffsetX: 2,
//         // shadowOffsetY: 2,
//         // shadowColor: '#999',
//         // padding: [50, 50]
//         //  top:1500,
//         rich: {
//           a: {
//             color: '#999',
//             lineHeight: 22,
//             align: 'center',
//           },
//           // abg: {
//           //     backgroundColor: '#333',
//           //     width: '100%',
//           //     align: 'right',
//           //     height: 22,
//           //     borderRadius: [4, 4, 0, 0]
//           // },
//           hr: {
//             borderColor: '#aaa',
//             width: '100%',
//             borderWidth: 0.5,
//             height: 0,
//           },
//           b: {
//             fontSize: 16,
//             lineHeight: 33,
//           },
//           per: {
//             color: '#eee',
//             backgroundColor: '#334455',
//             // padding: [2, 4],
//             // borderRadius: 2
//           },
//         },
//       },
//       data: [
//         { value: 335, name: 'Bauru' },
//         { value: 310, name: 'Piracicaba' },
//         { value: 234, name: 'Avaré' },
//         { value: 135, name: 'Itapetininga' },
//         { value: 1048, name: 'Itapercerica' },
//         { value: 251, name: 'Bragança Paulista' },
//         { value: 147, name: 'Santo André' },
//         { value: 102, name: 'São Caetano do Sul' },
//       ],
//     },
//   ],
// };
function Dashboard() {
  // const [group, setGroupName] = useRecoilState(brands);
  // const [group, setGroupName] = useRecoilState(brands);
  const [selectedFilter] = useRecoilState(selectedFilters);
  const [brandData, setBrandData] = useState([]);

  async function getBrandData() {
    await api.get(`brands`).then(response => {
      // console.log(response.data);
      setBrandData(response.data);
    });
  }
  useEffect(() => {
    getBrandData();
    return () => {};
  }, []);
  function getOption() {
    // await ;
    // const datatobe = await api.get(`dealerships?brand_id=1`);
    // const arrayTitle = [];
    // const arrayValue = [];
    const arrayBrands = [];
    const arrayGroupList = [];
    // eslint-disable-next-line consistent-return
    function checkselectedbrands(brand) {
      const groups = brand.groups.map(function(elemgg, index) {
        return elemgg.name;
      });
      const found = groups.some(r => selectedFilter.indexOf(r) >= 0);
      if (selectedFilter.includes(brand.name) || found) {
        return brand;
      }
    }

    // console.log(dealership.filter(checkselectedbrands));
    // const itemStyle = [];
    brandData.filter(checkselectedbrands).map(function (elem, index) {
      // brandData.map(function(elem, index) {
      // console.log(elem.dealerships);
      // arrayTitle.push(elem.title);
      arrayBrands.push({
        name: elem.name,
        value: elem.value,
      });
      function checkselectedgroups(gr) {
        if (
          selectedFilter.includes(gr.name) ||
          selectedFilter.includes(elem.name)
        ) {
          return gr;
        }
        return selectedFilter.includes(gr.name);

        // return brand.name ===
      }
      elem.groups.filter(checkselectedgroups).map(function(elemr) {
        arrayGroupList.push({
          name: elemr.name,
          value: elemr.value,
        });
      });
      console.log(arrayGroupList);
      arrayValue.push({
        value: elem.value,
        // itemStyle: {
        //   color:
        //     elem.objective === elem.maxObjective
        //       ? '#00B001'
        //       : elem.objective >= elem.targetObjective
        //       ? '#ffcc00'
        //       : '#E41001',
        // },
      });
    });
    // console.log(arrayBrandList);
    //   `${dealership.map(function(elem){
    //     return elem.title;
    // }).join(",")}`
    // console.log(
    //   `${dealership
    //     .map(function(elem) {
    //       return elem.title;
    //     })
    //     .join(',')}`
    // );
    // console.log(dealership);
    console.log(arrayBrands);

    return {
      title: {
        text: 'Objetivo Faturamento Periodo x até y',
        textStyle: {
          color: '#000',
          width: '100%',
          align: 'center',
        },

        padding: [0, 0, 0, 300],
        // textAlign: 'left',
      },

      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'left',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: {
            show: true,
            readOnly: false,
            title: 'Ver dados',

            lang: ['DataView', 'Fechar', 'Atualizar'],
          },

          restore: { show: true, title: 'Restaurar' },
          saveAsImage: { show: true, title: 'Salvar Imagem' },
        },
      },

      legend: {
        padding: 0,
        itemGap: 0,
        // orient: 'vertical',
        left: 0,

        data: [
          'Teste',
          '营销广告',
          '搜索引擎',
          '邮件营销',
          '联盟广告',
          '视频广告',
          '百度',
          '谷歌',
          '必应',
          '其他',
        ],
      },
      series: [
        {
          name: 'Grupos',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '40%'],

          label: {
            position: 'inner',
          },
          labelLine: {
            show: false,
          },

          data: arrayBrands,

          // [
          //   //  selected: true
          //   { value: 335, name: 'Hyundai' },
          //   { value: 679, name: 'Renault' },
          //   { value: 1548, name: 'Peugeot' },
          // ],
        },
        {
          name: 'Grupos',
          type: 'pie',
          radius: ['40%', '55%'],

          label: {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#eee',
            borderColor: '#aaa',
            borderWidth: 1,
            //   radius: ['70%', '70%'],
            // position: 'inner',

            // position:'static',

            // margin:250,
            // padding:cpy1,
            borderRadius: 4,
            axisExpandWidth: 100,
            // shadowBlur:3,
            // shadowOffsetX: 2,
            // shadowOffsetY: 2,
            // shadowColor: '#999',
            // padding: [50, 50]
            //  top:1500,
            rich: {
              a: {
                color: '#999',
                lineHeight: 22,
                align: 'center',
              },
              // abg: {
              //     backgroundColor: '#333',
              //     width: '100%',
              //     align: 'right',
              //     height: 22,
              //     borderRadius: [4, 4, 0, 0]
              // },
              hr: {
                borderColor: '#aaa',
                width: '100%',
                borderWidth: 0.5,
                height: 0,
              },
              b: {
                fontSize: 16,
                lineHeight: 33,
              },
              per: {
                color: '#eee',
                backgroundColor: '#334455',
                padding: [2, 4],
                // borderRadius: 2
              },
            },
          },
          data: arrayGroupList,
          // data: [
          //   { value: 335, name: 'Bauru' },
          //   { value: 310, name: 'Piracicaba' },
          //   { value: 234, name: 'Avaré' },
          //   { value: 135, name: 'Itapetininga' },
          //   { value: 1048, name: 'Itapercerica' },
          //   { value: 251, name: 'Bragança Paulista' },
          //   { value: 147, name: 'Santo André' },
          //   { value: 102, name: 'São Caetano do Sul' },
          // ],
        },
      ],
    };

    // const value = 120;
    // getBrandData();
    // const valuef = 300;
    // const valued = 100;
    // função
    // obter map aqui;
    // const formattedData = graphData;
    // console.log(formattedData);
    // const formattedData = graphData.join(",");
    // console.log(formattedData)
    // const formatedData = dealership.title.join(",");
  }

  // const profile = useSelector(state => state.user.profile);
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h4" component="h4" className={classes.header}>
        PAINEL - VISÃO REPRESENTANTE COMERCIAL
      </Typography>

      {/* <Typography variant="h4" component="h4">
        GERAL
      </Typography> */}
      <Card className={classes.root}>
        {/* <CardHeader title="Gráfico Fatia" className={classes.heading} /> */}
        {/* <Typography variant="h5" component="h5">
          Gráfico Fatia
        </Typography> */}
        {/* <Paper elevation={3} /> */}
        <CardContent style={{ width: '100%', height: '100%' }}>
          <ReactEcharts
            option={getOption()}
            style={{ height: '100%', width: '100%', alignSelf: 'center' }}
            className="react_for_echarts"
          />
          {/* <Paper /> */}
        </CardContent>
      </Card>
    </Container>
  );
}

export default Dashboard;
