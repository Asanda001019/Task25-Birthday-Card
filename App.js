import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

// Sample image for the background
// const backgroundImage = 'https://www.oyegifts.com/blog/wp-content/uploads/2024/05/birthday-wishes-and-qoutes-oyegifts.jpg';
const backgroundImage = 'https://www.oyegifts.com/blog/wp-content/uploads/2024/05/birthday-wis.jpg';

export default function App() {
  const [message, setMessage] = useState("Happy Birthday!");

  const handleTextChange = (newText) => {
    setMessage(newText);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: backgroundImage }} style={styles.backgroundImage} />
      <View style={styles.card}>
        <Text style={styles.cardText}>{message}</Text>
        {/* <Text style={styles.emoji}>❤️</Text> */}
        <Image source={require('./assets/Birthday cake.png')} style={styles.image} />

        <TextInput
          style={styles.input}
          placeholder="Edit your message"
          value={message}
          onChangeText={handleTextChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emoji: {
    fontSize: 50,
    marginTop: 10,
  },
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  card: {
    width: '50%',
    height:"65%",
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FF1493', // Pink border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  cardText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF1493', // Pink color
  },
  input: {
    height: 40,
    borderColor: '#FF1493', // Pink border
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
  },

image: {
  width: 400,
  height: 300,
  marginBottom: 20,
  left:95,
}
});
