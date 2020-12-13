import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class EmptyDeckList extends Component {
  render() {
    return (
      <View style={styles.emptyFeedback}>
        <AntDesign name='exclamationcircleo' size={80} style={styles.emptyFeedbackIcon}/>
        <Text style={styles.emptyFeedbackTitle}>
          You don't have any deck yet!
        </Text>
        <Text style={styles.emptyFeedbackSubtitle}>
          Add some and start studying!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(({
  emptyFeedback: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyFeedbackIcon: {
    margin: 20,
  },
  emptyFeedbackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyFeedbackSubtitle: {
    fontSize: 14,
    paddingTop: 3,
  }
}))

export default EmptyDeckList;