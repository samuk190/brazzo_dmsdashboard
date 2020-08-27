/* eslint-disable no-nested-ternary */
import React, { useState, useMemo, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { shadows } from '@material-ui/system';
import { Modal } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

import { IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core/';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import { useRecoilState, useRecoilValue } from 'recoil';
import StepConnector from '@material-ui/core/StepConnector';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CardContent from '@material-ui/core/CardContent';
// import '~/pages/Ticket/node_modules/react-multilevel-sidebar/src/Sidebar.css';
import { useMediaPredicate } from "react-media-hook";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import LinearProgress from '@material-ui/core/LinearProgress';
import 'fontsource-red-hat-display';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import { getMonth, parseISO } from 'date-fns';
import DoneIcon from '@material-ui/icons/Done';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CheckIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import { Container } from './styles';
import ReactTooltip from "react-tooltip";
import {
  dateInitial,
  dateFinal,
  dateInitialFormatted,
  dateFinalFormatted,
} from '../../atoms/state';
// import './index.css';
import 'echarts-gl';

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    // borderColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',

    borderRadius: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage: 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage: 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)',
  },
});
function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  // if (active >= 6) {
  //   completed = 0;
  //   active = 0;
  // }
  function getIcon(n) {
    // console.log(completed);
    // if (completed === true || active === true) {
    if (completed === true ) {
      return <DoneIcon style={{fontSize:'29px'}} />;
    }else{


      if(n === 0 ){
        return <Typography>Jan</Typography>
      }
      if (n === 1 ){
        return <Typography>Fev</Typography>
      }
      if (n === 2 ){
        return <Typography>Mar</Typography>
      }
      if (n === 3 ){
        return <Typography>Abr</Typography>
      }
      if (n === 4 ){
        return <Typography>Mai</Typography>
      }
      if (n === 5 ){
        return <Typography>Jun</Typography>
      }
      if (n === 6 ){
        return <Typography>Jul</Typography>
      }
      if (n === 7 ){
        return <Typography>Ago</Typography>
      }
      if (n === 8 ){
        return <Typography>Set</Typography>
      }
      if (n === 9 ){
        return <Typography>Out</Typography>
      }
      if (n === 10 ){
        return <Typography>Nov</Typography>
      }
      if (n === 11 ){
        return <Typography>Dez</Typography>
      }
    }
  
    // return <EventBusyIcon />;

    // return `${n + 1}`;
  }
  const icons = {
    1: getIcon(0),
    2: getIcon(1),
    3: getIcon(2),
    4: getIcon(3),
    5: getIcon(4),
    6: getIcon(5),
    7: getIcon(6),
    8: getIcon(7),
    9: getIcon(8),
    10: getIcon(9),
    11: getIcon(10),
    12: getIcon(11),
   
  };
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}
// const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const option = {
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
  legend: {
    padding: 0,
    itemGap: 0,
    orient: 'vertical',
    left: 0,

    data: [
      '直达',
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

      data: [
        //  selected: true
        { value: 335, name: 'Hyundai' },
        { value: 679, name: 'Renault' },
        { value: 1548, name: 'Peugeot' },
      ],
    },
    {
      name: 'Concessionária',
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
      data: [
        { value: 335, name: 'Bauru' },
        { value: 310, name: 'Piracicaba' },
        { value: 234, name: 'Avaré' },
        { value: 135, name: 'Itapetininga' },
        { value: 1048, name: 'Itapercerica' },
        { value: 251, name: 'Bragança Paulista' },
        { value: 147, name: 'Santo André' },
        { value: 102, name: 'São Caetano do Sul' },
      ],
    },
  ],
};

