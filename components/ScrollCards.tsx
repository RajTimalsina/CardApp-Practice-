import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
const screenHeight = Dimensions.get('window').height;
export default function ScrollCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Scroll Cards</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
          <View style={[styles.flatCard, styles.yellowCard]}>
            <Text>Yellow</Text>
          </View>
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
          <View style={[styles.flatCard, styles.yellowCard]}>
            <Text>Yellow</Text>
          </View>
        </View>
      </ScrollView>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  flatCard: {
    width: 100,
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
