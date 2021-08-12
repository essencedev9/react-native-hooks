import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Button from './Button';

const StyledInput = styled.TextInput`
  border: 1px solid #111111;
  padding: 10px;
  margin: 10px 0;
  width: 200px;
  font-size: 24px;
`;

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  let count = 0;

  useEffect(() => {
    console.log('=-=-=-=-=-=-=-= Mount =-=-=-=-=-=-=-=');
    return () => console.log('=-=-=-=-=-=-=-= Unmount =-=-=-=-=-=-=-=');
  });

  useEffect(() => {
    console.log(`name: ${name}, email: ${email}`);
    //console.log(`count: ${count}`);
  }, [email]);

  return (
    <>
      <StyledText> Name : {name}</StyledText>
      <StyledText> Email : {email}</StyledText>
      <StyledInput value={name} onChangeText={setName} placeholder="name" />
      <StyledInput value={email} onChangeText={setEmail} placeholder="email" />
      <Button title="count" onPress={() => count + 1} />
    </>
  );
};

export default Form;
