import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { gray } from '../utils/colors';

import TextButton from './TextButton';

class Deck extends Component {

  goToAddCard = () => {
    const { deck, navigation } = this.props;
    navigation.navigate('AddCard', { deckId: deck.id, deckName: deck.name });
  }

  goToQuiz = () => {
    const { deck, navigation } = this.props;
    navigation.navigate('Quiz', { deckId: deck.id, deckName: deck.name });
  }

  render() {

    const { name, cards } = this.props.deck;
    const cardsCount = cards.length;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{cardsCount} card{cardsCount === 1 ? '' : 's'}</Text>

        <TextButton
          onPress={this.goToAddCard}
          style={styles.button}
        >
          Add Card
        </TextButton>

        <TextButton
          disabled={cardsCount === 0}
          onPress={this.goToQuiz}
          style={styles.button}
        >
          Start Quiz
        </TextButton>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 22,
    color: gray,
    marginBottom: 100,
  },
  button: {
    width: 120,
    marginBottom: 30
  },
});

const mapStateToProps = (state, currentProps) => ({
  deck: state.decks.decksById[currentProps.route.params.id]
});

const mapDispatchToProps = () => ({});

const DeckContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);

export default DeckContainer;