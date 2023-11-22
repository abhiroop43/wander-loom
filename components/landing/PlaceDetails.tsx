import React from 'react';
import { Dimensions, View, StyleSheet, Text, Image, ScrollView } from 'react-native';
// import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../constants/theme';
import AppHeader from '../shared/AppHeader';
import { Place } from '../../data';

// type RootStackParamList = {
//   DetailScreen: { place: Place };
// };

// type DetailScreenRouteProp = RouteProp<RootStackParamList, 'DetailScreen'>;

// type DetailScreenProps = {
//   route: DetailScreenRouteProp;
// };
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const PlaceDetails = ({ place }: { place: Place }) => {
  // const { place } = route.params;

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader title={place.name} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={place.imageUrl} style={styles.image} resizeMode="cover" />
        <View style={styles.detailsContainer}>
          <Text style={styles.placeName}>{place.name}</Text>
          <Text style={styles.placeLocation}>{place.country}</Text>
          <Text style={styles.placeDescription}>{place.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.bg100,
    height: deviceHeight * 0.85,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  image: {
    height: 200, // Adjust the height as needed
    width: '100%',
  },
  detailsContainer: {
    padding: 20,
  },
  placeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: theme.colors.text,
  },
  placeLocation: {
    fontSize: 18,
    color: theme.colors.text,
    marginBottom: 12,
  },
  placeDescription: {
    fontSize: 16,
    color: theme.colors.text,
  },
});

export default PlaceDetails;
