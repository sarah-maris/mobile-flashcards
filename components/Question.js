import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FlipCard from './FlipCard'
import { dkgray, gray, green, ltgreen, red, white } from '../utils/colors'

export default class Question extends Component {

  state = {
    currentIndex: 0,
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
  }

  gotIt () {
    console.log("got it!")
    const nextIndex = this.state.currentIndex + 1
    if (nextIndex < this.state.questions.length ) {
          this.setState({ currentIndex: nextIndex })
    } else {
      console.log("Quiz over!")
    }
  }

  nope () {
    console.log("nope")
    const nextIndex = this.state.currentIndex + 1
    if (nextIndex < this.state.questions.length ) {
          this.setState({ currentIndex: nextIndex })
    } else {
      console.log("Quiz over!")
    }
  }

  render() {
    const { currentIndex, questions } = this.state
    console.log(this.state)

    const question =  (questions[currentIndex])

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
          onPress={ this.gotIt.bind(this) }>
          <View style={styles.greenButton} >
            <Text style={styles.addTitle} >got it!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={ this.nope.bind(this) }>
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
