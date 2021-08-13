import React, { useState } from 'react';
import styled from 'styled-components/native';
import Counter from './components/Counter';
import Form from './components/Form';
import Button from './components/Button';
import CoinInfo from './components/CoinInfo';
import { useFetch } from './hooks/useFetch';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-size: 30px;
  color: #ff6600;
`;

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  const URL = 'https://api.coinlore.net/api/tickers/';
  const { data, error, inProgress } = useFetch(URL);

  return (
    <Container>
      {inProgress && <LoadingText>Loading... </LoadingText>}
      {data?.data.map(({ symbol, name, price_usd }) => (
        <CoinInfo key={symbol} symbol={symbol} name={name} price={price_usd} />
      ))}
    </Container>
  );
}
