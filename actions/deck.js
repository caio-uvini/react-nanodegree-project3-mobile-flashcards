const TYPES = {
  RECEIVE_DECKS: 'RECEIVE_DECKS',
  ADD_DECK: 'ADD_DECK'
};

function receiveDecks(decks) {
  return {
    type: TYPES.RECEIVE_DECKS,
    decks: decks
  };
}

function addDeck(deck) {
  return {
    type: TYPES.ADD_DECK,
    deck: deck
  };
}

export { TYPES, receiveDecks, addDeck };