import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import FlipCard from './FlipCard'
import { getAllDecks } from '../utils/api'
import { getDecks }  from '../actions'
import { ltgreen } from '../utils/colors'

class QuizList extends Component {

  componentDidMount () {
    const { dispatch } = this.props
    getAllDecks()
    .then((decks) =>  dispatch(getDecks(decks)))
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

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
)(QuizList)
