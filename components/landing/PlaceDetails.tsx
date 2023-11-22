import React from 'react';
import { Dimensions, View, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../constants/theme';
import { Place } from '../../data';
import AppText from '../shared/AppText';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const PlaceDetails = ({ place }: { place: Place }) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      {/* <AppHeader title={place.name} /> */}
      <Image source={place.imageUrl} style={styles.image} resizeMode="cover" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.placeName}>{place.name}</AppText>
          <AppText style={styles.placeLocation}>{place.country}</AppText>
          <AppText style={styles.placeDescription}>{place.description}</AppText>
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
    height: 300, // Adjust the height as needed
    width: '100%',
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.white,
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
