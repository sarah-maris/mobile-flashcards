import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import FlipCard from './FlipCard'
import { ltgreen } from '../utils/colors'

export default class Question extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlipCard />
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
