import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';

import * as DeckActions from '../actions/deck';

import DeckListItem from './DeckListItem';
import { getDecks } from '../utils/api';

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

  state = {
    ready: false
  }

  fetchDecks = () => {
    return getDecks()
      .then(decks => this.props.onDecksReceived(decks))
  }

  onFinishFetch = () => {
    this.setState(() => ({
      ready: true
    }))
  }

  renderItem = (item, navigation) => {
    return (<DeckListItem name={item.name} cardsCount={item.cardsCount} navigation={navigation} />)
  }

  render() {
    const { navigation } = this.props;
    const { ready } = this.state;
    
    if (ready === false) {
      return <AppLoading 
        startAsync={this.fetchDecks}
        onFinish={this.onFinishFetch}
        onError={err => console.error(err)}
      />
    }

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

const mapStateToProps = (state) => ({
  decks: Object.values(state.decks.decksById)
});

const mapDispatchToProps = (dispatch) => ({
  onDecksReceived: (decks) => dispatch(DeckActions.receiveDecks(decks))
});

const DeckListContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(DeckList);

export default DeckListContainer;