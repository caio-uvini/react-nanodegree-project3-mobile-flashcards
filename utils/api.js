import AsyncStorage from '@react-native-async-storage/async-storage';

const DECKS_STORAGE_KEY = 'mobile-flashcards:decks';

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(item => JSON.parse(item))
    .then(decks => {
      if (!decks) {
        return {}
      }

      return decks;
    });
}

export function addDeck(deckName) {
  
  const newDeck = {
    id: deckName,
    name: deckName,
    cards: []
  };

  getDecks()
    .then(decks => {
      const newDecks = {
        ...decks,
        [newDeck.id] : newDeck
      };

      return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDecks));
    });
}

export function addCardToDeck(deckId, question, answer) {

  const newCard = {
    question: question,
    answer: answer
  }

  getDecks()
    .then(decks => {
      if (!decks) {
        return;
      }

      const deck = decks[deckId];
      if (!deck) {
        return;
      }

      const newDecks = {
        ...decks,
        [deck.id]: {
          ...deck,
          cards: {
            ...deck.cards,
            [newCard.question]: newCard
          }
        }
      }

      return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDecks));
    })

}