import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { gray } from '../utils/colors';

class DeckListItem extends Component {

  onPress = () => {
    const { deck, navigation } = this.props;
    navigation.navigate('Deck', { id: deck.id, name: deck.name });
  }

  render() {
    const { name, cards } = this.props.deck;
    const cardsCount = cards.length;

    return (
      <TouchableOpacity 
        style={styles.deck}
        onPress={this.onPress}
      >
        <Text style={styles.deckTitle}>{name}</Text>
        <Text style={styles.deckSubtitle}>{cardsCount} card{cardsCount === 1 ? '' : 's'}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    borderWidth: 0,
    borderRadius: 5,
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  deckSubtitle: {
    fontSize: 14,
    paddingTop: 3,
    color: gray
  }
});

const mapStateToProps = (state, currentProps) => ({
  deck: state.decks.decksById[currentProps.deckId]
});

const mapDispatchToProps = () => ({});

const DeckListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckListItem);

export default DeckListItemContainer;