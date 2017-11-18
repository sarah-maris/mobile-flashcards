import React, { Component } from 'react'
import { StyleSheet,
         View,
         Text,
         Dimensions,
         TouchableOpacity
       } from 'react-native'
import { connect } from 'react-redux'
import { dkgray, gray, green, ltgreen, orange, white } from '../utils/colors'

class DeckTile extends Component {
  static navigationOptions = ({navigation }) => {
    const { deck } = navigation.state.params
    return {title: `${deck.title} Quizzie`}
  }

  render() {
    console.log("props", this.props)
    const { deck } = this.props

    return (
      <View style={styles.container} >
        <View style={styles.deckTile}>
          <Text style={styles.deckTitle} >{deck.title}</Text>
          <Text style={styles.numCards}>
            {deck.questions.length} { deck.questions.length !== 1
              ? "cards"
              : "card"}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log("start quizzie")}>
          <View style={styles.startButton} >
            <Text style={styles.addTitle} >start quizzie</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("add new question")}>
          <View style={styles.addButton} >
            <Text style={styles.addTitle} >add new question</Text>
          </View>
        </TouchableOpacity>
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
    justifyContent: 'flex-start',
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
    paddingBottom: 10
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: orange,
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: 10,
    width: width,
  },
  addTitle: {
    color: white,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  startButton: {
    alignItems: 'center',
    backgroundColor: green,
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: 10,
    width: width,
  },
  numCards: {
    color: dkgray,
    fontSize: 18,
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
