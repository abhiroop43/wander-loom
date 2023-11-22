import React, { useState } from 'react';
import { Dimensions, View, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/shared/AppHeader';
import { theme } from '../constants/theme';
import SearchField from '../components/landing/SearchField';
import QuickFilterButton from '../components/landing/QuickFilterButton';
import PlacesCarousel from '../components/landing/PlacesCarousel';
import PlacesList from '../components/shared/PlacesList';
import AppText from '../components/shared/AppText';
import { Link } from '@react-navigation/native';
import { Place } from '../data';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const LandingScreen = ({ navigation }: any) => {
  const [searchFilterVisible, setSearchFilterVisible] = useState<boolean>(true);
  const [quickFilter, setQuickFilter] = useState('');

  const onClickPlace = (place: Place) => {
    navigation.navigate('DetailsScreen', { place: place });
  };

  const onFilterPress = () => {
    setSearchFilterVisible(!searchFilterVisible);
  };
  return (
    // <KeyboardAvoidingView
    //   behavior="padding"
    //   style={{ flex: 1 }}
    //   keyboardVerticalOffset={Platform.OS === 'ios' ? -350 : -100}
    // >
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <AppHeader title="Explore" onBackPress={() => {}} onFilterPress={onFilterPress} />
      </View>
      {searchFilterVisible && (
        <View style={styles.searchContainer}>
          <SearchField />
        </View>
      )}
      <View style={styles.quickFilterContainer}>
        <QuickFilterButton
          title="Places"
          filterParam="places"
          selected={quickFilter === 'places'}
          onClick={() => {
            setQuickFilter('places');
          }}
        />
        <QuickFilterButton
          title="Tour"
          filterParam="tour"
          selected={quickFilter === 'tour'}
          onClick={() => {
            setQuickFilter('tour');
          }}
        />
        <QuickFilterButton
          title="Adventure"
          filterParam="adventure"
          selected={quickFilter === 'adventure'}
          onClick={() => {
            setQuickFilter('adventure');
          }}
        />
      </View>
      <View style={styles.filteredItemsContainer}>
        <PlacesCarousel />
      </View>
      <View style={{ top: deviceHeight * 0.32 }}>
        <View style={styles.favoritePlacesContainer}>
          <View style={styles.favoritePlacesTitleContainer}>
            <AppText style={styles.favoritePlacesHeader}>Popular</AppText>
            <Link style={styles.seeAllLink} to={{ screen: 'Favorites', params: {} }}>
              See All
            </Link>
          </View>
          <PlacesList onClickPlace={onClickPlace} />
        </View>
      </View>
    </SafeAreaView>
    // {/* </KeyboardAvoidingView> */}
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: theme.colors.bg100,
    flex: 1,
    flexDirection: 'column',
    // top: Platform.OS === 'ios' ? -45 : 0,
  },
  headerContainer: {
    // flex: 2.3,
    alignItems: 'center',
    // top: Platform.OS === 'ios' ? -(deviceHeight * 0.06) : 0,
    // top: -(deviceHeight * 0.05),
  },
  searchContainer: {
    // flex: 2,
    // top: Platform.OS === 'ios' ? -30 : 0,
    padding: 0,
  },
  quickFilterContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
    // top: Platform.OS === 'ios' ? -(deviceHeight * 0.06) : -(deviceHeight * 0.03),
  },
  filteredItemsContainer: {
    // flex: 6,
    height: 35,
    // top: -20,
    // top: Platform.OS === 'ios' ? -(deviceHeight * 0.07) : -(deviceHeight * 0.04),
  },
  favoritePlacesTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 22,
    height: 40,
    marginBottom: 3,
  },
  favoritePlacesHeader: {
    alignItems: 'center',
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllLink: {
    color: theme.colors.text,
    fontSize: 12,
  },
  favoritePlacesContainer: {
    // flex: 6,
    justifyContent: 'space-evenly',
    // backgroundColor: 'black'
  },

  // large button with rounded corners
  closeButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    // marginHorizontal: 20,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.bg500,
  },
  closeButtonText: {
    color: theme.colors.white,
  },
});
