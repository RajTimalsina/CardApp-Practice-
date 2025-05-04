import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
export default function FlatCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.flatContainer}>
        <View style={[styles.flatCard, styles.redCard]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.flatCard, styles.greenCard]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.flatCard, styles.blueCard]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.flatCard, styles.yellowCard]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  flatContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  flatCard: {
    flex: 1,
    height: 100,
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  redCard: {
    backgroundColor: '#F08080',
  },
  greenCard: {
    backgroundColor: '#A8D5BA',
  },
  yellowCard: {
    backgroundColor: '#FAF3A0',
  },
  blueCard: {
    backgroundColor: '#ADD8E6',
  },
});

// const styles = StyleSheet.create({})
