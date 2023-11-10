import React from "react";
import { ScrollView } from "react-native";
import PlaceCard from "./PlaceCard"; // Adjust the import path based on your project structure
import places from "../../data";
const PlacesList = () => {
  // const places = places;

  return (
    <ScrollView>
      {places.map((place, index) => (
        <PlaceCard key={index} {...place} />
      ))}
    </ScrollView>
  );
};

export default PlacesList;
