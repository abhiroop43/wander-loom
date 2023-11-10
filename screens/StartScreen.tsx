import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Card, Button, Icon } from '@rneui/themed';

const StartScreen = () => {
  const [greeting, setGreeting] = useState('');
  const [weather, setWeather] = useState('Sunny'); // Replace with actual weather data

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }

    // Fetch and set the actual weather data here if needed
    // setWeather(getWeather());
  }, []);

  return (
    <ImageBackground source={{ uri: 'https://example.com/background-image.jpg' }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <Card.Title h4 style={styles.greeting}>
            <Icon name="ios-sunny" type="ionicon" color="#FFA000" /> {greeting}, User
          </Card.Title>
          <Card.Divider />
          <View style={styles.weatherContainer}>
            <Text style={styles.weatherText}>
              <Icon name="ios-cloud" type="ionicon" color="#2196F3" /> Current Weather:
            </Text>
            <Text style={styles.weatherText}>{weather}</Text>
          </View>
          <Button title="Get Started" buttonStyle={styles.button} />
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  greeting: {
    marginBottom: 10,
  },
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  weatherText: {
    flex: 1,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FFA000',
  },
});

export default StartScreen;
