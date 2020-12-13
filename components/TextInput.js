import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

import { white } from '../utils/colors';

const TextInput = ({ onChangeText, placeholder, value, style={} }) => {
  return (
    <RNTextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      style={[styles.input, style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: white,
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
  }
});

export default TextInput;