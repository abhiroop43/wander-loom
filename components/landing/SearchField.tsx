import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import { theme } from '../../constants/theme';

const SearchField = () => {
  const [searchText, setSearchText] = useState('');

  const clearSearch = () => {
    setSearchText('');
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <Icon name="search" type="feather" color={theme.colors.text} size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        {searchText !== '' && (
          <Icon
            name="x"
            type="feather"
            color={theme.colors.text}
            size={20}
            onPress={clearSearch}
            style={styles.clearIcon}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: theme.colors.white,
    paddingLeft: 10,
    // ios shadow start //
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    // ios shadow end //
    // android shadow start //
    elevation: 2,
    // android shadow end //
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-regular',
  },
  searchIcon: {
    marginRight: 10,
  },
  clearIcon: {
    marginRight: 10,
  },
});

export default SearchField;
