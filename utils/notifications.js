import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

const NOTIFICATION_KEY = 'mobile-flashcards:notifications';

export function clearLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification() {
  return {
    title: `Don't forget to study!`,
    body: "✍️  Keep strong! Complete some quizzes today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              /*
               * Note for the reviewer: In this version of expo, the option
               to pass a date as trigger with the option to repeat daily was removed.
               If I pass a date, the notification will be triggered only once.
               If I set it to repeat daily (like I did), there's no way to specificy a start date or an offset.

               In conclusion: using the current expo api, I couldn't find a way to skip the notification only
               for today if the user completed some quiz.
               */
              Notifications.scheduleNotificationAsync({
                content: createNotification(),
                trigger: {
                  hour: 15,
                  minute: 0,
                  repeats: true
                }
              })

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}