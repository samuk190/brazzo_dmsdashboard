import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

import Header from '~/components/Header';
// import { Container } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
} // element do react nao função
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
