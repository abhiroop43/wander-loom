import React from 'react';
import PlaceDetails from '../components/landing/PlaceDetails';
import { Place } from '../data';

const DetailScreen = ({ route }: any) => {
  const { place }: { place: Place } = route.params;
  console.log('Place received 2: ' + JSON.stringify(place));

  return <PlaceDetails place={place} />;
};

export default DetailScreen;
