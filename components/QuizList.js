import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  Alert,
          Dimensions,
          FlatList,
          StyleSheet,
          Text,
          TextInput,
          TouchableOpacity,
          View,
       } from 'react-native'
import { getAllDecks, addNewDeck } from '../utils/api'
import { getDecks, addDeck }  from '../actions'
import { dkgray, gray, green, ltgreen, orange, white } from '../utils/colors'

class QuizList extends Component {
  state = {
    showForm: false,
    deckTitle: ''
  }

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
          ? "quizzie questions"
          : "quizzie question"}
        </Text>
      </View>
    </TouchableOpacity>
  )

  updateTitle = (text) => {
    this.setState({ deckTitle: text })
  }

  toggleForm = () =>{
    this.setState({showForm: !this.state.showForm})
  }

  submitNewDeck = () => {

    const newDeckTitle = this.state.deckTitle
    const newDeck = {
      title: newDeckTitle,
      questions: []
    }

    // alert user if input is empty
    if (newDeckTitle === "") {
      Alert.alert('Invalid input', 'New quizzie title must not be blank')
    // add new deck to state and Async storage
    } else {
      this.props.dispatch(addDeck(newDeckTitle))
      addNewDeck(newDeckTitle)
      // close form and reset state
      this.toggleForm()
      this.setState({deckTitle: ''})
      // open up new deck
      this.props.navigation.navigate(
        'DeckTile',
        { deck: newDeck, id: newDeckTitle }
      )
    }
  }

  render() {
    const { decks } = this.props
    const { showForm } = this.state

    // convert decks object to array for FlatList
    const deckList = Object.keys(decks).map(function(deckId) {
      return { key: deckId,
               deck: decks[deckId],
               title: decks[deckId].title,
               questions: decks[deckId].questions
             }
    })

    return (
      <View style={styles.container}>
        { !showForm &&
          <TouchableOpacity
            onPress={() => this.toggleForm()}>
            <View style={styles.addButton} >
              <Text style={styles.addTitle} >add new quizzie</Text>
            </View>
          </TouchableOpacity>
        }
        { showForm &&
         <View>
           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "new quizzie title"
              onChangeText = {this.updateTitle}/>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = { this.submitNewDeck }
               >
               <Text style = {styles.submitButtonText}>add new quizzie</Text>
            </TouchableOpacity>
         </View>}
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
  input: {
     color: dkgray,
     backgroundColor: gray,
     borderRadius: 10,
     height: 40,
     margin: 10,
     padding: 10,
     width: 200
  },
  submitButton: {
     alignSelf: 'center',
     backgroundColor: green,
     borderRadius: 10,
     height: 40,
     marginBottom: 10,
     padding: 10,
  },
  submitButtonText:{
   color: 'white',
   fontWeight: 'bold'
 },
  addButton: {
    alignItems: 'center',
    backgroundColor: orange,
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
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
    marginBottom: 10,
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
