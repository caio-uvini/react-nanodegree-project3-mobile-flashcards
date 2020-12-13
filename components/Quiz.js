import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import { connect } from 'react-redux';

import QuizStep from './QuizStep';
import QuizSummary from './QuizSummary';

class Quiz extends Component {

  constructor(props) {
    super(props);

    const cards = props.deck.cards;
    const currentCard = this.chooseRandomCard(cards);
    const pendingCards = cards.filter(card => card !== currentCard)

    this.state = {
      pendingCards: pendingCards,
      currentCard: currentCard,
      correctAnswers: 0
    };
  }

  chooseNextCardFromState = () => {
    this.setState((prevState) => {
      if (prevState.pendingCards.length === 0 && prevState.currentCard) {
        // last card has just been answered
        return {
          pendingCards: [],
          currentCard: null
        }
      }

      if (prevState.pendingCards.length === 0) {
        // quiz already finished
        return prevState;
      }

      // choose a new card and remove it from the pending ones
      const currentCard = this.chooseRandomCard(prevState.pendingCards);
      return {
        pendingCards: prevState.pendingCards.filter(card => card !== currentCard),
        currentCard: currentCard
      }
    });
  }

  chooseRandomCard = (cards) => {
    return cards[Math.floor(Math.random() * cards.length)];
  }

  handleAnswer = (isCorrect) => {
    if (isCorrect) {
      this.setState((prevState) => ({
        correctAnswers: prevState.correctAnswers + 1
      }));
    }

    this.chooseNextCardFromState();
  }

  restartQuiz = () => {
    const cards = this.props.deck.cards;
    const currentCard = this.chooseRandomCard(cards);
    const pendingCards = cards.filter(card => card !== currentCard)

    this.setState(() => ({
      pendingCards: pendingCards,
      currentCard: currentCard,
      correctAnswers: 0
    }));
  }

  goBack = () => {
    this.props.navigation.dispatch(
      CommonActions.goBack({
        key: 'Deck',
      }))
  }

  render() {

    const { currentCard, pendingCards, correctAnswers } = this.state;
    const { deck } = this.props;

    const totalCount = deck.cards.length;
    const currentCardCount = totalCount - pendingCards.length;

    return (
      <View>
        {
          currentCard
            ? <QuizStep
                cardId={currentCard}
                stepNumber={currentCardCount}
                stepsCount={totalCount}
                onAnswered={this.handleAnswer}
              />
            : <QuizSummary
                correctCount={correctAnswers}
                totalCount={totalCount}
                onRestart={this.restartQuiz}
                onGoBack={this.goBack}
              />
        }
      </View>
    );
  }
}

const mapStateToProps = (state, currentProps) => ({
  deck: state.decks.decksById[currentProps.route.params.deckId]
});

const mapDispatchToProps = () => ({});

const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);

export default QuizContainer;