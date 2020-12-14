import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { clearLocalNotifications, setLocalNotification } from '../utils/notifications';
import TextButton from './TextButton';
import { green } from '../utils/colors';

class QuizSummary extends Component {

  componentDidMount() {
    clearLocalNotifications()
      .then(setLocalNotification);
  }

  render() {
    const { correctCount, totalCount, onRestart, onGoBack } = this.props;

    return (
      <View style={styles.container}>
        <AntDesign name='checkcircleo' size={80} color={green}/>
        <Text style={styles.title}>Quiz completed!</Text>
        
        <View style={styles.score}>
          <Text style={styles.scoreText}>Correct Answers: {correctCount}</Text>
          <Text style={styles.scoreText}>Answered Questions: {totalCount}</Text>
        </View>
        
        <View style={styles.buttonsContainer}>
          <TextButton onPress={onRestart} style={styles.button}>
            Restart Quiz
          </TextButton>

          <TextButton onPress={onGoBack} style={[styles.button, {marginLeft: 10}]}>
            Back to Deck
          </TextButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  score: {
    margin: 60,
    alignItems: 'center'
  },
  scoreText: {
    fontSize: 20,
  },
  button: {
    width: 130,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default QuizSummary;