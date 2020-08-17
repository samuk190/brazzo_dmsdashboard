/* eslint-disable no-nested-ternary */
import React from 'react';

// import 'react-multilevel-sidebar/src/Sidebar.css';
import 'echarts-gl';
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from '@material-ui/core/Typography';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CardHeader from '@material-ui/core/CardHeader';
import LinearProgress from '@material-ui/core/LinearProgress';
import 'fontsource-red-hat-display';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core/';
import clsx from 'clsx';
import { useRecoilState, useRecoilValue } from 'recoil';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Container } from './styles';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import TextRotateVerticalOutlinedIcon from '@material-ui/icons/TextRotateVerticalOutlined';
// const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    justifySelf: 'center',
    minWidth: 350,
    maxWidth: 400,
    minHeight: 300,
    padding: 0,
    backgroundColor: '#F8F8F8',
  },
  titleroot: {
    marginRight: 90,
    color:'#06A489',
  },
  rootfaturamento: {
    alignItems: 'center',
    justifySelf: 'center',

    minWidth: 350,
    maxWidth: 400,
    minHeight: 300,
    padding: 0,
    paddingLeft: 0,
    // backgroundColor: 'rgba(196, 196, 196, 0.2)',
  },
  rootconversoes: {
    alignItems: 'center',
    justifySelf: 'center',
    minWidth: 350,
    maxWidth: 400,
    minHeight: 300,
    padding: 0,
    paddingLeft: 0,
    // backgroundColor: 'rgba(234, 177, 124, 0.2)',
  },
  rootconsultores: {
    alignItems: 'center',
    justifySelf: 'center',
    minWidth: 350,
    maxWidth: 400,
    minHeight: 300,
    padding: 0,
    paddingLeft: 0,
    
    // backgroundColor: 'rgba(126, 234, 124, 0.2)',
  },
  list: {
    width: '100%',
    maxWidth: '36ch',
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    // paddingTop: 10,
  },
  grid: {
    // marginLeft: 40,
    alignSelf: 'center',
  },
  gridItem: {
    flexGrow: 1,
    marginRight: 100,
    // margin: 'auto',
  },
  divGrid: {
    flexGrow: 1,
    width: '100%',
    alignSelf: 'center',
    // paddingLeft: 100,
  },

  stepper: {
    background: 'none',
    padding: 0,
    paddingTop: 10,
    width: 100,
    height: 80,
  },
  header: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    // position: 'absolute',
  },
  headerfaturamento: {
    fontSize: '15px',
    fontStyle: 'normal',

    fontFamily: 'Roboto',
    color: '#000',

    textAlign: 'center',
  },
  listfaturamento: {
    // padding: 0,
    paddingLeft: 0,
  },
  listfaturamentoitem: {
    fontSize: '25px',
    width: 200,
    marginTop: 20,
  },
  listfaturamentoavatar: {
    // fontSize: '25px',

    width: '50px',
    height: '70px',
  },
  midfaturamento: {
    fontFamily: 'Roboto',
    marginLeft: 0,
    fontSize: '25px',
    letterSpacing: '0.02em',
    color: '#000',
  },
  faturamentopercent: {
    fontSize: '40px',
    fontFamily: 'Roboto',
    color: '#FFFFFF',
    fontWeight: 'bold',
    // border: '2px solid #000',
    // textShadow: '1px 1px #000',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#000',
    display: 'inline-block',
    padding: 0,

    marginTop: 10,
  },
  midrevisoes: {
    color: '#000',
    textAlign: 'center',
    fontStyle: 'normal',

    letterSpacing: '0.02em',
    fontFamily: 'Roboto',
  },
  headerrevisoes: {
    fontSize: '15px',
    fontStyle: 'normal',

    fontFamily: 'Roboto',
    color: '#000',

    textAlign: 'center',
  },

  midconversoes: {
    textAlign: 'center',
    color: '#000',

    fontStyle: 'normal',

    letterSpacing: '0.02em',
    fontFamily: 'Roboto',
  },
  midservices: {
    color: '#000',
    textAlign: 'center',
    fontStyle: 'normal',

    letterSpacing: '0.02em',
    fontFamily: 'Roboto',
  },
  listconversoes: {
    // padding: 0,
    paddingLeft: 0,
  },
  listconversoesitem: {
    fontSize: '25px',
    width: 200,
    marginTop: 20,
  },
  conversoespercent: {
    fontSize: '40px',
    fontFamily: 'Roboto',
    color: 'rgba(0, 130, 251, 0.5)',
    fontWeight: 'bold',
    // border: '2px solid #000',
    // textShadow: '1px 1px #000',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#000',
    display: 'inline-block',
    padding: 0,
    textAlign: 'right',
    marginTop: 10,
  },
  listconversoesavatar: {
    // fontSize: '25px',

    width: '50px',
    height: '70px',
  },
  headerconversoes: {
    fontSize: '15px',
    fontStyle: 'normal',

    fontFamily: 'Roboto',
    color: '#000',

    textAlign: 'center',
  },

  listconsultores: {
    // padding: 0,
    paddingLeft: 0,
  },
  listconsultoresitem: {
    fontSize: '25px',
    width: 200,
    marginTop: 20,
  },
  listconsultoresavatar: {
    // fontSize: '25px',

    width: '50px',
    height: '70px',
  },
  revisoespercent: {
    fontSize: '40px',
    textAlign: 'right',
    fontFamily: 'Roboto',
    color: '#11FF54',
    fontWeight: 'bold',
    // border: '2px solid #000',
    // textShadow: '1px 1px #000',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#000',
    display: 'inline-block',
    padding: 0,

    marginTop: 10,
  },
  headerservices: {
    fontSize: '30px',
    fontFamily: 'Roboto',
    textAlign: 'left',
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
      fontFamily: 'Roboto',
    },
    fontFamily: 'Roboto',
  },
  heading: {
    title: {
      fontFamily: 'Roboto',
    },
    // fontFamily: '',
    fontStyle: 'normal',
    fontWeight: 'bold',
    padding: 0,
    margin: 0,
    marginTop: 10,
    marginBottom: -10,
    textAlign: 'center',
    color: '#000',

    fontFamily: 'Roboto',
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
    height: '20px',
    borderRadius: '20px',
  },
  faturamentobar: {
    backgroundColor: '#26B3C0',
    borderRadius: '20px',
  },
  revisoes: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '20px',
    borderRadius: '20px',
  },
  revisoesbar: {
    backgroundColor: 'rgba(223, 34, 34, 0.83)',
    borderRadius: '20px',
  },
  conversoes: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '20px',
    borderRadius: '20px',
  },
  conversoesbar: {
    backgroundColor: '#68BBDE',
    borderRadius: '20px',
  },
  services: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '20px',
    borderRadius: '20px',
    // alignSelf: 'right',
  },
  servicesbar: {
    backgroundColor: '#9C68DE',
    borderRadius: '20px',
  },
});

