import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { addDeck } from '../actions'
import { dkgray, gray, green, ltgreen, orange, red, white } from '../utils/colors'

class AddDeckForm extends Component {
   state = {
      deckTitle: ''
   }

   updateTitle = (text) => {
     this.setState({ deckTitle: text })
   }

   submit = () => {
     this.props.dispatch(addDeck(this.state.deckTitle))
   }
   render(){
      return (

         <View style = {styles.container}>

           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "quizzie title"
              onChangeText = {this.updateTitle}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                this.submit
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default connect()(AddDeckForm)

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
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
      backgroundColor: orange,
      borderRadius: 10,
      height: 40,
      padding: 10,
   },
   submitButtonText:{
    color: 'white',
    fontWeight: 'bold'
   }
})
