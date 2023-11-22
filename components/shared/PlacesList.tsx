import React from 'react';
import { Dimensions, StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Image, Icon } from '@rneui/themed';
import { Place } from '../../data';
import places from '../../data';
import AppText from './AppText';
import { theme } from '../../constants/theme';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

interface PlacesListProps {
  onClickPlace?: any;
}

const PlacesList = ({ onClickPlace }: PlacesListProps) => {
  const navigation = useNavigation();

  const navigateToDestinationDetails = (place: Place) => {
    onClickPlace(place);
  };

  const renderDestinationItem = ({ item }: { item: Place }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={() => navigateToDestinationDetails(item)}>
        <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image source={item.imageUrl} style={styles.image} />
          </View>
          <View style={styles.destinationNameContainer}>
            <AppText style={styles.destinationName}>{item.name}</AppText>
            <AppText style={styles.destinationCountry}>{item.country}</AppText>
          </View>
          <View style={styles.chevronContainer}>
            <Icon name="chevron-right" type="evilicon" color={theme.colors.text} size={30} />
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={places}
      renderItem={renderDestinationItem}
      keyExtractor={(item) => item.key}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    // marginVertical: 10,
    // width: deviceWidth,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    marginVertical: 5,
  },
  cardContainer: {
    padding: 0,
    // margin: 0,
    height: '100%',
    borderRadius: 15,
    // overflow: 'hidden',
    // paddingHorizontal: 0,
  },
  cardWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  imageContainer: {
    height: 52,
    width: deviceWidth * 0.14,
    paddingLeft: 0,
    paddingRight: 6,
    // padding: 0,
    // overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    borderRadius: 10,
    alignItems: 'center',
  },
  destinationNameContainer: {
    width: deviceWidth * 0.6,
  },
  destinationName: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  destinationCountry: {
    color: theme.colors.text,
    fontSize: 12,
    fontWeight: 'normal',
  },
  chevronContainer: {
    height: '100%',
    width: deviceWidth * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
    paddingLeft: 10,
  },
});

export default PlacesList;
