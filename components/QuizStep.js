import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import TextButton from './TextButton';
import { green, red } from '../utils/colors';

import Card from './Card';

class QuizStep extends Component {

  render() {
    const { card, onAnswered, stepNumber, stepsCount } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.progress}>Question {stepNumber} of {stepsCount}</Text>

        <View style={styles.card}><Card card={card} /></View>

        <View style={styles.buttonArea}>
          <TextButton
            onPress={() => onAnswered(true)}
            style={[styles.button, styles.correct]}
          >
            Correct
          </TextButton>

          <TextButton
            onPress={() => onAnswered(false)}
            style={[styles.button, styles.incorrect]}
          >
            Incorrect
          </TextButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  progress: {
    fontSize: 16,
    marginBottom: 10,
  },
  card: {
    width: '75%',
    height: '60%',
  },
  buttonArea: {
    marginTop: 50,
  },
  button: {
    width: 100,
    height: 40,
    marginBottom: 15,
  },
  correct: {
    backgroundColor: green
  },
  incorrect: {
    backgroundColor: red
  }
});

const mapStateToProps = (state, currentProps) => ({
  card: state.cards.cardsById[currentProps.cardId]
});

const mapDispatchToProps = () => ({});

const QuizStepContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizStep);

export default QuizStepContainer;