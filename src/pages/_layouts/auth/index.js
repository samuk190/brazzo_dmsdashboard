import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styles';
// import { Container } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children} </Content>
    </Wrapper>
  );
} // element do react nao função
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
