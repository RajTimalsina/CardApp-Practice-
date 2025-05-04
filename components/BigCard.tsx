import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function BigCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>

      <View style={styles.placeCardContainer}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1623492701902-47dc207df5dc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2F0aG1hbmR1fGVufDB8fDB8fHww',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Pashupatinath Temple</Text>
          <Text style={styles.cardLabel}>City of temples, Kathmandu</Text>
          <Text style={styles.cardDescription}>
            Pashupatinath Temple is a famous Hindu shrine in Kathmandu, Nepal.
            It’s dedicated to Lord Shiva and is a UNESCO World Heritage Site.
          </Text>
          <Text style={styles.cardFooter}>10km away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  placeCardContainer: {
    backgroundColor: '#FAFAD2',
    borderRadius: 5,
    elevation: 4,

    marginHorizontal: 5,
    marginBottom: 10,
  },

  cardImage: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  cardBody: {
    padding: 10,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  cardLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  cardDescription: {
    fontSize: 13,
    marginBottom: 10,
  },

  cardFooter: {
    fontSize: 13,
    color: 'blue',
  },
});
