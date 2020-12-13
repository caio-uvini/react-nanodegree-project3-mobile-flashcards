import * as DeckActions from '../actions/deck';
import * as CardActions from '../actions/card';

import { buildCardId } from '../utils/helper';

const initialState = {
  decksById: {}
};

const normalizeDeck = (deck) => {
  const cards = Object.keys(deck.cards).map(cardId => buildCardId(deck.id, cardId));
  return {
    id: deck.id,
    name: deck.name,
    cards: cards
  };
};

const handleReceiveDecks = (state, { decks }) => {
  const decksById = Object.keys(decks)
    .map(deckId => normalizeDeck(decks[deckId]))
    .reduce((acc, deck) => {
      acc[deck.id] = deck
      return acc;
    }, {});

  return {
    ...state,
    decksById: {
      ...state.decksById,
      ...decksById
    }
  };  
};

const handleAddDeck = (state, { deck }) => {
  const normalizedDeck = normalizeDeck(deck);
  return {
    ...state,
    decksById: {
      ...state.decksById,
      [normalizedDeck.id]: normalizedDeck
    }
  };
};

const handleAddCard = (state, { deckId, card }) => {
  const deck = state.decksById[deckId];
  return {
    ...state,
    decksById: {
      ...state.decksById,
      [deck.id]: {
        ...deck,
        cards: [
          ...deck.cards,
          buildCardId(deck.id, card.question)
        ]
      }
    }
  };
};

function decks(state = initialState, action) {
  switch (action.type) {
    case DeckActions.TYPES.RECEIVE_DECKS:
      return handleReceiveDecks(state, action);
    case DeckActions.TYPES.ADD_DECK:
      return handleAddDeck(state, action);
    case CardActions.TYPES.ADD_CARD:
      return handleAddCard(state, action);
    default:
      return state;
  }
}

export default decks;