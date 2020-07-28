/* eslint-disable no-nested-ternary */
import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  format,
  subDays,
  addDays,
  setMilliseconds,
  setHours,
  setMinutes,
  setSeconds,
  isEqual,
  isBefore,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import ReactEcharts from 'echarts-for-react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import 'echarts-gl';
import { Container } from './styles';

// const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function Main() {
  // api.get('appointments');
  return (
    <Container>
      <header />
    </Container>
  );
}

export default Main;
