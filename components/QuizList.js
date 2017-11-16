import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import FlipCard from './FlipCard'
import { getDecks } from '../utils/api'
import { ltgreen } from '../utils/colors'

export default class QuizList extends Component {

  componentDidMount () {
    getDecks();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          List of Quizzes goes here
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ltgreen,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
