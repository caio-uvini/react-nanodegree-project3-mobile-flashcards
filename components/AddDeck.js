import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

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
    // TODO: actually create a new deck
    this.goToHome();
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

export default AddDeck;