import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native'
import { dkgray, white, gray,  magenta } from '../utils/colors'

export default class FlipCard extends Component {

  state = {
    flipAnim: new Animated.Value(0),
    showAnswer: false
  }

  componentWillMount() {
    this.value = 0;
    this.state.flipAnim.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.state.flipAnim.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.state.flipAnim.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
    this.frontOpacity = this.state.flipAnim.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })
    this.backOpacity = this.state.flipAnim.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    })
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.state.flipAnim,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start()
    } else {
      Animated.spring(this.state.flipAnim,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start()
    }
    this.setState({showAnswer: !this.state.showAnswer})
  }

  render() {

    const { question } = this.props
    const { showAnswer } = this.state

    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate},
      ],
      opacity: this.frontOpacity
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ],
      opacity: this.backOpacity
    }

    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text style={styles.flipText}>
              { question.question }
            </Text>
          </Animated.View>
          <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
            <Text style={styles.flipText}>
              { question.answer }
            </Text>
          </Animated.View>
        </View>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <Text style={styles.flipTrigger}>
            { showAnswer ? 'question' : 'answer'}
          </Text>
        </TouchableOpacity>
      </View>
      )
    }
  }

  const width = Dimensions.get('window').width*0.8
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
    button: {
      backgroundColor: dkgray,
      borderRadius: 12,
      color: white,
      marginTop: 20,
      padding: 5,
      textAlign: 'center',
      width: 100,
    },
    flipCard: {
      alignItems: 'center',
      backfaceVisibility: 'hidden',
      backgroundColor: '#fff',
      borderRadius: 12,
      height: 200,
      justifyContent: 'center',
      width: width,
    },
    flipCardBack: {
      backgroundColor: gray,
      borderRadius: 12,
      position: 'absolute',
      top: 0
    },
    flipText: {
      color: dkgray,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',

    },
    flipTrigger: {
      color: magenta,
      fontSize: 18,
      textAlign: 'center',
      width: 100,
    }
});
