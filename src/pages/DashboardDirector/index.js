/* eslint-disable no-nested-ternary */
import React from 'react';
import 'fontsource-red-hat-display';
import { Container } from './styles';
import 'echarts-gl';
// Tela => Gestor Concessio´naria
import ReactEcharts from 'echarts-for-react';
import { Collapse } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Grid } from '@material-ui/core/';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
// import '~/pages/Ticket/node_modules/react-multilevel-sidebar/src/Sidebar.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Typography from '@material-ui/core/Typography';
import { findAllByDisplayValue } from '@testing-library/react';
const useStyles = makeStyles({
  divGrid: {
    // alignSelf:'center',
    // justifySelf:'center',
    marginLeft:100,
    marginTop:50,
  },
  root: {
    // alignItems: 'center',
    // justifySelf: 'center',
    // color:'#06A489',
    // fontFamily: 'Red Hat Display',
    minWidth: 250,
    maxWidth: 400,
    minHeight: 100,
    padding: 0,
    margin: 0,
    backgroundColor: '#FFFFFF',
  },
  titleroot: {
    // marginRight: 90,
    color:'#06A489',
    margin: 0,
    fontSize:'35px',
    fontFamily: 'Red Hat Display',
  },
  subtitleroot: {
    // marginRight: 90,
    color:'#06A489',
    margin: 0,
    marginTop:15,
    marginBottom:-15,
    fontSize:'25px',
    fontFamily: 'Red Hat Display',
  },
  headerfaturamento: {
    fontFamily:'Red Hat Display',
    color: '#4E4E4E',
    marginTop:10,
    fontSize:'20px',


  
    
  },
  midfaturamento: {
    color: '#24AE96',
    fontSize: '40px',
    textShadow: '-2px -2px -4px rgba(0,0,0,0.25)',
    // alignSelf:'center',
    // alignItems:'center',
    marginTop:20,
    fontFamily:'Red Hat Display',
    fontWeight:'bold',

  },
  gridItem: {
    // alignSelf:'center',
    // alignItems:'center',
  },
  card: {
    // justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
});

function DashboardDirector() {
//Dados dos cards
const [arrayCollapse,setArrayCollapse] = React.useState([]);
const classes = useStyles();
const data = [
  {
    title: 'Vendas Realizadas',
    header: classes.headerfaturamento,
    mid: classes.midfaturamento,
    linearbarclass: classes.faturamentobar,
    valor: '121',
    icon: true,
    stepper: true,
  },
  {
    title: 'Ticket Médio Venda',
    quarter: 2,
    earnings: 16500,
    progress: 10,
    header: classes.headerrevisoes,
    mid: classes.midrevisoes,
    linearclass: classes.revisoes,
    linearbarclass: classes.revisoesbar,
    valor: '12%',
  },
  {
    title: 'Conversão de Pacotes',
    quarter: 3,
    earnings: 14250,
    progress: 10,
    header: classes.headerconversoes,
    mid: classes.midconversoes,
    linearclass: classes.conversoes,
    linearbarclass: classes.conversoesbar,
    valor: '33%',
  },
  {
    title: 'Serviços comuns',
    quarter: 4,
    earnings: 19000,
    progress: 30,
    header: classes.headerservices,
    mid: classes.midservices,
    linearclass: classes.services,
    linearbarclass: classes.servicesbar,
    valor: '1.67',
  },

];

//Fim dos dados
const option = {
  // color: '#FFF',
    grid: {
    left: 50,
    top: 50,
    right: 10,
    bottom: 20,
  },

  color: '#24AE96',
  xAxis: {
    // backgroundColor: '#24AE96',
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
  }]
};


  // const profile = useSelector(state => state.user.profile);
function changeArrayColapse(index) {
 
  if (!arrayCollapse[index]){
    arrayCollapse.push({active: false})
  }
   
    const newArr = arrayCollapse.map((el, i) => i === index ? ({ ...el, active: !el.active }) : el )
    setArrayCollapse(newArr);
  
  // console.log('aqui');
  // console.log(arrayCollapse[index].active);
}
  return (
    <Container>
     <Typography
          className={classes.titleroot}
          variant="h3"
          align="left"
          component="h4"
        >
        <ArrowForwardIosIcon ></ArrowForwardIosIcon>  PAINEL GESTOR Pós Venda
        </Typography>  
        <Typography
          className={classes.subtitleroot}
          variant="span"
          align="center"
          component="span"
        >
          Dados Concessionária "X"
          </Typography>
        <div className={classes.divGrid}>
        <Grid
          container
          spacing={4}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className={classes.grid}
        >
          {data.map(function(elem,index,arrayobject) {  return (
            <Grid
              item
              spacing={3}
              xs="auto"
              sm="auto"
              md="auto"
              key={data.indexOf(elem)}
              className={classes.gridItem}
            >
              <Card className={classes.root}>
                {/* <CardHeader
                  // title={elem.title}
                  titleStyle={classes.headingtitle}
                  className={classes.heading}
                /> */}
                {/* <Typography variant="h5" component="h5">
          Gráfico Fatia
        </Typography> */}
                {/* <Paper elevation={3} /> */}
                <CardContent className={classes.card} align="center">
                <Typography
                      variant="h5"
                      component="h5"
                      className={classes.headerfaturamento}
                    >
                      {elem.title}
                    </Typography>
                    <Divider style={{height:2, color:'#A3A3A3'}}/>
                  <Typography
                    variant="h5"
                    component="h5"
                    className={classes.midfaturamento}
                  >
                    {elem.valor}
                  
            
                   
                  </Typography>
                  {arrayCollapse[index] && arrayCollapse[index].active ? '' :  (    <IconButton onClick={() => changeArrayColapse(index)} size="medium" style={{border:'2px solid #24AE96',backgroundColor:'#24AE96',justifyContent:'center',alignItems:'center', borderRadius:30, position:'absolute', marginLeft:50, marginTop:0, color:'#FFF', width:50,height:50}}>
                  <BarChartIcon style={{ marginTop:-10,width:'40px',height: '100%'}}></BarChartIcon>
                  </IconButton>)} 
               
                  
                  <Collapse in={arrayCollapse[index] && arrayCollapse[index].active} timeout="auto" unmountOnExit> 
                  <ReactEcharts
                      // theme="dark"
                      option={option}
                      style={{ padding:0,margin:0,height: '200px', width: '100%' }}
                      className="react_for_echarts"
        />
                  <IconButton onClick={() => changeArrayColapse(index)} align="center">
                  <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
                  </IconButton>
                  </Collapse>
            
                </CardContent>
              </Card>
            </Grid>
          )})}
        </Grid>
      </div>
    </Container>
  );
}

export default DashboardDirector;
