import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

class Deck extends Component {

  goToAddCard = () => {
    const { deck, navigation } = this.props;
    navigation.navigate('AddCard', { deckId: deck.id, deckName: deck.name });
  }

  goToQuiz = () => {
    const { deck, navigation } = this.props;
    navigation.navigate('Quiz', { deckId: deck.id, deckName: deck.name });
  }

  deleteDeck = () => {
    // TODO actually delete
    this.props.navigation.navigate('DeckList');
  }

  render() {

    const { name, cards } = this.props.deck;

    const cardsCount = cards.length;

    return (
      <View>
        <Text>{name}</Text>
        <Text>{cardsCount} cards</Text>

        <TouchableOpacity onPress={this.goToAddCard}>
          <Text>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled={cardsCount === 0} onPress={this.goToQuiz}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.deleteDeck}>
          <Text>Delete Deck</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const mapStateToProps = (state, currentProps) => ({
  deck: state.decks.decksById[currentProps.route.params.id]
});

const mapDispatchToProps = () => ({});

const DeckContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);

export default DeckContainer;