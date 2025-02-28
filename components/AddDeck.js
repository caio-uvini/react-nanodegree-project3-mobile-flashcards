import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import { connect } from 'react-redux';

import * as DeckActions from '../actions/deck';
import { addDeck } from '../utils/api';
import TextButton from './TextButton';
import TextInput from './TextInput';



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
      .then(deck => {
        this.props.onAddDeck(deck);
        return deck;
      })
      .then(this.goToDeckView)
      .then(() => this.onNameChange(''));
  }

  goToDeckView = (deck) => {
    this.props.navigation.navigate('Deck', { id: deck.id, name: deck.name });
  }

  isFormValid = () => {
    return this.state.name.trim();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          onChangeText={this.onNameChange}
          placeholder={'Deck Title'}
          value={this.state.name}
          style={styles.input}
        />

        <TextButton
          onPress={this.submitDeck}
          disabled={!this.isFormValid()}
          style={styles.button}
        >
          Submit
        </TextButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
  }
});

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  onAddDeck: (deck) => dispatch(DeckActions.addDeck(deck))
});

const AddDeckContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeck);

export default AddDeckContainer;