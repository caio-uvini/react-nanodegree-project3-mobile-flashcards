import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { connect } from 'react-redux';

import { CommonActions } from '@react-navigation/native';

import { addCardToDeck } from '../utils/api';
import * as CardActions from '../actions/card';
import TextInput from './TextInput';
import TextButton from './TextButton';
import { red } from '../utils/colors';

const MAX_TEXT_SIZE = 160;

class AddCard extends Component {

  state = {
    question: '',
    answer: '',
    questionAlertMsg: '',
    answerAlertMsg: ''
  }

  onTextChange = (text, fieldName) => {

    if (text.length > MAX_TEXT_SIZE) {
      this.setState(() => ({
        [`${fieldName}AlertMsg`]: `Please do not exceed ${MAX_TEXT_SIZE} characters.`
      }))
      return;
    }

    this.setState(() => ({
      [fieldName]: text,
      [`${fieldName}AlertMsg`]: ''
    }));
  }

  submitCard = () => {
    const deckId = this.props.route.params.deckId;
    const { question, answer } = this.state;

    addCardToDeck(deckId, question, answer)
      .then(card => this.props.onAddCard(deckId, card))
      .then(() => this.goToHome());
  }

  goToHome = () => {
    this.props.navigation.dispatch(
      CommonActions.goBack({
        key: 'AddCard',
      }));
  }

  isFormValid = () => {
    const { question, answer } = this.state;

    if (!question.trim()) {
      return false;
    }

    if (!answer.trim()) {
      return false;
    }

    return true;
  }

  render() {

    const { question, answer, questionAlertMsg, answerAlertMsg } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.onTextChange(text, 'question')}
          placeholder={'Question'}
          value={question}
          style={styles.input}
        />
        <Text style={styles.alert}>{questionAlertMsg}</Text>

        <TextInput
          onChangeText={text => this.onTextChange(text, 'answer')}
          placeholder={'Answer'}
          value={answer}
          style={styles.input}
        />
        <Text style={styles.alert}>{answerAlertMsg}</Text>

        <TextButton
          onPress={this.submitCard}
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
  input: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
  },
  alert: {
    marginLeft: 10,
    color: red,
    fontSize: 10
  }
});

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onAddCard: (deckId, card) => dispatch(CardActions.addCard(deckId, card))
});

const AddCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);

export default AddCardContainer;