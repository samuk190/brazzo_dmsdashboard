/* eslint-disable no-nested-ternary */
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
// import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { utcToZonedTime } from 'date-fns-tz';
// import pt from 'date-fns/locale/pt';
// import ReactEcharts from 'echarts-for-react';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import api from '~/services/api';
import 'echarts-gl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
// Icons
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/EditOutlined';
import DoneIcon from '@material-ui/icons/DoneAllTwoTone';
import RevertIcon from '@material-ui/icons/NotInterestedOutlined';
import { format } from 'date-fns';
import Pdf from 'react-to-pdf';
import logo from '../../assets/logo.png';

import {
  dateInitial,
  dateFinal,
  dateInitialFormatted,
  dateFinalFormatted,
} from '../../atoms/state';
import { Container } from './styles';
// const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    textAlign: 'center',
  },

  table: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    minWidth: 650,

    borderCollapse: 'separate',
  },
  selectTableCell: {
    textAlign: 'center',
    alignSelf: 'center',

    width: 60,
  },
  tableRow: {
    textAlign: 'center',
  },
  tableth: {
    fontSize: '20px',
    // border: '1px solid #CBC8BF',
  },
  tabletd: {
    width: 200,
    // border: '1px solid #CBC8BF',
  },
  tableCell: {
    textAlign: 'center',
    // border: '1px solid #CBC8BF',
    width: 130,
    height: 40,
  },
  input: {
    textAlign: 'center',
    width: 130,
    height: 40,
  },
}));
const createData = (
  logof,
  name,
  calories,
  fat,
  carbs,
  protein,
  teste,
  testef,
  tested
) => ({
  id: name.replace(' ', '_'),
  logof,
  name,
  calories,
  fat,
  carbs,
  protein,
  teste,
  testef,
  tested,
  isEditMode: false,
});

const CustomTableCell = ({ row, name, onChange, index }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  // console.log(row);
  return (
    <>
      <TableCell
        align="center"
        className={index === 1 ? classes.tabletd : classes.tableCell}
      >
        {isEditMode ? (
          <Input
            value={row[name]}
            name={name}
            onChange={e => onChange(e, row)}
            className={classes.input}
          />
        ) : (
          row[name]
        )}
      </TableCell>
    </>
  );
};

function Sugestion() {
  // const [initialDate, setInitialDate] = useRecoilState(dateInitial);
  // const [finalDate, setFinalDate] = useRecoilState(dateFinal);
  const initialFormatted = useRecoilValue(dateInitialFormatted);
  const finalFormatted = useRecoilValue(dateFinalFormatted);

  const componentRef = useRef('');
  const [rows, setRows] = React.useState([
    createData(
      'https://http2.mlstatic.com/combo-promocional-lavagem-e-hidrataco-automotiva-D_NQ_NP_957654-MLB31719149398_082019-F.jpg',
      'Combo Lavagem',
      159,
      6.0,
      24,
      4.0,
      10,
      20,
      30
    ),
    createData(
      'https://cdn.miromi.com.br/media/product/75a/centralsul-cristalizador-de-vidros-100ml-liquidacao-f39.png',
      'Cristalização de para brisas',
      237,
      9.0,
      37,
      4.3,
      10,
      20,
      30
    ),
    createData(
      'https://cdn.miromi.com.br/media/product/75a/centralsul-cristalizador-de-vidros-100ml-liquidacao-f39.png',
      'Kit revisão',
      262,
      16.0,
      24,
      6.0,
      10,
      20,
      30
    ),
    createData(
      'https://cdn.miromi.com.br/media/product/75a/centralsul-cristalizador-de-vidros-100ml-liquidacao-f39.png',
      'Kit revisão',
      262,
      16.0,
      24,
      6.0,
      10,
      20,
      30
    ),
  ]);
  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  const onToggleEditMode = id => {
    setRows(state => {
      return rows.map(row => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious(state => ({ ...state, [row.id]: row }));
    }
    const { value } = e.target;
    const { name } = e.target;
    const { id } = row;
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = id => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious(state => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };
  const ref = React.createRef();
  // api.get('appointments');
  return (
    <Container>
      {/* <header /> */}
      <Typography style={{ textAlign: 'center' }} variant="h2" component="h2">
        Sugestão de Pedidos
        {/* e {initialFormatted.toString()} e{' '}
        {finalFormatted.toString()} */}
      </Typography>
      <Pdf
        scale={1}
        options={{
          orientation: 'l',
          unit: 'px',
          format: [`${rows.length * 125}`, 1000],
        }}
        targetRef={ref}
        filename="tabela-sugestao.pdf"
      >
        {({ toPdf }) => (
          <Button
            style={{ width: 100, textAlign: 'center', alignSelf: 'left' }}
            onClick={toPdf}
            variant="contained"
          >
            Exportar para PDF
          </Button>
        )}
      </Pdf>
      {/* <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button> */}
      <Paper className={classes.root} ref={componentRef}>
        <Table ref={ref} className={classes.table} aria-label="caption table">
          <caption>Tabela - Sugestão de Pedidos</caption>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableth} colspan="2" align="center">
                PRODUTOS
              </TableCell>
              <TableCell className={classes.tableth} align="center">
                Cod Lust
              </TableCell>
              <TableCell className={classes.tableth} align="center">
                Cod Loja
              </TableCell>
              <TableCell className={classes.tableth} align="center">
                Qtd Und Caixa
              </TableCell>
              <TableCell className={classes.tableth} align="center">
                Valor unitario
              </TableCell>
              <TableCell className={classes.tableth} align="center">
                Demanda
              </TableCell>
              <TableCell className={classes.tableth} align="center">
                Quantidade Sugerida
              </TableCell>
              <TableCell className={classes.tableth} align="center">
                Valor Total
              </TableCell>
              <TableCell align="center" />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell className={classes.tableth}>
                  <img src={row.logof} width="100" height="100" alt="teste" />
                </TableCell>
                <CustomTableCell
                  {...{ index: 1, row, name: 'name', onChange }}
                />
                <CustomTableCell {...{ row, name: 'calories', onChange }} />
                <CustomTableCell {...{ row, name: 'fat', onChange }} />
                <CustomTableCell {...{ row, name: 'carbs', onChange }} />
                <CustomTableCell {...{ row, name: 'protein', onChange }} />
                <CustomTableCell {...{ row, name: 'teste', onChange }} />
                <CustomTableCell {...{ row, name: 'testef', onChange }} />
                <CustomTableCell {...{ row, name: 'tested', onChange }} />
                <TableCell className={classes.selectTableCell}>
                  {row.isEditMode ? (
                    <>
                      <IconButton
                        aria-label="done"
                        onClick={() => onToggleEditMode(row.id)}
                      >
                        <DoneIcon />
                      </IconButton>
                      <IconButton
                        aria-label="revert"
                        onClick={() => onRevert(row.id)}
                      >
                        <RevertIcon />
                      </IconButton>
                    </>
                  ) : (
                    <IconButton
                      aria-label="delete"
                      onClick={() => onToggleEditMode(row.id)}
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default Sugestion;