const useStyles = makeStyles({
  root: {
    minWidth: 310,
    minHeight: 200,
    padding: 0,
    backgroundColor: '#F9F9F9',
    // backgroundColor: '#000'
  },
  gridItem: {
    // marginRight: 120,
    // margin: 'auto',
    '@media (max-width:500px)': {   marginLeft:75 },
    // '@media (min-width:1000px)': { width: 1000, height: 500 },
  
  },
  divGrid: {
    flexGrow: 1,
    marginTop:20,
  },
  grid: {
    padding: 0,
  },
  stepper: {
    background: 'none',
    padding: 0,
    marginTop: 60,
    width: 1280,
    '@media (max-width:900px)': { width: 810 },
    height: 200,
  },
  steppermobile: {
    background: 'none',
    padding: 0,
    marginTop: 15,
    marginLeft:25,
    position: 'absolute',
    width: 120,
    height: 900,
  },
  stepcompleted: {
    // marginTop:100,
    // color:'#115',
    // color:'#000',
    // borderColor:'#115',
    // backgroundImage: 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)'
  },
  header: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    '@media (max-width:500px)': { fontSize:'24px' },
    fontFamily: 'Red Hat Display',
    // position: 'absolute',
  },
  placeitem: {
    textAlign: 'right',
    fontStyle: 'normal',
     marginTop:0,
    fontSize:'14px',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    color: '#AEAEAE',
    fontFamily: 'Red Hat Display',
    // position: 'absolute',
  },
  placeitembottom: {
    textAlign: 'left',
    fontStyle: 'normal',
    // fontWeight: 'bold',
    marginTop:5,

    fontSize:'14px',
    letterSpacing: '0.02em',
    color: '#AEAEAE',
    fontFamily: 'Red Hat Display',
    // position: 'absolute',
  },
  placeitembottomright: {
    // textAlign: 'right',
    float:'right',
    
    fontStyle: 'normal',
    fontWeight: 'bold',
    // marginTop:20,
    fontSize:'14px',
    letterSpacing: '0.02em',
    color: '#AEAEAE',
    fontFamily: 'Red Hat Display',
    // position: 'absolute',
  },

  headerfaturamento: {
    textAlign: 'center',
    marginTop:15,
    fontSize: '42px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontFamily: 'Red Hat Display',
    color: 'rgba(36, 174, 150, 1)',
 
    // color: 'transparent',
    
    
    // textShadow: '0px 2px 0px #FFF,0px 0px 0px #000, 0px 0px 6px #FFF',
    // textShadow: '0px 20px 30px rgba(255, 255, 255, 0.91)',
    // textShadow: '0px -0.1px 1px rgba(0, 0, 0, 1)',
    // textShadow: '0px -1px 1px rgba(0, 0, 0, 0.5)',
  },
  midfaturamento: {
    fontFamily: 'Red Hat Display',
    fontSize:'19px',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    color: '#000',
  },
  midrevisoes: {
    color: '#000',
    textAlign: 'left',
    fontSize:'19px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    fontFamily: 'Red Hat Display',
  },
  headerrevisoes: {
    textAlign: 'center',
    marginTop:15,
    fontSize: '42px',
    color: 'rgba(223, 34, 34, 0.83)',
    // color: '#B4B4BB',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    fontFamily: 'Red Hat Display',
  },
  midconversoes: {
    color: '#000',
    fontSize:'19px',
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    fontFamily: 'Red Hat Display',
  },
  midservices: {
    color: '#000',
    textAlign: 'left',
    fontSize:'19px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    fontFamily: 'Red Hat Display',
  },
  headerconversoes: {
    textAlign: 'center',
    marginTop:15,
    fontSize: '42px',
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    color: '#68BBDE',
  },
  headerservices: {
    textAlign: 'center',
    marginTop:15,
    fontSize: '42px',
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    color: '#9C68DE',
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
  headingtitle: {
    title: {
      fontFamily: 'Red Hat Display',
    },
    fontFamily: 'Red Hat Display',
  },
  heading: {
    title: {
      fontFamily: 'Red Hat Display',
    },
    // fontFamily: '',
    fontStyle: 'normal',
    fontWeight: 'bold',
    padding: 0,
    margin: 0,
    marginTop: 10,
    marginBottom: -10,
    textAlign: 'center',
    color: '#B4B4BB',

    fontFamily: 'Red Hat Display',
    textDecorationLine: 'underline',
  },
  pos: {
    marginBottom: 0,
  },
  faturamento: {
    // colorPrimary: {
    //   backgroundColor: '#00695C',
    // },
    // barColorPrimary: {
    //   backgroundColor: '#B2DFDB',
    // },

    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '14px',
    borderRadius: '20px',
  },
  faturamentobar: {
    backgroundColor:'#24AE96',
    borderRadius: '20px',
  },
  revisoes: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '14px',
    borderRadius: '20px',
  },
  revisoesbar: {
    backgroundColor: 'rgba(223, 34, 34, 0.83)',
    borderRadius: '20px',
  },
  conversoes: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '14px',
    borderRadius: '20px',
  },
  conversoesbar: {
    backgroundColor: '#68BBDE',
    borderRadius: '20px',
  },
  services: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '14px',
    borderRadius: '20px',
    // alignSelf: 'right',
  },
  servicesbar: {
    backgroundColor: '#9C68DE',
    borderRadius: '20px',
  },
});

