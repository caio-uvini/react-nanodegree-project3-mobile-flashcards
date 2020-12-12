import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

class DeckListItem extends Component {

  onPress = () => {
    const { deck, navigation } = this.props;
    navigation.navigate('Deck', { id: deck.id, name: deck.name });
  }

  render() {
    const { name, cards } = this.props.deck;

    return (
      <TouchableOpacity 
        style={styles.listItem} 
        onPress={this.onPress}
      >
        <Text>{name} - {cards.length} cards</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 30,
    margin: 2,
    borderWidth: 2
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