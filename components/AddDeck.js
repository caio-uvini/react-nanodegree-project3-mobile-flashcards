import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { connect } from 'react-redux';
import * as DeckActions from '../actions/deck';

import { addDeck } from '../utils/api';

import { CommonActions } from '@react-navigation/native';

class AddDeck extends Component {

  state = {
    name: ''
  }

  onNameChange = (text) => {
    this.setState(() => ({
      name: text
    }));
  }

  submitDeck = () => {
    addDeck(this.state.name)
      .then(deck => this.props.onAddDeck(deck))
      .then(() => this.goToHome())
      .then(() => this.onNameChange(''));
  }

  goToHome = () => {
    this.props.navigation.dispatch(
      CommonActions.goBack({
        key: 'AddDeck',
      }))
  }

  isFormValid = () => {
    return this.state.name.trim();
  }

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          onChangeText={this.onNameChange}
          placeholder={'Deck Name'}
          value={this.state.name}
        />

        <TouchableOpacity
          onPress={this.submitDeck}
          disabled={!this.isFormValid()}
        >
          <Text>Sumit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  onAddDeck: (deck) => dispatch(DeckActions.addDeck(deck))
})

const AddDeckContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeck);

export default AddDeckContainer;