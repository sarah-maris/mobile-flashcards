import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet,
         View,
         Text,
         FlatList,
         Dimensions,
         TouchableOpacity
       } from 'react-native'
import { getAllDecks } from '../utils/api'
import { getDecks }  from '../actions'
import { dkgray, gray, ltgreen, orange, white } from '../utils/colors'

class QuizList extends Component {

  componentDidMount () {
    getAllDecks()
    .then((decks) =>  this.props.dispatch(getDecks(decks)))
  }

  renderTile = ({item}) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate(
        'DeckTile',
        { deck: item.deck, id: item.key }
    )}>
      <View style={styles.deckTile} >
        <Text style={styles.deckTitle} >{item.title}</Text>
        <Text style={styles.numCards}>
          {item.questions.length} { item.questions.length !== 1
          ? "cards"
          : "card"}
        </Text>
      </View>
    </TouchableOpacity>
  )

  render() {
    const { decks } = this.props

    // convert decks to array for FlatList
    const deckList = Object.keys(decks).map(function(deckId) {
      return { key: deckId,
               deck: decks[deckId],
               title: decks[deckId].title,
               questions: decks[deckId].questions
             }
    })

    return (
      <View style={styles.container}>
        {/* TODO:  Add new quizzie here */}
        <TouchableOpacity
          onPress={() => console.log("new quizzie")}>
          <View style={styles.addButton} >
            <Text style={styles.addTitle} >Add New Quizzie</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          data={deckList}
          renderItem={this.renderTile}
        />
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
    color: dkgray,
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  numCards: {
    color: dkgray,
    fontSize: 12,
    alignSelf: 'center',
  }
})

function mapStateToProps (decks) {
  return {
    decks
  }
}


export default connect(
  mapStateToProps,
)(QuizList)
