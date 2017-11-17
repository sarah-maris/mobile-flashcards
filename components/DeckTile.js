import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { gray } from '../utils/colors'

export default class DeckTile extends Component {

  render() {
    const { deck } = this.props

    return (
      <View style={styles.container}>
           <Text>{deck.title}</Text>
          <Text>{deck.questions.length} {
            deck.questions.length !== 1? "cards" : "card"}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
