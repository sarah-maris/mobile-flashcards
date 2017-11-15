import React from 'react';
import { StyleSheet, View } from 'react-native';
import Question from './components/Question'
import { ltgreen } from './utils/colors'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Question />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
