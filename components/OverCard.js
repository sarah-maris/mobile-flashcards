import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native'
import { green, magenta, orange, red, white } from '../utils/colors'

export default class OverCard extends Component {

  render() {

    const { gotItCount, nopeCount } = this.props

    const winPct =(gotItCount/(nopeCount + gotItCount)*100).toFixed()

    return (
      <View style={styles.overCard}>
        <Text style={styles.overText}>Quiz Over!</Text>
        <Text style={styles.correctText}>
          { gotItCount } correct
        </Text>
        <Text style={styles.wrongText}>
          { nopeCount } wrong
        </Text>
        <Text style={styles.pctText}>
          { winPct } %
        </Text>
      </View>
      )
    }
  }

  const width = Dimensions.get('window').width*0.8
  const styles = StyleSheet.create({

    overCard: {
      alignItems: 'center',
      backfaceVisibility: 'hidden',
      backgroundColor: white,
      borderRadius: 12,
      height: 250,
      justifyContent: 'center',
      width: width,
    },
    overText: {
      color: magenta,
      fontSize: 40,
      fontWeight: 'bold',
      padding: 10,
      textAlign: 'center',
    },
    correctText: {
      color: green,
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10,
      textAlign: 'center',
    },
    wrongText: {
      color: red,
      fontSize:20,
      fontWeight: 'bold',
      padding: 10,
      textAlign: 'center',
    },
    pctText: {
      color: orange,
      fontSize: 20,
      padding: 10,
      textAlign: 'center',
    },
});
