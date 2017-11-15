import React from 'react';
import { StyleSheet, View } from 'react-native';
import FlipCard from './components/FlipCard'
import { ltgreen } from './utils/colors'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlipCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ltgreen,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
