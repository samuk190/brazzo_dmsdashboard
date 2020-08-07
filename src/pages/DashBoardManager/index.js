/* eslint-disable no-nested-ternary */
import React from 'react';

import { Container } from './styles';
import { makeStyles, withStyles } from '@material-ui/core/styles';

// const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
import Typography from '@material-ui/core/Typography';
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
  },

});
function DashboardManager() {
  // const profile = useSelector(state => state.user.profile);
  const classes = useStyles();
  return (
    <Container>
  <Typography
          className={classes.titleroot}
          variant="h3"
          align="center"
          component="h4"
        >
          Painel Visão Gestor Loja
        </Typography>  
          </Container>
  );
}

export default DashboardManager;
