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

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function Dashboard() {
  const profile = useSelector(state => state.user.profile);
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      const { timezone } = Intl.DateTimeFormat().resolvedOptions();

      const data = range.map(hour => {
        const checkDate = setMilliseconds(
          setSeconds(setMinutes(setHours(date, hour), 0), 0),
          0
        );
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });
      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }
  // tem q ser dentro
  // api.get('appointments');
  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong> {dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>
      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            {time.appointment ? (
              profile.avatar && profile.avatar.url !== null ? (
                <img src={profile.avatar.url} alt="" />
              ) : (
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt=""
                />
              )
            ) : (
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            )}
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}

export default Dashboard;
