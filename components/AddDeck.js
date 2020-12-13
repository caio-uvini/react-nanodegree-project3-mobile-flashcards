import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import { connect } from 'react-redux';

import * as DeckActions from '../actions/deck';
import { addDeck } from '../utils/api';
import { white, purple, gray } from '../utils/colors';



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
    const formValid = this.isFormValid();

    const buttonStyles = formValid
      ? styles.submitBtn
      : [styles.submitBtn, styles.submitBtnDisabled]

    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          onChangeText={this.onNameChange}
          placeholder={'Deck Title'}
          value={this.state.name}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={this.submitDeck}
          disabled={!formValid}
          style={buttonStyles}
        >
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
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
  submitBtn: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 90,
    height: 35,
    backgroundColor: purple,
    borderRadius: 7,
    marginTop: 20,
  },
  submitBtnDisabled: {
    backgroundColor: gray,
  },
  submitBtnText: {
    textAlign: 'center',
    color: white,
    fontSize: 18
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