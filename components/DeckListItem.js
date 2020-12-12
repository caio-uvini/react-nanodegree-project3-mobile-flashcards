import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class DeckListItem extends Component {

  onPress = (name, cardsCount, navigation) => navigation.navigate('Deck', { name, cardsCount })

  render() {
    const { name, cardsCount, navigation } = this.props;

    return (
      <TouchableOpacity 
        style={styles.listItem} 
        onPress={() => this.onPress(name, cardsCount, navigation)}
      >
        <Text>{name} - {cardsCount} cards</Text>
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

export default DeckListItem;