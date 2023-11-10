// interface for GPS coordinates
export interface Coordinates {
  latitude: number;
  longitude: number;
}

// interface for user reviews of a destination
export interface Review {
  user: string;
  rating: number;
  comment: string;
}

// interface for list of destinations
export interface Place {
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  coordinates: Coordinates;
  rating: number;
  reviews: Review[];
  isFavorite?: boolean;
}

const places: Place[] = [
  {
    name: "Paris",
    country: "France",
    description:
      "The City of Lights and Love. Explore the Eiffel Tower and indulge in exquisite French cuisine.",
    imageUrl: require("../assets/places/paris.jpeg"),
    coordinates: { latitude: 48.8566, longitude: 2.3522 },
    rating: 4.7,
    reviews: [
      {
        user: "Traveler123",
        rating: 5,
        comment: "Absolutely stunning! Must visit.",
      },
      {
        user: "FoodieExplorer",
        rating: 4,
        comment: "Delicious pastries and amazing coffee.",
      },
    ],
  },
  {
    name: "Kyoto",
    country: "Japan",
    description:
      "Immerse yourself in the beauty of traditional Japanese temples and serene bamboo forests.",
    imageUrl: require("../assets/places/kyoto.jpg"),
    coordinates: { latitude: 35.0116, longitude: 135.7681 },
    rating: 4.5,
    reviews: [
      {
        user: "ZenMaster",
        rating: 5,
        comment: "Peaceful and spiritually enriching experience.",
      },
      {
        user: "CherryBlossomFan",
        rating: 4,
        comment: "Breathtaking cherry blossoms in spring.",
      },
    ],
  },
  {
    name: "New York City",
    country: "United States",
    description:
      "The city that never sleeps! Experience Broadway shows, Central Park, and iconic skyscrapers.",
    imageUrl: require("../assets/places/new_york.jpg"),
    coordinates: { latitude: 40.7128, longitude: -74.006 },
    rating: 4.8,
    reviews: [
      {
        user: "BigAppleFan",
        rating: 5,
        comment: "Incredible energy and diversity.",
      },
      {
        user: "BroadwayLover",
        rating: 4,
        comment: "Fantastic live performances!",
      },
    ],
  },
];

export default places;
