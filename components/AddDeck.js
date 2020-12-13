import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import { connect } from 'react-redux';

import * as DeckActions from '../actions/deck';
import { addDeck } from '../utils/api';
import { white, purple, gray } from '../utils/colors';
import TextButton from './TextButton';



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
      }));
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

        <TextButton onPress={this.submitDeck} disabled={!this.isFormValid()}>
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
    backgroundColor: white,
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
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