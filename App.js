import React, { Component } from 'react'
import { View, Platform, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Constants } from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons';
import Question from './components/Question'
import QuizList from './components/QuizList'
import { green, magenta, orange, white } from './utils/colors'
import DeckTile from './components/DeckTile'
import { setLocalNotification } from './utils/notifications'

function FlashStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Quizzes: {
    screen: QuizList,
    navigationOptions: {
      tabBarLabel: 'Quizzies',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='question-circle' size={30} color={tintColor} />
    },
  },
  Question: {
    screen: Question,
    navigationOptions: {
      tabBarLabel: 'Question',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='question-circle' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? magenta : white,
    indicatorStyle: {
    height: 2,
    backgroundColor: green,
    },
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : magenta,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  QuizList: {
    screen: QuizList,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: magenta,
      }
    }
  },
  DeckTile: {
    screen: DeckTile,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: magenta,
      }
    }
  },
})

export default class App extends React.Component {
  componentDidMount() {
      setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <FlashStatusBar backgroundColor={green} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
