/* eslint-disable no-nested-ternary */
import React from 'react';

import '~/pages/Ticket/node_modules/react-multilevel-sidebar/src/Sidebar.css';
// const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import PiechartIcon from '@material-ui/icons/PieChart';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { Container } from './styles';

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
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
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: 345,
    // minWidth: 300,
    // flexDirection: 'column',
    // alignSelf: 'stretch',
  },
  // paper: {
  //   height: 140,
  //   width: 100,
  // },
  control: {
    padding: theme.spacing(2),
  },
}));
function Utilization() {
  const classes = useStyles();
  // const profile = useSelector(state => state.user.profile);
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <Container>
        <header />
        <label style={{ alignSelf: 'center' }}>Marcas</label>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map(value => (
                <Grid key={value} item xs={6}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        style={{ alignSelf: 'stretch' }}
                        image="https://logodownload.org/wp-content/uploads/2017/10/volvo-logo.png"
                        title="Contemplative Reptile"
                      />
                      <CircularProgressWithLabel value={progress} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Volvo
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
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
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Utilization;
