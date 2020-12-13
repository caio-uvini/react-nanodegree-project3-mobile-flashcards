import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import Card from './Card';

class QuizStep extends Component {

  render() {
    const { card, onAnswered, stepNumber, stepsCount } = this.props;

    return (
      <View>
        <Text>Question {stepNumber} of {stepsCount}</Text>

        <Card card={card} />

        <TouchableOpacity onPress={() => onAnswered(true)}>
          <Text>Correct :)</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onAnswered(false)}>
          <Text>Incorrect :(</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state, currentProps) => ({
  card: state.cards.cardsById[currentProps.cardId]
});

const mapDispatchToProps = () => ({});

const QuizStepContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizStep);

export default QuizStepContainer;