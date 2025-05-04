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
      <ScrollView>
        <FlatCards />
        <ScrollCards />
        <BigCard />
        <ActionCard />
        <PlaceList />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
