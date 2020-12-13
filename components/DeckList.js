import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';

import * as DeckActions from '../actions/deck';

import DeckListItem from './DeckListItem';
import { getDecks } from '../utils/api';

class DeckList extends Component {

  state = {
    ready: false
  }

  fetchDecks = () => {
    return getDecks()
      .then(decks => this.props.onDecksReceived(decks));
  }

  onFinishFetch = () => {
    this.setState(() => ({
      ready: true
    }));
  }

  renderItem = (item, navigation) => {
    return (<DeckListItem deckId={item.id} navigation={navigation} />);
  }

  render() {
    const { decks, navigation } = this.props;
    const { ready } = this.state;
    
    if (ready === false) {
      return (
        <AppLoading
          startAsync={this.fetchDecks}
          onFinish={this.onFinishFetch}
          onError={err => console.error(err)}
        />
      );
    }

    if (decks.length == 0) {
      return (
        <View>
          <Text>You don't have any deck yet! Add some and start studying!</Text>
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={decks}
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