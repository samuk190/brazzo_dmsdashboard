/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import MultilevelSidebar from 'react-multilevel-sidebar';
// import { IconButton } from 'rea';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Collapse from '@material-ui/core/Collapse';
import BuildIcon from '@material-ui/icons/Build';
// import { format, parseISO } from 'date-fns';

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

// import Chip from '@material-ui/core/Chip';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// pick a date util library
// import MomentUtils from '@date-io/moment';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
// import LuxonUtils from '@date-io/luxon';
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import PiechartIcon from '@material-ui/icons/PieChart';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  brands,
  groups,
  regions,
  dateInitial,
  dateFinal,
  listbrands,
  listregions,
} from '~/atoms/state';
import api from '~/services/api';
import { Container, Content, Profile, Calendar } from './styles';
// import Notifications from '~/components/Notifications';
import logo from '~/assets/logo2.png';

const useStyles = makeStyles(theme => ({
  list: {
    width: 300,
    marginTop: 10,
  },
  fullList: {
    width: 'auto',
  },
  formControl: {
    margin: theme.spacing(0),
    marginLeft: 15,
    marginTop: 7,
    minWidth: 200,
    maxWidth: 200,
    // marginBottom: 10,
    // justifyContent: 'space-around',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

function Header() {
  const [brand, setBrand] = useRecoilState(brands);

  const [group, setGroup] = useRecoilState(groups);

  const [names, setNames] = useRecoilState(listbrands);
  const [region, setRegionName] = useRecoilState(regions);
  const [regionlist, setRegionList] = useRecoilState(listregions);
  // const [names,setNames] = useRecoilValue(asyncbrands);
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleChangeRegion = event => {
    setRegionName(event.target.value);
  };
  const handleChange = event => {
    setBrand(event.target.value);
  };
  const handleChangeGroup = event => {
    setGroup(event.target.value);
  };
  // let names = ['Todos'];

  React.useEffect(() => {
    async function loadData() {
      const datab = await api.get('brands');

      const brand = datab.data.map(function(brand) {
        return brand;
      });
      // console.log(title);
      // const groups = datab.data.map(function(brand) {
      //   console.log(brand.groups.name);
      //   return brand.groups.name;
      // });
      // setGroup(groups);
      // console.log(groups);
      setNames([{ name: 'Todos' }, ...brand]);
    }
    loadData();
  }, [setNames]);

  // const names = brand.title;

  // const names = [
  //   'Todos',
  //   'Hyundai',
  //   'Renault',
  //   'Peugeot',
  //   'Ralph Hubbard',
  //   'Omar Alexander',
  //   'Carlos Abbott',
  //   'Miriam Wagner',
  //   'Bradley Wilkerson',
  //   'Virginia Andrews',
  //   'Kelly Snyder',
  // ];
  // // const handleChangeMultiple = event => {
  //   const { options } = event.target;
  //   const value = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   setPersonName(value);
  // };
  // Temas

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // function getStyles(name, personName, theme) {
  //   return {
  //     fontWeight:
  //       personName.indexOf(name) === -1
  //         ? theme.typography.fontWeightRegular
  //         : theme.typography.fontWeightMedium,
  //   };
  // }
  const [initialDate, setInitialDate] = useRecoilState(dateInitial);
  const [finalDate, setFinalDate] = useRecoilState(dateFinal);

  const handleDateChange = date => {
    setInitialDate(date);
  };
  const handleDateChangeFinal = date => {
    setFinalDate(date);
  };
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'light' : 'dark';
  const darkTheme = createMuiTheme({
    overrides: {
      MuiPickersInput: {
        input: {
          color: '#FFF',
        },
      },
      MuiInputLabel: {
        root: {
          color: '#FFF',
        },
      },
      MuiInputBase: {
        input: {
          color: '#FFF',
        },
      },
      // MuiSvgIcon: {
      //   root: {
      //     color: '#FFF',
      //   },
      // },
      MuiPickersToolbar: {
        toolbar: {
          color: '#FFF',
        },
      },
      MuiPickersCalendarHeader: {
        switchHeader: {
          // backgroundColor: lightBlue.A200,
          // color: "white",
        },
      },
      // MuiPickersDay: {
      //   day: {
      //     color: '#FFF',
      //   },
      //   daySelected: {
      //     color: '#FFF',
      //   },
      //   dayDisabled: {
      //     color: '#FFF',
      //   },
      //   today: {
      //     color: '#FFF',
      //   },
      // },
      // MuiPickersModalDialog: {
      //   dialogAction: {
      //     color: '#FFF',
      //   },
      // },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const options = [
    {
      title: 'Painel',
      titleIcon: <HomeIcon />,
      content: [
        {
          id: 1,
          name: 'Painel de informações',
          to: `${(<Link to="/profile" />)}`,
        },
        // { id: 2, name: 'Aproveitamento', to: '/dashboard' },
        // { id: 2, name: 'Aproveitamento', to: '/dashboard' },
        // { id: 2, name: 'Aproveitamento', to: '/dashboard' },
        // { id: 2, name: 'Aproveitamento', to: '/dashboard' },
        // { id: 2, name: 'Aproveitamento', to: '/dashboard' },
        // { id: 2, name: 'Aproveitamento', to: '/dashboard' },
      ],
    },
    {
      title: 'Gráficos',
      titleIcon: <PiechartIcon />,
      hideBorder: false,
      content: [
        {
          id: 2,
          name: 'Ticket Médio',
          // icon: <HomeIcon />,
          children: [
            {
              title: 'Geral',
              titleIcon: <i className="fa fa-opera" />,
              content: [
                {
                  id: 3,
                  name: 'Visão Grupo',
                  to: '/dashboard',
                },
                {
                  id: 4,
                  name: 'Consultores',
                  to: '/dashboard',
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: 'Aproveitamento',
          // icon: <HomeIcon />,
          children: [
            {
              title: 'Geral',
              titleIcon: <i className="fa fa-opera" />,
              content: [
                {
                  id: 4,
                  name: 'Por Marcas',
                  to: '/utilization',
                },
                {
                  id: 5,
                  name: 'Por Revenda',
                  to: '/utilization',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Ferramentas',
      titleIcon: <BuildIcon />,
      hideBorder: false,
      content: [
        {
          id: 3,
          name: 'Sugestão de Pedidos',
          // icon: <BuildIcon />,
          to: '/sugestion',
          // children: [
          //   {
          //     title: 'Sugestão de Pedidos',
          //     titleIcon: <i className="fa fa-opera" />,
          //     content: [
          //       {
          //         id: 4,
          //         name: 'Por Marcas',
          //         to: '/utilization',
          //       },
          //     ],
          //   },
          // ],
        },
      ],
    },
    {
      title: 'Voltar versão antiga',
      titleIcon: <i className="fa fa-graduation-cap" />,
      content: [
        { id: 1, name: 'Sair', to: '/' },
        {
          id: 2,
          name: <Switch checked={darkState} onChange={handleThemeChange} />,
        },
        // { id: 2, name: 'Aproveitamento', to: '/dashboard' },
        // { id: 2, name: 'Aproveitamento', to: '/dashboard' },
        // { id: 2, name: 'Aproveitamento', to: '/dashboard' },
        // { id: 2, name: 'Aproveitamento', to: '/dashboard' },
        // { id: 2, name: 'Aproveitamento', to: '/dashboard' },
        // { id: 2, name: 'Aproveitamento', to: '/dashboard' },
      ],
    },
  ];

  //
  const [isOpen, setOpen] = useState(false);
  function handleSidebarToggle() {
    setOpen(!isOpen);
  }

  const routes = [
    {
      text: 'Painel',
      route: '/dashboard',
    },
    {
      text: 'Faturamento',
      route: '/dashboard',
    },
    {
      text: 'Aproveitamento',
      route: '/utilization',
    },
    {
      text: 'Ranking',
      route: '/ranking',
    },
    {
      text: 'Sugestão de Pedidos',
      route: '/sugestion',
    },
  ];
  const profile = useSelector(state => state.user.profile);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {routes.map((elem, index) => (
          <ListItem component={Link} to={elem.route} button key={elem.text}>
            <ListItemIcon>
              {index === 0 ? (
                <HomeIcon />
              ) : index === 1 ? (
                <AttachMoneyIcon />
              ) : index === 2 ? (
                <AssistantPhotoIcon />
              ) : index === 3 ? (
                <ShowChartIcon />
              ) : (
                <ViewStreamIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={elem.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Versão Antiga'].map((text, index) => (
          <ListItem button component={Link} to="/dashboard" key={text}>
            <ListItemIcon>
              {index === 1 ? <HomeIcon /> : <ArrowBackIosIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Content>
          <div>
            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
              {list('left')}
            </Drawer>

            {/* <MultilevelSidebar
              open={isOpen}
              onToggle={handleSidebarToggle}
              options={options}
              header="INDICADORES BI"
              // onItemClick={}
            /> */}
            {/* using in our button to open the sidebar */}
            <IconButton
              onClick={toggleDrawer(true)}
              color="#FFF"
              aria-label="Abrir Menu"
            >
              <MenuIcon style={{ fill: '#FFF' }} />
            </IconButton>
          </div>

          <nav>
            <img src={logo} style={{ height: 50 }} alt="Mobato" />
            {/* <Link style={{ paddingRight: 10 }} to="/dashboard">
              Filtro
            </Link> */}

            <Calendar>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Data Inicial"
                    value={initialDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'Mudar Data',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Calendar>
            <Calendar>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Data Final"
                    value={finalDate}
                    onChange={handleDateChangeFinal}
                    KeyboardButtonProps={{
                      'aria-label': 'Mudar Data',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Calendar>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-che3ckbox-label">Marcas</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={brand}
                onChange={handleChange}
                input={<Input />}
                renderValue={selected => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map(name => (
                  <MenuItem key={name.name} value={name.name}>
                    <Checkbox checked={brand.indexOf(name.name) > -1} />
                    <ListItemText primary={name.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-checkbox-label">Grupos</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={group}
                onChange={handleChangeGroup}
                input={<Input />}
                renderValue={selected => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map(namef => [
                  namef.groups
                    ? namef.groups.map(name => [
                        <MenuItem key={name.name} value={name.name}>
                          <Checkbox checked={group.indexOf(name.name) > -1} />
                          <ListItemText primary={name.name} />

                          <Collapse
                            unmountOnExit
                            in={group.indexOf(name.name) > -1 || false}
                            timeout="auto"
                          >
                            {name.dealerships.map(dealership => [
                              <MenuItem key={name.name} value={name.name}>
                                <Checkbox
                                  checked={group.indexOf(dealership.name) > -1}
                                />
                                <ListItemText primary={dealership.name} />
                              </MenuItem>,
                            ])}
                          </Collapse>
                        </MenuItem>,
                      ])
                    : '',
                ])}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-che3ckbox-label">Regiões</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={region}
                onChange={handleChangeRegion}
                input={<Input />}
                renderValue={selected => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {regionlist.map(name => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={region.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Link style={{ paddingRight: 10 }} to="/dashboard" />
            <Link style={{ paddingRight: 10 }} to="/dashboard" />
            <Link style={{ paddingRight: 10 }} to="/dashboard" />
            <Link style={{ paddingRight: 10 }} to="/dashboard" />
            <Link style={{ paddingRight: 10 }} to="/dashboard" />
            <Link style={{ paddingRight: 10 }} to="/dashboard" />
            <Link style={{ paddingRight: 10 }} to="/dashboard" />
          </nav>

          <aside>
            {/* <Notifications /> */}
            <Profile>
              <div>
                {/* //{profile.name} */}
                <strong>Samuel</strong>
                <Link to="/profile">Meu Perfil</Link>
              </div>
              {/* {profile.avatar && profile.avatar.url !== null ? (
                <img src={profile.avatar.url} alt="SamuelWallace" />
              ) : (
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="SamuelWallace"
                />
              )} */}
            </Profile>
          </aside>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default Header;