function Dashboard() {
  const biggerThan600 = useMediaPredicate("(min-width: 600px)");
  const smallerThan600 = useMediaPredicate("(max-width: 599px)");
  const finalFormatted = useRecoilValue(dateFinal);
  const [value, setValue] = React.useState(0);
  const [showModal, setShowModal] = useState(false);
  async function handleShowModal(value) {
    // await getBrandData(value.id);
    // setGraphData(value);
    setShowModal(true);

    // await getBrandData(value.id);

    return value;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function getSteps(active) {
    const number = getMonth(new Date(finalFormatted));

    // if (number >= 6) {
    //   return ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    // }
    return ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun','Jul','Ago','Set','Out','Nov','Dez'];
  }
  const [activeStep, setActiveStep] = React.useState(
    getMonth(new Date(finalFormatted) - 1)
  );
  useEffect(() => {
    const month = getMonth(new Date(finalFormatted));
    // if (month >= 6) {
    //   setActiveStep(month - 6);
    // } else {
      setActiveStep(month);
    // }
    return () => {};
  }, [finalFormatted]);
  const steps = getSteps(activeStep);
  // const profile = useSelector(state => state.user.profile);
  const classes = useStyles();
  const data = [
    {
      title: 'TOTAL FATURAMENTO',
      datatip: 'Média Nacional: 20 <br /> Média do Período: 10',
      loading: false,
      quarter: 1,
      earnings: 13000,
      progress: 80,
      linearclass: classes.faturamento,
      header: classes.headerfaturamento,
      mid: classes.midfaturamento,
      linearbarclass: classes.faturamentobar,
      valor: '10.000,00',
      icon: true,
      stepper: true,
    },
    {
      title: 'REVISÕES',
      quarter: 2,
      loading: false,
      earnings: 16500,
      progress: 10,
      header: classes.headerrevisoes,
      mid: classes.midrevisoes,
      linearclass: classes.revisoes,
      linearbarclass: classes.revisoesbar,
      valor: '7600',
    },
    {
      title: 'CONVERSÃO DE PACOTE',
      quarter: 3,
      loading: false,
      earnings: 14250,
      progress: 10,
      header: classes.headerconversoes,
      mid: classes.midconversoes,
      linearclass: classes.conversoes,
      linearbarclass: classes.conversoesbar,
      valor: '33%',
    },
    {
      title: 'SERVIÇOS COMUNS',
      quarter: 4,
      loading: false,
      earnings: 19000,
      progress: 30,
      header: classes.headerservices,
      mid: classes.midservices,
      linearclass: classes.services,
      linearbarclass: classes.servicesbar,
      valor: '1.67',
    },
  ];

  return (
    <Container>
      <header />
      <Typography variant="h4" component="h4" className={classes.header}>
        PAINEL - VISÃO REPRESENTANTE COMERCIAL
      </Typography>

      {/* <Typography variant="h4" component="h4">
        GERAL
      </Typography> */}
          
      <div className={classes.divGrid} >
        <Grid
          container
          spacing={4}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className={classes.grid}
        >
          {smallerThan600 &&     <Stepper

          classes={{root: classes.steppermobile}}
          connector={
            <StepConnector
            classes={{line: classes.stepcompleted,completed: classes.stepcompleted, active: classes.stepcompleted}}
             style={{marginTop:5,marginLeft:25}}
            />
          }
          activeStep={activeStep}
          orientation="vertical"
        >
                        {steps.map(label => (
                         
                          <Step>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>
                              {/* {label} */}
                            </StepLabel>
                          </Step>
                       
                          
                        ))}
                    
                      </Stepper>}
          {data.map(elem => (
            <Grid
              item
              spacing={3}
              xs={12}
              sm={6}
              md={3}
              key={data.indexOf(elem)}
              className={classes.gridItem}
            >
              <Card className={classes.root}  data-for="main"
              data-tip={elem.datatip}
              data-iscapture="true">
              <ReactTooltip
            id="main"
            place="top"
            type="light"
            multiline={true}
          />
                <CardHeader
                  // title={elem.title}
                  titleStyle={classes.headingtitle}
                  className={classes.heading}
                />
                {/* <Typography variant="h5" component="h5">
          Gráfico Fatia
        </Typography> */}
                {/* <Paper elevation={3} /> */}
                <CardContent>
                <Typography
                      variant="h5"
                      component="h5"
                      className={elem.mid}
                    
                    >
                      
                      {elem.title}
                      <IconButton  onClick={() => handleShowModal(elem)}  size="small" style={{float:'right', alignSelf:'right',fontSize:'25px'}}>
                      <AddCircleOutlineOutlinedIcon style={{float: 'right', color:'#6AD1C9',fontSize:'25px'}}></AddCircleOutlineOutlinedIcon>
                      </IconButton>
                    </Typography>
                    <Divider style={{marginTop:5}} />
                  <Typography
                    variant="h5"
                    component="h5"
                    className={elem.header}
                    
                  >
                   
      {elem.loading ?  <Skeleton width={'100%'} /> :  <> {elem.valor}  {elem.icon ? <TrendingUpIcon fontSize="large" /> : null } </>
                  
                  
                    /* {elem.stepper ? (
                     
                    ) : null} */}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h5"
                    className={classes.placeitem}
                  >
                     {elem.loading ?    <Skeleton width={'20%'}></Skeleton> : '30% DA META'}
                    {/*  */}
                 
                    {/* {elem.stepper ? (
                     
                    ) : null} */}
                  </Typography>
                  {elem.loading ?     <Skeleton width={'100%'}></Skeleton> :    <LinearProgress
                    variant="determinate"
                    value={elem.progress}
                    classes={{
                      barColorPrimary: elem.linearbarclass,
                    }}
                    className={elem.linearclass}
                  /> }
              
               
                  {/* <div style={{display:"flex"}}> */}
                        <Typography
                    variant="h5"
                    component="h5"
              
                    className={classes.placeitembottom}
                  >
                   {elem.loading ? <Skeleton style={{float:'right'}} width={'30%'}></Skeleton> : 'DESISTÊNCIAS' }
                          <Typography
                    variant="h5"
                    component="h5"
                    display="inline"
                    className={classes.placeitembottomright}
                  >
                      {elem.loading ?  <Skeleton width={'100%'}></Skeleton> :'75' }
                  </Typography>
                  </Typography>
                  {/* </div> */}
                  {elem.loading ? <Divider style={{marginTop:1}} /> : null }
                  {/* <Paper /> */}
                </CardContent>
              </Card>
            </Grid>
            
          ))}
        </Grid>
        {biggerThan600 && 
        <Stepper
                        classes={{ root: classes.stepper }}
                        alternativeLabel
                        activeStep={activeStep}
                        connector={<StepConnector 
                          classes={{completed: classes.stepcompleted, active: classes.stepcompleted}}

                        style={{marginTop:13}}/>}
                        // orientation="vertical"
                      >
                        {steps.map(label => (
                         
                          <Step>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>
                              {/* {label} */}
                            </StepLabel>
                          </Step>
                       
                          
                        ))}
                    
                      </Stepper>
}
      </div>
      <Modal
          show={showModal}
          size="xl"
          onHide={() => setShowModal(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Gráfico Marca:
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab
                label="Gráfico em Barras/Linhas"
                // icon={<BarChart />}
                {...a11yProps(0)}
              />
              <Tab
                label="Gráfico em Pie"
                // icon={<ShowChart />}
                {...a11yProps(1)}
              />
              <Tab label="Detalhes" {...a11yProps(2)} />
            </Tabs>
            {/* <p>Gráfico em Barras</p> */}
            <TabPanel value={value} index={0}>
              {/* {getOption(2)} */}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {/* {getOption(2)} */}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {/* {getOption(2)} */}
            </TabPanel>
          </Modal.Body>
        </Modal>
    </Container>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {/* {value === index && value === 0 && (
        <ReactEcharts
          // option={children}
          style={{ height: '500px', width: '100%' }}
          className="react_for_echarts"
        />
      )}
      {value === index && value === 1 && (
        <ReactEcharts
          // option={children}
          style={{ height: '500px', width: '100%' }}
          className="react_for_echarts"
        />
      )} */}
    </div>
  );
}
// TabPanel.propTypes = {
//   // eslint-disable-next-line react/require-default-props
//   children: PropTypes.node,
//   // eslint-disable-next-line react/forbid-prop-types
//   index: PropTypes.any.isRequired,
//   // eslint-disable-next-line react/forbid-prop-types
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default Dashboard;
