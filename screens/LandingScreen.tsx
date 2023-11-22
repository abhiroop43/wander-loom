import React, { useState } from 'react';
import { Dimensions, View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/shared/AppHeader';
import { theme } from '../constants/theme';
import SearchField from '../components/landing/SearchField';
import QuickFilterButton from '../components/landing/QuickFilterButton';
import PlacesCarousel from '../components/landing/PlacesCarousel';
import PlacesList from '../components/shared/PlacesList';
import AppText from '../components/shared/AppText';
import { Link } from '@react-navigation/native';
import { BottomSheet, BottomSheetProps, Button } from '@rneui/themed';
import PlaceDetails from '../components/landing/PlaceDetails';
import { Place } from '../data';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const LandingScreen = () => {
  const [searchFilterVisible, setSearchFilterVisible] = useState(false);
  const [quickFilter, setQuickFilter] = useState('');
  const [detailsPopupVisible, setDetailsPopupVisible] = useState<boolean>(false);

  const [selectedPlace, setSelectedPlace] = useState<any>();

  const onClickPlace = (place: Place) => {
    // console.log('Place received 1: ' + JSON.stringify(place));
    setSelectedPlace(place);
    setDetailsPopupVisible(true);
  };

  const onFilterPress = () => {
    setSearchFilterVisible(!searchFilterVisible);
  };
  return (
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

      <View style={styles.favoritePlacesContainer}>
        <View style={styles.favoritePlacesTitleContainer}>
          <AppText style={styles.favoritePlacesHeader}>Popular</AppText>
          <Link style={styles.seeAllLink} to={{ screen: 'Favorites', params: {} }}>
            See All
          </Link>
        </View>
        <PlacesList onClickPlace={onClickPlace} />

        <BottomSheet isVisible={detailsPopupVisible}>
          <PlaceDetails place={selectedPlace} />
          <TouchableOpacity style={styles.closeButtonContainer} onPress={() => setDetailsPopupVisible(false)}>
            <AppText style={styles.closeButtonText}>Close</AppText>
          </TouchableOpacity>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: theme.colors.bg100,
    flex: 1,
    flexDirection: 'column',
  },
  headerContainer: {
    flex: 2.3,
    alignItems: 'center',
    top: Platform.OS === 'ios' ? -(deviceHeight * 0.06) : 0,
    // top: -(deviceHeight * 0.05),
  },
  searchContainer: {
    flex: 2,
    // top: -30,
    padding: 0,
  },
  quickFilterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
    top: Platform.OS === 'ios' ? -(deviceHeight * 0.03) : 0,

    // top: -40,
  },
  filteredItemsContainer: {
    flex: 6,
    height: 35,
    // top: -20,
    top: Platform.OS === 'ios' ? -(deviceHeight * 0.03) : 0,
  },
  favoritePlacesTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 22,
    height: 22,
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
    flex: 5,
    justifyContent: 'space-evenly',
    padding: 0,
    margin: 0,
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
