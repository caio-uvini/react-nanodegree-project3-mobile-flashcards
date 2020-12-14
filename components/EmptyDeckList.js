import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class EmptyDeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AntDesign name='exclamationcircleo' size={80} style={styles.icon}/>
        <Text style={styles.title}>
          You don't have any deck yet!
        </Text>
        <Text style={styles.subtitle}>
          Add some and start studying!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    paddingTop: 3,
  }
}))

export default EmptyDeckList;