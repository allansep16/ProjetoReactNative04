import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SocialPost() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>Mark Zuckerberg </Text>
      <Image 
        source={{ uri: 'https://tse3.explicit.bing.net/th?id=OIP.D7UI8n3FpOQ-HJqvVrdpHQHaEK&pid=Api&P=0&h=180' }} 
        style={styles.postImage} 
      />
      <Text style={styles.postDescription}>
      Mark Zuckerberg (1984) é o cofundador e CEO do Facebook, a maior rede social do planeta.

Em 2012, o Facebook adquiriu o Instagram e, em 2014, comprou o aplicativo de mensagens WhatsApp.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 16,
    color: '#000',
    textAlign: 'justify',
  },
});