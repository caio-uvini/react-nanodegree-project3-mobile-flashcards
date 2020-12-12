import * as CardActions from '../actions/card';
import * as DeckActions from '../actions/deck';

import { buildCardId } from '../utils/helper';

const initialState = {
  cardsById: {}
}

const handleAddCard = (state, { deckId, card }) => {
  return {
    ...state,
    cardsById: {
      ...state.cardsById,
      [buildCardId(deckId, card.question)]: {
        deck: deckId,
        ...card
      }
    }
  };
}

const handleReceiveDecks = (state, { decks }) => {
  const cardsById = Object.keys(decks)
    .map(deckId => buildCardsById(decks[deckId]))
    .reduce((acc, deckCardsById) => {
      return {
        ...acc,
        ...deckCardsById
      }
    });
  
  return {
    ...state,
    cardsById: {
      ...state.cardsById,
      ...cardsById
    }
  };
}

const buildCardsById = (deck) => {
  return Object.keys(deck.cards)
    .map(cardQuestion => {
      const card = deck.cards[cardQuestion];
      return {
        deck: deck.id,
        question: card.question,
        answer: card.answer
      };
    })
    .reduce((acc, card) => {
      const cardId = buildCardId(card.deck, card.question);
      acc[cardId] = card;
      return acc;
    });
}

function cards(state = initialState, action) {
  switch (action.type) {
    case CardActions.TYPES.ADD_CARD:
      return handleAddCard(state, action);
    case DeckActions.TYPES.RECEIVE_DECKS:
      return handleReceiveDecks(state, action);
    default:
      return state;
  }
}

export default cards;