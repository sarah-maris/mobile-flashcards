import React, { Component } from 'react'
import { Dimensions,
         StyleSheet,
         Text,
         TouchableOpacity,
         View
       } from 'react-native'
import { connect } from 'react-redux'
import FlipCard from './FlipCard'
import { dkgray, gray, green, ltgreen, red, white } from '../utils/colors'

export default class Question extends Component {

  state = {
    currentIndex: 0,
    questions: this.props.navigation.state.params.questions,
    gotItCount: 0,
    nopeCount: 0
  }

  gotIt () {
    const nextIndex = this.state.currentIndex + 1
    const nextGotIt = this.state.gotItCount + 1
    if (nextIndex < this.state.questions.length )  {
      this.setState({
        currentIndex: nextIndex,
        gotItCount: nextGotIt
      })
    } else {
      this.setState({
        gotItCount: nextGotIt
      })
    }
  }

  nope () {
    const nextIndex = this.state.currentIndex + 1
    const nextNope = this.state.nopeCount + 1
    if (nextIndex < this.state.questions.length ) {
      this.setState({
        currentIndex: nextIndex,
        nopeCount: nextNope
      })
    } else {
      console.log("Quiz over!")
      this.setState({
          nopeCount: nextNope
      })
    }
  }

  render() {
    const { currentIndex, questions, gotItCount, nopeCount } = this.state
    const question =  (questions[currentIndex])
    const questionNum = currentIndex + 1
    const numQuestions = questions.length

    return (
      <View style={styles.container}>
        <View style={styles.questions}>
          <Text>{questionNum} of {numQuestions}</Text>
          <View style={styles.score}>
            <Text style={styles.gotItText}>{gotItCount}</Text>
            <Text> / </Text>
            <Text style={styles.nopeText}>{nopeCount}</Text>
          </View>
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
  questions:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: width
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  gotItText: {
    color: green
  },
  nopeText: {
    color: red
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
