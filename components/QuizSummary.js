import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class QuizSummary extends Component {

  render() {
    const { correctCount, totalCount, onRestart, onGoBack } = this.props;

    return (
      <View>
        <Text>You completed the quiz! 🎉</Text>
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