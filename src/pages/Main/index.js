import React from 'react';

import Header from '~/pages/Header';
import Tabs from '~/pages/Tabs';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
}
