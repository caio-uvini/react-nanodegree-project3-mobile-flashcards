const TYPES = {
  ADD_CARD: 'ADD_CARD'
};

function addCard(deckId, card) {
  return {
    type: TYPES.ADD_CARD,
    deckId: deckId,
    card: card
  };
}

export { TYPES, addCard };