function Utilization() {
  const classes = useStyles();
  // const profile = useSelector(state => state.user.profile);
  const data = [
    {
      title: 'Produtos',
      primary: 'Kit Lubrificantes',
      secondary: 'Verniz Motor',
      third: 'Inter Clean',
      avatarprimary:
        'https://brazzo.com.br/wp-content/uploads/2020/05/0002_1350-034-Brazzo_Produto_Still_InterClean_500ml.png',
      avatarsecondary:
        'https://brazzo.com.br/wp-content/uploads/2020/05/0002_1350-034-Brazzo_Produto_Still_InterClean_500ml.png',
      avatarthird:
        'https://brazzo.com.br/wp-content/uploads/2020/05/0002_1350-034-Brazzo_Produto_Still_InterClean_500ml.png',
      quarter: 1,
      earnings: 13000,
      progress: 80,
      percent: 40,
      listpercent: classes.faturamentopercent,
      linearclass: classes.faturamento,
      header: classes.headerfaturamento,
      mid: classes.midfaturamento,
      linearbarclass: classes.faturamentobar,
      valor: 'Vendas',
      list: classes.listfaturamento,
      listitem: classes.listfaturamentoitem,
      listavatar: classes.listfaturamentoavatar,
      root: classes.rootfaturamento,
      icon: false,
      stepper: false,
    },
    {
      title: 'Consultores',
      primary: 'Paula Machado',
      secondary: 'Ricardo Emanuel',
      third: 'Silva Ribeiro',
      avatarprimary:
        'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
      avatarsecondary:
        'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Prescription01&hairColor=Brown&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Hearts&eyebrowType=AngryNatural&mouthType=Vomit&skinColor=Tanned',
      avatarthird:
        'https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat2&accessoriesType=Sunglasses&hatColor=Blue01&hairColor=Platinum&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Pale',

      root: classes.rootconsultores,
      header: classes.headerrevisoes,
      percent: 30,
      listpercent: classes.revisoespercent,
      mid: classes.midrevisoes,
      list: classes.listconsultores,
      listitem: classes.listconsultoresitem,
      listavatar: classes.listconsultoresavatar,
      linearclass: classes.revisoes,
      linearbarclass: classes.revisoesbar,
      valor: 'Conversões',
    },
    {
      title: 'Serviços',
      primary: 'Higienização',
      secondary: 'Limpeza TBI',
      third: 'Verniz Motor',
      avatarprimary:
        'https://brazzo.com.br/wp-content/uploads/2020/05/0002_1350-034-Brazzo_Produto_Still_InterClean_500ml.png',
      avatarsecondary:
        'https://brazzo.com.br/wp-content/uploads/2020/05/0002_1350-034-Brazzo_Produto_Still_InterClean_500ml.png',
      avatarthird:
        'https://brazzo.com.br/wp-content/uploads/2020/05/0002_1350-034-Brazzo_Produto_Still_InterClean_500ml.png',
      quarter: 3,
      percent: 10,
      listpercent: classes.conversoespercent,
      earnings: 14250,
      progress: 10,
      root: classes.rootconversoes,
      header: classes.headerconversoes,
      mid: classes.midconversoes,

      linearclass: classes.conversoes,
      linearbarclass: classes.conversoesbar,
      list: classes.listconversoes,
      listitem: classes.listconversoesitem,
      listavatar: classes.listconversoesavatar,
      valor: 'Vendas',
    },
  ];
  return (
    <Container>
      <Typography
        className={classes.titleroot}
        variant="h3"
        align="center"
        component="h4"
      >
      <ArrowForwardIosIcon style={{marginBottom:5}} fontSize="Large" />  RANKING 
      </Typography>
      <div className={classes.divGrid}>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className={classes.grid}
        >
          {data.map(elem => (
            <Grid
              item
              spacing={0}
              xs={12}
              sm={4}
              md={3}
              key={data.indexOf(elem)}
              className={classes.gridItem}
            >
             
              <Card className={elem.root}>
                
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
                align="center"
                variant="h5"
                component="h5"
                className={elem.mid}
              >
                {elem.title}
              </Typography>
              <Typography variant="h4" component="h4" className={elem.header}>
                {elem.valor}
                {elem.icon ? <TrendingUpIcon fontSize="large" /> : null}
              </Typography>
              <Divider style={{marginTop:5}}></Divider>
              <IconButton size="small" style={{float:'right'}}>
              <ArrowUpwardOutlinedIcon style={{ boxShadow: '0px 3.57955px 4.29545px rgba(0, 0, 0, 0.25)', marginTop:5, color:'#FFF',backgroundColor:'#06A489',fontSize:'36px', borderRadius:'25px',borderColor:'#155'}}></ArrowUpwardOutlinedIcon>
              </IconButton>
              <IconButton size="small"  style={{float:'right'}}>
              <TextRotateVerticalOutlinedIcon style={{ marginTop:5,color:'#FFF',backgroundColor:'#06A489',fontSize:'36px',borderRadius:'25px',borderColor:'#155'}}></TextRotateVerticalOutlinedIcon>
              </IconButton>
                  <ListItem alignItems="flex-start" className={elem.list} > 
                    
                    <ListItemAvatar>
                      <Avatar
                        className={elem.listavatar}
                        alt="Remy Sharp"
                        variant="circle"
                        // size="lg"
                        src={elem.avatarprimary}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={elem.primary}
                      classes={{ primary: elem.listitem }}
                      // className={elem.listitem}
                    />
                    <ListItemText
                      primary={elem.percent}
                      classes={{
                        root: classes.rootest,
                        primary: elem.listpercent,
                      }}
                      // className={elem.listitem}
                    />
                  </ListItem>
                  <ListItem className={elem.list} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        className={elem.listavatar}
                        alt="Remy Sharp"
                        src={elem.avatarsecondary}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={elem.secondary}
                      classes={{ primary: elem.listitem }}
                    />
                    <ListItemText
                      primary={elem.percent}
                      classes={{ primary: elem.listpercent }}
                      // className={elem.listitem}
                    />
                  </ListItem>
                  {/* <Paper /> */}
                  <ListItem className={elem.list} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        className={elem.listavatar}
                        alt="Remy Sharp"
                        src={elem.avatarthird}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      classes={{ primary: elem.listitem }}
                      primary={elem.third}
                    />
                    <ListItemText
                      primary={elem.percent}
                      classes={{ primary: elem.listpercent }}
                      // className={elem.listitem}
                    />
                  </ListItem>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Utilization;
