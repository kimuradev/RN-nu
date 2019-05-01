import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/pages/Header';
import Tabs from '~/pages/Tabs';
import Menu from '~/pages/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  Title,
  Description,
  Annotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={20} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 197.611,32</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida de Leandro Kimura
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
