import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Card extends Component {

  state = {
    flipped: false
  }

  flipCard = () => {
    this.setState((prevState) => ({
      flipped: !prevState.flipped
    }))
  }

  render() {
    const { card } = this.props;
    const { flipped } = this.state;

    const cardContent = flipped ? card.answer : card.question;
    const buttonText = flipped ? 'Show Question' : 'Show Answer';

    return (
      <View>
        <Text>{cardContent}</Text>
        <TouchableOpacity onPress={this.flipCard}>
          <Text>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Card;