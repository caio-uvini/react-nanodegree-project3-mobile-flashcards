# Mobile Flashcards Project

This is the code for the final assessment project for Udacity's React Native course.

This project consists of a mobile application that aims to help people study through the use of flashcards. One can create decks to organize the study subjects, and at each deck, add cards representing questions and answers.
At any time, the user can start a quiz inside a given deck. The app randomly picks cards of the deck and ask questions, helping the user to memorize the answers and evaluate how well he's going at his study session!

## Development

* To install all dependencies: `yarn install`
* To run the development server: `expo start --ios`

**NOTE: The project was developed and tested in the iOS Simulator and in a real iOS Device. No tests were performed in Android Emulator/Device.**

## Tecnologies involved

This application uses `React Native` to build the views and navigation, `AsyncStorage` to persist state through different sessions and `Redux` as a layer of state management between the storage and the application.
