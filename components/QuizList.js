import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import DeckTile from './DeckTile'
import { getAllDecks } from '../utils/api'
import { getDecks }  from '../actions'
import { ltgreen } from '../utils/colors'

class QuizList extends Component {

  componentDidMount () {
    getAllDecks()
    .then((decks) =>  this.props.dispatch(getDecks(decks)))
  }

  render() {
    const { decks } = this.props

    return (
      <View style={styles.container}>
        {Object.keys(decks).map((deckId) => (
          <DeckTile key={deckId} deck={decks[deckId]} />
        ))}
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
