export const STARTER_DECKS = {

    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        },
        {
          question: 'Are semicolons required?',
          answer: 'Yes, if you read the Udacity Nanodegree Style Guide. No, if you follow Tyler McGinnis.'
        },
        {
          question: 'Can jQuery methods be used with JavaScript selectors?',
          answer: 'No. Don\'t even think about it.'
        },
        {
          question: 'Does getElementsByClassName return an array?',
          answer: 'Sorta.  It is technically an array-like object. You can use a for loop to iterate over it, but not a forEach loop.'
        },
      ]
    },
    ReactNative: {
      title: 'React Native',
      questions: [
        {
          question: 'Is it possible to use React Native with Windows 10?',
          answer: 'Yes, but don\'t make any mistakes or you are screwed.'
        }
      ]
    }

}
