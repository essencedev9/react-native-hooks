import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from './Button';

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <StyledText>count : {count} </StyledText>
      <Button
        title="+"
        onPress={() => {
          // setCount(count + 1);
          // setCount(count + 1);
          setCount(count => {
            return count + 1;
          });
          setCount(count => {
            return count + 1;
          });
        }}
      ></Button>
      <Button title="-" onPress={() => setCount(count => count - 1)}></Button>
    </>
  );
};

export default Counter;
