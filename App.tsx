import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import FlatCards from './components/FlatCards';
import ScrollCards from './components/ScrollCards';
import BigCard from './components/BigCard';
import ActionCard from './components/ActionCard';
import PlaceList from './components/PlaceList';

function App() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <FlatCards />
        <ScrollCards />
        <BigCard />
        <ActionCard />
        <PlaceList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
export default App;
