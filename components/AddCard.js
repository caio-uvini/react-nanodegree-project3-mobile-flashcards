import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { connect } from 'react-redux';

import { CommonActions } from '@react-navigation/native';

class AddCard extends Component {

  state = {
    question: '',
    answer: ''
  }

  onTextChange = (text, fieldName) => {
    this.setState(() => ({
      [fieldName]: text
    }));
  }

  submitCard = () => {
    // TODO: actually create a new card
    this.goToHome();
  }

  goToHome = () => {
    this.props.navigation.dispatch(
      CommonActions.goBack({
        key: 'AddCard',
      }))
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

    const { question, answer } = this.state;

    return (
      <View>
        <TextInput
          onChangeText={text => this.onTextChange(text, 'question')}
          placeholder={'Question'}
          value={question}
        />

        <TextInput
          onChangeText={text => this.onTextChange(text, 'answer')}
          placeholder={'Answer'}
          value={answer}
        />

        <TouchableOpacity
          onPress={this.submitCard}
          disabled={!this.isFormValid()}
        >
          <Text>Sumit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

const AddCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard);

export default AddCardContainer;