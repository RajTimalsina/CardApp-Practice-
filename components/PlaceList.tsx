import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const placesInKathmandu = [
  {
    id: '1',
    name: 'Swayambhunath Stupa',
    location: 'Swayambhu',
    distanceFromKalanki: '3.5 km',
    image:
      'https://media.istockphoto.com/id/2072351595/photo/the-famous-swayambhunath-temple-in-kathmandu-also-known-as-the-monkey-temple.jpg?s=1024x1024&w=is&k=20&c=45tecW3lsthCwSZcMZPNaVphpfA6RSCVU2IdjwnLP_8=',
  },
  {
    id: '2',
    name: 'Pashupatinath Temple',
    location: 'Gaushala',
    distanceFromKalanki: '8.5 km',
    image:
      'https://images.unsplash.com/photo-1623492701902-47dc207df5dc?auto=format&q=80&fit=crop&w=800',
  },
  {
    id: '3',
    name: 'Boudhanath Stupa',
    location: 'Boudha',
    distanceFromKalanki: '10.5 km',
    image:
      'https://media.istockphoto.com/id/1038944394/photo/boudhanath-stupa-and-prayer-flags-in-kathmandu-nepal-buddhist-stupa-of-boudha-stupa-is-one-of.jpg?s=612x612&w=0&k=20&c=8Vz1Y68C_5rcD1KgCSaI9pMGk0O1kCTYtcIzCUA7CTc=',
  },
  {
    id: '4',
    name: 'Kathmandu Durbar Square',
    location: 'Basantapur',
    distanceFromKalanki: '6.0 km',
    image:
      'https://media.istockphoto.com/id/519624147/photo/kathmandu.jpg?s=612x612&w=0&k=20&c=-EkLH11s65SVPDMK4tYR5ecqeNMJLkEkOXeXWM8hjMU=',
  },
  {
    id: '5',
    name: 'Garden of Dreams',
    location: 'Kaiser Mahal, Thamel',
    distanceFromKalanki: '6.5 km',
    image:
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no9zm5c8StymjALSoivTstJKFJTpyf1hRDp_sgaqpSeUGuqRhWjULCjlwugFOh1kKMZB8C5Ks-YWUU0UaOMGCVgziLqTbDBKwvAs6MkQi2GLd0nJRsyqsb4AFEd8blhV-BetShQ=w270-h312-n-k-no',
  },
  {
    id: '6',
    name: 'Chandragiri Hills',
    location: 'Thankot',
    distanceFromKalanki: '7.0 km',
    image:
      'https://media.istockphoto.com/id/1196460157/photo/hindu-temple-on-the-chandragiri-hills.jpg?s=612x612&w=0&k=20&c=UEeAVYGZWm2w9ndR5Nlg-Va5fPb7hYGN0dS0qVpll7k=',
  },
];

export default function PlaceList() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Sites</Text>
      <View>
        <ScrollView style={styles.placeContainer}>
          {placesInKathmandu.map(item => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.placeTitle}>{item.name}</Text>
              <View style={styles.longLine} />
              <View style={styles.locationContainer}>
                <View style={styles.locationLeft}>
                  <Image source={{uri: item.image}} style={styles.placeImage} />
                </View>
                <View style={styles.locationRight}>
                  <Text style={styles.textLocation}>
                    Location:{item.location}
                  </Text>
                  <View style={styles.line} />
                  <Text style={styles.textLocation}>
                    Distance From Kalanki:{item.distanceFromKalanki}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  line: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  placeContainer: {
    paddingHorizontal: 10,
  },
  card: {
    marginBottom: 15,
    backgroundColor: '#FAFAD2',
    padding: 10,
    borderRadius: 10,
    elevation: 4,
  },
  placeTitle: {
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 16,
  },
  placeImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    elevation: 10,
  },
  locationContainer: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  locationLeft: {marginRight: 15},
  locationRight: {margin: 5},
  textLocation: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 2,
  },
  longLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
