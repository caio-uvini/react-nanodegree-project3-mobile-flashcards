import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { clearLocalNotifications, setLocalNotification } from '../utils/notifications';

class QuizSummary extends Component {

  componentDidMount() {
    clearLocalNotifications()
      .then(setLocalNotification);
  }

  render() {
    const { correctCount, totalCount, onRestart, onGoBack } = this.props;

    return (
      <View>
        <Text>Quiz completed! 🎉</Text>
        <Text>You've answered correctly {correctCount} of {totalCount} questions!</Text>
        <TouchableOpacity onPress={onRestart}>
          <Text>Restart Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onGoBack}>
          <Text>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuizSummary;