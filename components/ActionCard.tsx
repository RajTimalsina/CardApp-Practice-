import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={styles.card}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's more in Kathmandu</Text>
        </View>
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrdwlU1rvGha9AjDjp5rASx0QCDnyzyPx9lmcN0GuQbxbozraDMq5wWpC41QQKyTLlOYKA0xommUx-V3cGcaKljdTcLif2Rv_lVpvyeAf6ZKosM0iQkkz2P1OnB9K-S1XmGnrW52w=w891-h515-n-k-no',
          }}
          style={styles.cardImage}
        />
        <View style={styles.subCardBody}>
          <View style={styles.bodyContainer}>
            <Text numberOfLines={2}>
              Kathmandu offers rich cultural experiences at places like
              Boudhanath Stupa, Swayambhunath (Monkey Temple), and the historic
              Durbar Squares. You can also explore serene spots like Garden of
              Dreams and the vibrant streets of Thamel.
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <View style={styles.cardButton}>
              <TouchableOpacity
                onPress={() => {
                  openWebsite(
                    'https://fulltimeexplorer.com/places-to-visit-in-kathmandu-things-to-do/',
                  );
                }}>
                <Text style={{color: '#2F4F4F'}}>Read More</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardButton}>
              <TouchableOpacity
                onPress={() => {
                  openWebsite('https://www.instagram.com/_rajtimalsina/');
                }}>
                <Text style={{color: '#2F4F4F'}}>Follow me</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 15},
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {},
  headingContainer: {
    marginTop: 5,
    backgroundColor: '#FAFAD2',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 5,
  },
  headerText: {
    color: '#2F4F4F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardImage: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  bodyContainer: {marginTop: 5, marginBottom: 5},
  footerContainer: {
    flex: 1,
    flexDirection: 'row',

    marginTop: 4,
  },
  subCardBody: {
    backgroundColor: '#FAFAD2',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 5,
  },
  cardButton: {
    padding: 5,
    backgroundColor: '#87CEEB',
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
});
