import React from 'react';
import { Dimensions, View, Text, StyleSheet, Image } from 'react-native';
import { Card, Icon } from '@rneui/themed';
import { Place } from '../../data';
import { theme } from '../../constants/theme';
import AppText from '../shared/AppText';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const PlaceCard = (place: Place) => {
  // const realImageUrl = `../..${place.imageUrl}`;
  // console.log(realImageUrl);

  // const find_dimesions = (layout: any) => {
  //   const { x, y, width, height } = layout;
  //   return { x, y, width, height };
  // };

  return (
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={place.imageUrl} style={styles.image} />
      </View>
      <View>
        <Icon
          name={place.isFavorite ? 'bookmark' : 'bookmark-outline'}
          type="ionicon"
          size={20}
          containerStyle={styles.favoriteIcon}
        />
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.textContainer}>
          <AppText style={styles.placeName}>{place.name}</AppText>
          <AppText>{place.country}</AppText>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <AppText>
              <Icon name="star" type="ionicon" size={15} color={theme.colors.gold} style={styles.ratingIconStyle} />
              {place.rating}
            </AppText>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: 'stretch', // width 100%
    flex: 1, // height: 100%
    backgroundColor: theme.colors.white,
    borderRadius: 30,
    padding: 0,
    overflow: 'hidden',
    // margin: 0,
    // paddingTop: 10,
    alignItems: 'center',
  },
  imageContainer: {
    width: deviceWidth * 0.93,
    height: deviceHeight * 0.23,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginBottom: 8,
    paddingBottom: 0,
  },
  image: {
    // borderRadius: 30,
    height: '100%',
    width: '100%',
  },
  footerContainer: {
    // arrange inner elements horizaontally
    flexDirection: 'row',
  },
  textContainer: {
    flex: 4,
    marginTop: 0,
    marginLeft: deviceWidth * 0.05,
  },

  // style for the top level container of the rating pill
  ratingContainer: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: deviceWidth * 0.05,
  },

  // style for the entire rating pill
  rating: {
    height: 25,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    padding: 0,
    margin: 0,
  },

  // style for the rating icon
  ratingIconStyle: {
    marginRight: 10,
  },
  placeName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  favoriteIcon: {
    position: 'absolute',
    top: -(deviceHeight * 0.22),
    right: 10,
    backgroundColor: theme.colors.white,
    color: theme.colors.text,
    borderRadius: 999,
    padding: 5,
  },
});

export default PlaceCard;
