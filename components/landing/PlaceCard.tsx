import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, Icon } from "@rneui/themed";
import { Place } from "../../data";

const PlaceCard = (place: Place) => {
  // const realImageUrl = `../..${place.imageUrl}`;
  // console.log(realImageUrl);
  return (
    <Card containerStyle={styles.cardContainer}>
      <Image source={place.imageUrl} style={styles.image} resizeMode="cover" />
      <View style={styles.overlay}>
        <Text style={styles.placeName}>{place.name}</Text>
        <Icon
          name={place.isFavorite ? "heart" : "heart-outline"}
          type="ionicon"
          color={place.isFavorite ? "red" : "#fff"}
          size={30}
          containerStyle={styles.favoriteIcon}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    height: 200, // Adjust the height based on your preference
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  placeName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default PlaceCard;
