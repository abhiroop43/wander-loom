import React from 'react';
import { Dimensions, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../constants/theme';
import { Place } from '../../data';
import AppText from '../shared/AppText';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const PlaceDetails = ({ place }: { place: Place }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View>
        <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
          <Icon name={'chevron-back-outline'} type="ionicon" size={20} containerStyle={styles.goBackIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteButton}>
          <Icon
            name={place.isFavorite ? 'bookmark' : 'bookmark-outline'}
            type="ionicon"
            size={20}
            containerStyle={styles.favoriteIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Icon name={'share-outline'} type="ionicon" size={20} containerStyle={styles.shareIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={place.imageUrl} style={styles.image} resizeMode="cover" />
      </View>
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
    height: deviceHeight,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  imageContainer: {
    zIndex: -1,
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
  favoriteButton: {
    zIndex: 2,
  },
  favoriteIcon: {
    position: 'absolute',
    top: deviceHeight * 0.03,
    zIndex: 2,
    right: deviceWidth * 0.15,
    backgroundColor: theme.colors.white,
    color: theme.colors.text,
    borderRadius: 999,
    padding: 5,
  },
  shareButton: {
    zIndex: 2,
  },
  shareIcon: {
    position: 'absolute',
    top: deviceHeight * 0.03,
    right: deviceWidth * 0.05,
    backgroundColor: theme.colors.white,
    color: theme.colors.text,
    borderRadius: 999,
    padding: 5,
  },
  goBackButton: {
    zIndex: 2,
  },
  goBackIcon: {
    position: 'absolute',
    top: deviceHeight * 0.03,
    left: deviceWidth * 0.05,
    backgroundColor: theme.colors.white,
    color: theme.colors.text,
    borderRadius: 999,
    padding: 5,
  },
});

export default PlaceDetails;
