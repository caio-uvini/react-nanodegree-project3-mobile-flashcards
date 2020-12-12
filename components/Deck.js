import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Deck extends Component {

  goToAddCard = (navigation, name) => {
    navigation.navigate('AddCard', { name });
  }

  goToQuiz = (navigation, name) => {
    navigation.navigate('Quiz', { name });
  }

  deleteDeck = (navigation) => {
    // TODO actually delete
    navigation.navigate('DeckList');
  }

  render() {

    const { navigation, route } = this.props;
    const { name, cardsCount } = route.params;

    return (
      <View>
        <Text>{name}</Text>
        <Text>{cardsCount} cards</Text>

        <TouchableOpacity onPress={() => this.goToAddCard(navigation, name)}>
          <Text>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.goToQuiz(navigation, name)}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.deleteDeck(navigation)}>
          <Text>Delete Deck</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Deck;