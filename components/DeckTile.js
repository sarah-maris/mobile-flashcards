import React, { Component } from 'react'
import {  Alert,
          Dimensions,
          StyleSheet,
          Text,
          TextInput,
          TouchableOpacity,
          View,
       } from 'react-native'
import { connect } from 'react-redux'
import { getDeck, addNewQuestion } from '../utils/api'
import { addQuestion }  from '../actions'
import { dkgray, gray, green, ltgreen, orange, white } from '../utils/colors'

class DeckTile extends Component {
  static navigationOptions = ({navigation }) => {
    const { deck } = navigation.state.params
    return {title: `${deck.title}`}
  }

  state = {
    showForm: false,
    question: '',
    answer: ''
  }

  updateQuestion = (question) => {
    this.setState({question: question})
  }
  updateAnswer = (answer) => {
    this.setState({answer: answer})
  }
  toggleForm = () =>{
    this.setState({showForm: !this.state.showForm})
  }

  submitNewQuestion = () => {
    const { deck } = this.props
    const question = this.state.question
    const answer = this.state.answer
    const deckId = this.props.id
    const newQuestion = {
      question: question,
      answer: answer
    }

    // alert user if input is empty
    if (question === "" || answer === '') {
      Alert.alert('Invalid input', 'Both a question and an answer are required')
    // add new question to state and AsyncStorage
    } else {
      this.props.dispatch(addQuestion(deckId, newQuestion))
      deck.questions.push(newQuestion)
      addNewQuestion(deckId, deck.questions)
      // close form and reset state
      this.toggleForm()
      this.setState({
        question: '',
        answer: ''
      })
    }
  }

  startQuiz = () => this.props.navigation.navigate(
    'Question',
    { questions: this.props.deck.questions,
      title: this.props.deck.title
    }
  )

  noQuestions = () => Alert.alert('This quizzie isn\'t ready', 'Add some questions first!')

  render() {
    const { deck } = this.props
    const { showForm } = this.state

    return (
      <View style={styles.container} >
        <View style={styles.deckTile}>
          <Text style={styles.deckTitle} >{deck.title}</Text>
          <Text style={styles.numCards}>
            {deck.questions.length} { deck.questions.length !== 1
              ? "quizzie questions"
              : "quizzie question"}
          </Text>
        </View>
        { !showForm &&
          <View>
          <TouchableOpacity
            onPress={ deck.questions.length > 0
               ? this.startQuiz
               : this.noQuestions
             }>
            <View style={styles.startButton} >
              <Text style={styles.addTitle} >start quizzie</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this.toggleForm()}>
            <View style={styles.addButton} >
              <Text style={styles.addTitle} >add new quizzie question</Text>
            </View>
          </TouchableOpacity>
        </View>
      }
        { showForm &&
         <View>
           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "question"
              onChangeText = {this.updateQuestion}
              multiline = {true}
              numberOfLines = {2}
            />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "answer"
               onChangeText = {this.updateAnswer}
               multiline = {true}
               numberOfLines = {4}
             />
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = { this.submitNewQuestion }
               >
               <Text style = {styles.submitButtonText}>add new quizzie question</Text>
            </TouchableOpacity>
         </View>}
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
    height: 200,
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
  input: {
     color: dkgray,
     backgroundColor: gray,
     borderRadius: 10,
     marginTop: 10,
     padding: 10,
     width: width
  },
  submitButton: {
     alignSelf: 'center',
     backgroundColor: green,
     borderRadius: 10,
     height: 40,
     marginTop: 10,
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
  const { deck, id } = navigation.state.params
  return { deck, id }
}

export default connect(
    mapStateToProps,
  )(DeckTile)
