/* eslint-disable no-nested-ternary */
import React, { useState, useMemo } from 'react';

import 'react-multilevel-sidebar/src/Sidebar.css';
// const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import PiechartIcon from '@material-ui/icons/PieChart';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
// import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Modal } from 'react-bootstrap';
import ReactEcharts from 'echarts-for-react';
import { Container } from './styles';
import api from '~/services/api';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//

//
// function CircularProgressWithLabel(props) {
//   return (
//     <Box position="relative" display="inline-flex">
//       <CircularProgress variant="static" {...props} />
//       <Box
//         top={0}
//         left={0}
//         bottom={0}
//         right={0}
//         position="absolute"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Typography
//           variant="caption"
//           component="div"
//           color="textSecondary"
//         >{`${Math.round(props.value)}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  circular: {
    colorPrimary: {
      backgroundColor: '#FD8907',
    },
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 500,
    minWidth: 450,
  },
  image: {
    width: 128,
    height: 128,
  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
function Utilization() {
  // estados
  const [show, setShow] = useState(false);
  const [showGraph, setShowGraph] = useState(false);

  const [graphData, setGraphData] = useState([]);
  const [data, setData] = useState([]);
  const [dealership, setDealership] = useState([]);
  // estados
  // Graficos

  // Gráficos

  // const profile = useSelector(state => state.user.profile);
  //

  async function getBrandData(id) {
    await api.get(`dealerships?brand_id=${id}`).then(response => {
      // console.log(response.data);
      setDealership(response.data);
    });
  }
  async function handleShow(value) {
    setShow(true);
    await getBrandData(value.id);

    return value;
  }

  async function handleShowGraph(value) {
    setGraphData(value);
    setShowGraph(true);

    // await getBrandData(value.id);

    return value;
  }

  useMemo(() => {
    api.get('brands').then(response => {
      // console.log(response.data);
      setData(response.data);
    });
  }, []);
  function getOption() {
    // const datatobe = await api.get(`dealerships?brand_id=1`);

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
    const arrayTitle = [];
    const arrayValue = [];
    // const itemStyle = [];
    dealership
      .map(function(elem) {
        arrayTitle.push(elem.title);
        arrayValue.push({
          value: elem.objective,
          itemStyle: {
            color:
              elem.objective === elem.maxObjective
                ? '#00B001'
                : elem.objective >= elem.targetObjective
                ? '#ffcc00'
                : '#E41001',
          },
        });
      })
      .join(',');
    console.log(arrayValue);
    //   `${dealership.map(function(elem){
    //     return elem.title;
    // }).join(",")}`
    console.log(
      `${dealership
        .map(function(elem) {
          return elem.title;
        })
        .join(',')}`
    );

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
        data: arrayTitle,

        // [

        // 'Loja Volvo',
        // 'Loja Renault',
        // 'Loja Teste',
        // 'Loja Teste',
        // 'Loja Teste',
        // 'Loja Teste',
        // 'Loja Testej',
        // 'Loja Testeh',
        // 'Loja Testeg',
        // 'Loja Testef',
        // ],
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
          data: arrayValue,
          // [
          //   {
          //     value: 300,
          //     itemStyle: { color: `${valuef > 190 ? '#3AC88C' : '#DFAE35'}` },
          //   },
          //   {
          //     value: 250,
          //     itemStyle: { color: `${value > 190 ? '#3AC88C' : '#DFAE35'}` },
          //   },
          //   {
          //     value: 150,
          //     itemStyle: {
          //       color: `${
          //         valued > 190 ? '#3AC88C' : value > 110 ? '#DFAE35' : 'red'
          //       }`,
          //     },
          //   },
          //   {
          //     value: 110,
          //     itemStyle: {
          //       color: `${
          //         valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
          //       }`,
          //     },
          //   },
          //   {
          //     value: 90,
          //     itemStyle: {
          //       color: `${
          //         valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
          //       }`,
          //     },
          //   },
          //   {
          //     value: 70,
          //     itemStyle: {
          //       color: `${
          //         valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
          //       }`,
          //     },
          //   },
          //   {
          //     value: 60,
          //     itemStyle: {
          //       color: `${
          //         valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
          //       }`,
          //     },
          //   },
          //   {
          //     value: 50,
          //     itemStyle: {
          //       color: `${
          //         valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
          //       }`,
          //     },
          //   },
          //   {
          //     value: 40,
          //     itemStyle: {
          //       color: `${
          //         valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
          //       }`,
          //     },
          //   },
          //   {
          //     value: 20,
          //     itemStyle: {
          //       color: `${
          //         valued > 190 ? '#3AC88C' : valued > 110 ? '#DFAE35' : 'red'
          //       }`,
          //     },
          //   },
          // ],
          type: 'bar',
        },
      ],
    };
  }

  // console.log(data);
  const classes = useStyles();
  // const profile = useSelector(state => state.user.profile);
  // const [progress, setProgress] = React.useState(10);
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress(prevProgress =>
  //       prevProgress >= 100 ? 10 : prevProgress + 10
  //     );
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  return (
    <>
      <Container>
        <header />
        <Typography variant="h2" component="h2">
          Grupos
        </Typography>
        <div className={classes.root}>
          <Grid item xs={16}>
            <Grid container spacing={6}>
              {data.map(value => (
                <Paper
                  style={{ marginBottom: 0, marginTop: 50 }}
                  className={classes.paper}
                >
                  <Grid container spacing={4}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt="complex"
                          src={value.urlImage}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={6} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            {value.title}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            BOTA FOGO
                          </Typography>
                          <Button
                            onClick={() => handleShow(value)}
                            size="small"
                            color="primary"
                            startIcon={
                              <DriveEtaIcon>Concessionárias </DriveEtaIcon>
                            }
                          >
                            Concessionárias
                          </Button>

                          <Button
                            onClick={() => handleShowGraph(value)}
                            size="small"
                            color="primary"
                            startIcon={<PiechartIcon />}
                          >
                            Gráficos
                          </Button>
                        </Grid>
                        <Grid item />
                      </Grid>

                      <Grid item />
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs />
                        </Grid>
                        <Grid item>
                          <Typography gutterBottom variant="subtitle1">
                            Ticket Médio
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            <Box position="relative" display="inline-flex">
                              {/* <CircularProgress
                                size={80}
                                variant="static"
                                className={classes.circular}
                                colorPrimary={
                                  value.objective > 4
                                    ? { colorPrimary: '#00B001' }
                                    : value.objective < 3
                                    ? '#ffcc00'
                                    : '#E41001'
                                }
                                value={10 - value.objective * 10}
                                color="primary"
                                styles={
                                  value.objective > 4
                                    ? {
                                        colorPrimary: {
                                          backgroundColor: '#00B001',
                                        },
                                      }
                                    : value.objective < 3
                                    ? '#ffcc00'
                                    : '#E41001'
                                }
                              /> */}
                              <div style={{ width: 75, height: 75 }}>
                                <CircularProgressbar
                                  value={value.objective}
                                  maxValue={value.maxObjective}
                                  text={`${value.objective}`}
                                  styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.25,

                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',

                                    // Text size
                                    textSize: '24px',

                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,

                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',

                                    // Colors

                                    textColor: `${
                                      value.objective === value.maxObjective
                                        ? '#00B001'
                                        : value.objective >
                                          value.targetObjective
                                        ? '#ffcc00'
                                        : '#E41001'
                                    }`,

                                    trailColor: '#d6d6d6',
                                    stroke: '#d6d6d6',
                                    pathColor: `${
                                      value.objective === value.maxObjective
                                        ? '#00B001'
                                        : value.objective >
                                          value.targetObjective
                                        ? '#ffcc00'
                                        : '#E41001'
                                    }`,
                                    // backgroundColor: `${
                                    //   value.objective > 4
                                    //     ? '#00B001'
                                    //     : value.objective > 3
                                    //     ? '#ffcc00'
                                    //     : '#E41001'
                                    // }`,
                                  })}
                                />
                              </div>

                              {/* <Box
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <Typography
                                  variant="caption"
                                  component="div"
                                  color="textSecondary"
                                >
                                  {value.objective}
                                </Typography>
                              </Box> */}
                            </Box>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </Grid>
          </Grid>
        </div>
        <Modal
          size="xl"
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-200w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Concessionárias do grupo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={classes.root}>
              <Grid item xs={16}>
                <Grid container spacing={2}>
                  {dealership.map(value => (
                    <Paper
                      style={{ marginBottom: 0, marginTop: 50 }}
                      className={classes.paper}
                    >
                      <Grid container spacing={4}>
                        <Grid item>
                          <ButtonBase className={classes.image}>
                            <img
                              className={classes.img}
                              alt="complex"
                              src={value.urlImage}
                            />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={6} sm container>
                          <Grid
                            item
                            xs
                            container
                            direction="column"
                            spacing={2}
                          >
                            <Grid item xs>
                              <Typography gutterBottom variant="subtitle1">
                                {value.title}
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                BOTA FOGO
                              </Typography>
                              <Button
                                onClick={() => handleShow(value)}
                                size="small"
                                color="primary"
                                startIcon={
                                  <DriveEtaIcon>Concessionárias </DriveEtaIcon>
                                }
                              >
                                Concessionárias
                              </Button>

                              <Button
                                size="small"
                                color="primary"
                                startIcon={<PiechartIcon />}
                              >
                                Gráficos
                              </Button>
                            </Grid>
                            <Grid item />
                          </Grid>

                          <Grid item />
                          <Grid item xs={12} sm container>
                            <Grid
                              item
                              xs
                              container
                              direction="column"
                              spacing={2}
                            >
                              <Grid item xs />
                            </Grid>
                            <Grid item>
                              <Typography gutterBottom variant="subtitle1">
                                Ticket Médio
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                <Box position="relative" display="inline-flex">
                                  {/* <CircularProgress
                                size={80}
                                variant="static"
                                className={classes.circular}
                                colorPrimary={
                                  value.objective > 4
                                    ? { colorPrimary: '#00B001' }
                                    : value.objective < 3
                                    ? '#ffcc00'
                                    : '#E41001'
                                }
                                value={10 - value.objective * 10}
                                color="primary"
                                styles={
                                  value.objective > 4
                                    ? {
                                        colorPrimary: {
                                          backgroundColor: '#00B001',
                                        },
                                      }
                                    : value.objective < 3
                                    ? '#ffcc00'
                                    : '#E41001'
                                }
                              /> */}
                                  <div style={{ width: 75, height: 75 }}>
                                    <CircularProgressbar
                                      value={value.objective}
                                      maxValue={value.maxObjective}
                                      text={`${value.objective}`}
                                      styles={buildStyles({
                                        // Rotation of path and trail, in number of turns (0-1)
                                        rotation: 0.25,

                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'butt',

                                        // Text size
                                        textSize: '24px',

                                        // How long animation takes to go from one percentage to another, in seconds
                                        pathTransitionDuration: 0.5,

                                        // Can specify path transition in more detail, or remove it entirely
                                        // pathTransition: 'none',

                                        // Colors

                                        textColor: `${
                                          value.objective === value.maxObjective
                                            ? '#00B001'
                                            : value.objective >
                                              value.targetObjective
                                            ? '#ffcc00'
                                            : '#E41001'
                                        }`,

                                        trailColor: '#d6d6d6',
                                        stroke: '#d6d6d6',
                                        pathColor: `${
                                          value.objective === value.maxObjective
                                            ? '#00B001'
                                            : value.objective >
                                              value.targetObjective
                                            ? '#ffcc00'
                                            : '#E41001'
                                        }`,
                                        // backgroundColor: `${
                                        //   value.objective > 4
                                        //     ? '#00B001'
                                        //     : value.objective > 3
                                        //     ? '#ffcc00'
                                        //     : '#E41001'
                                        // }`,
                                      })}
                                    />
                                  </div>
                                </Box>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  ))}
                </Grid>
              </Grid>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          show={showGraph}
          onHide={() => setShowGraph(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Gráfico Grupo:
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Gráfico em Barras</p>
            <ReactEcharts
              option={getOption()}
              style={{ height: '500px', width: '100%' }}
              className="react_for_echarts"
            />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default Utilization;
