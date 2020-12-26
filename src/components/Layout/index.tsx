import React from 'react';

import { Container } from './styles';

import Header from '../Header';
import Calender from '../Calender';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Calender />
  
  
    </Container>
  );
}

export default Layout;