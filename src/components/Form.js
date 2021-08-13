import React, { useState, useEffect, useRef } from 'react';
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

  const refName = useRef(null);
  const refEmail = useRef(null);

  useEffect(() => {
    console.log('=-=-=-=-=-=-=-= Mount =-=-=-=-=-=-=-=');
    refName.current.focus();
    return () => console.log('=-=-=-=-=-=-=-= Unmount =-=-=-=-=-=-=-=');
  }, []);

  useEffect(() => {
    console.log(`name: ${name}, email: ${email}`);
    //console.log(`count: ${count}`);
  }, [email]);

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <>
      <StyledText> Name : {name}</StyledText>
      <StyledText> Email : {email}</StyledText>
      <StyledInput
        value={name}
        onChangeText={setName}
        placeholder="name"
        ref={refName}
        returnKeyType="next"
        onSubmitEditing={() => refEmail.current.focus()}
      />
      <StyledInput
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        ref={refEmail}
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />
      <Button title="count" onPress={() => count + 1} />
    </>
  );
};

export default Form;
