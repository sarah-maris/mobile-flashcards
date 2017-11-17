import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { gray, ltgreen, dkgray } from '../utils/colors'

class DeckTile extends Component {

  render() {
    console.log("props", this.props)
    const { deck } = this.props

    return (
      <View style={styles.deckTile} >
        <Text style={styles.deckTitle} >{deck.title}</Text>
        <Text style={styles.numCards}>
          {deck.questions.length} { deck.questions.length !== 1
            ? "cards"
            : "card"}
        </Text>
      </View>
    )
  }
}

const width = Dimensions.get('window').width * 0.8

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ltgreen,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  deckTile: {
    alignItems: 'center',
    backgroundColor: gray,
    borderRadius: 12,
    height: 100,
    justifyContent: 'center',
    marginTop: 10,
    width: width,
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  numCards: {
    color: dkgray,
    fontSize: 12,
  }
})

function mapStateToProps (state, { navigation }) {
  console.log( navigation)
  const { deck } = navigation.state.params

  return {
    deck
  }
}

export default connect(
    mapStateToProps,
  )(DeckTile)
