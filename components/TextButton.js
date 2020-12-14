import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { purple, gray, white } from '../utils/colors';

const TextButton = ({ children, onPress, disabled=false, style={} }) => {

  const buttonStyles = disabled
    ? [styles.btn, styles.btnDisabled]
    : styles.btn;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[buttonStyles, style]}
    >
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    width: 90,
    height: 35,
    backgroundColor: purple,
    borderRadius: 7,
  },
  btnDisabled: {
    backgroundColor: gray,
  },
  btnText: {
    textAlign: 'center',
    color: white,
    fontSize: 18
  }
});

export default TextButton;