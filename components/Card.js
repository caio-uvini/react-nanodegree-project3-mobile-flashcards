import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { lightGray } from '../utils/colors';

import TextButton from './TextButton';

class Card extends Component {

  state = {
    flipped: false
  }

  componentDidUpdate(prevProps) {
    const { question, answer } = this.props.card;

    const questionChanged = prevProps.card.question !== question;
    const answerChanged = prevProps.card.answer !== answer;

    if (questionChanged || answerChanged) {
      this.setState(() => ({
        flipped: false
      }));
    }
  }

  flipCard = () => {
    this.setState((prevState) => ({
      flipped: !prevState.flipped
    }));
  }

  render() {
    const { card } = this.props;
    const { flipped } = this.state;

    const cardContent = flipped ? card.answer : card.question;
    const buttonText = flipped ? 'Show Question' : 'Show Answer';

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{cardContent}</Text>
        <TextButton
          onPress={this.flipCard}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TextButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: lightGray
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  button: {
    marginBottom: 20,
    width: 120,
  },
  buttonText: {
    fontSize: 15,
  }
});

export default Card;