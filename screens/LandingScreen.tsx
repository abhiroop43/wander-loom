import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/shared/AppHeader';
import { theme } from '../constants/theme';
import SearchField from '../components/landing/SearchField';
import QuickFilterButton from '../components/landing/QuickFilterButton';
import PlacesList from '../components/landing/PlacesList';

const LandingScreen = () => {
  const [searchFilterVisible, setSearchFilterVisible] = useState(false);
  const [quickFilter, setQuickFilter] = useState('');

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
        <PlacesList />
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
    flex: 2,
  },
  searchContainer: {
    flex: 2,
  },
  quickFilterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  filteredItemsContainer: {
    flex: 12,
    height: 35,
  },
});
