import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import DeckListItem from './DeckListItem';

const ITEMS = [
  {
    id: 'deck1',
    name: 'deck1',
    cardsCount: 1
  }, {
    id: 'deck2',
    name: 'deck2',
    cardsCount: 2
  }, {
    id: 'deck3',
    name: 'deck3',
    cardsCount: 3
  }, {
    id: 'deck4',
    name: 'deck4',
    cardsCount: 4
  }, {
    id: 'deck5',
    name: 'deck5',
    cardsCount: 5
  }, {
    id: 'deck6',
    name: 'deck6',
    cardsCount: 6
  }, {
    id: 'deck7',
    name: 'deck7',
    cardsCount: 7
  }, {
    id: 'deck8',
    name: 'deck8',
    cardsCount: 8
  }, {
    id: 'deck9',
    name: 'deck9',
    cardsCount: 9
  }, {
    id: 'deck10',
    name: 'deck10',
    cardsCount: 10
  }
];

class DeckList extends Component {

  renderItem = (item, navigation) => {
    return (<DeckListItem name={item.name} cardsCount={item.cardsCount} navigation={navigation} />)
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>DeckList</Text>
        <FlatList
          data={ITEMS}
          renderItem={({ item }) => this.renderItem(item, navigation)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default DeckList;