import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DeckListItem = ({ name, cardsCount, navigation }) => {

  const onPress = () => navigation.navigate('Deck', { name, cardsCount })

  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <Text>{name} - {cardsCount} cards</Text>
    </TouchableOpacity>
  );
}

class DeckList extends Component {

  render() {
    return (
      <View>
        <Text>DeckList</Text>

        <DeckListItem
          style={styles.listItem}
          name={'Deck1'}
          cardsCount={1}
          navigation={this.props.navigation}
        />

        <DeckListItem
          style={styles.listItem}
          name={'Deck2'}
          cardsCount={2}
          navigation={this.props.navigation}
        />

        <DeckListItem
          style={styles.listItem}
          name={'Deck3'}
          cardsCount={3}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    margin: 2,
    borderWidth: 2
  }
});

export default DeckList;