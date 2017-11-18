import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FlipCard from './FlipCard'
import { dkgray, gray, green, ltgreen, red, white } from '../utils/colors'

export default class Question extends Component {


  render() {
    const question =  {
      question: 'What is a closure?',
      answer: 'The combination of a function and the lexical environment within which that function was declared.'
    }


    return (
      <View style={styles.container}>
        <View style={styles.questions}>
        <Text>
          2 of 2
        </Text>
      </View>
      <FlipCard question={question}/>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => console.log("got it")}>
          <View style={styles.greenButton} >
            <Text style={styles.addTitle} >got it!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("nope")}>
          <View style={styles.redButton} >
            <Text style={styles.addTitle} >nope</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'center',
  },
  questions :{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    width: width
  },
  deckTile: {
    alignItems: 'center',
    backgroundColor: gray,
    borderRadius: 12,
    height: 300,
    justifyContent: 'center',
    marginTop: 10,
    width: width,
  },
  deckTitle: {
    color: dkgray,
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    height: 100
  },
  greenButton: {
    alignItems: 'center',
    backgroundColor: green,
    borderRadius: 12,
    justifyContent: 'center',
    margin: 10,
    width: width * .4
  },
  redButton: {
    alignItems: 'center',
    backgroundColor: red,
    borderRadius: 12,
    justifyContent: 'center',
    margin: 10,
    width: width * .4
  },
  addTitle: {
    color: white,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  green: {
    backgroundColor: green
  },
  numCards: {
    color: dkgray,
    fontSize: 18,
  }
})
