import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import PlaceCard from './PlaceCard';
import places from '../../data';

const PlacesList = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop
        // mode="parallax"
        // parallaxScrollingOffset-={200}
        // parallaxScrollingScale={1}
        width={width}
        height={height * 0.35}
        autoPlay={true}
        data={places}
        windowSize={5}
        scrollAnimationDuration={5000}
        renderItem={(place) => <PlaceCard {...place.item} />}
      />
    </View>
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  carouselContainer: {
    // flex: 1,
    margin: 0,
    padding: 0,
    width: 200,
    height: 180,
  },
});
