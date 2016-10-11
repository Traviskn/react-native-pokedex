import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default function PokeDetail({ route }) {
    return (
      <View style={styles.detail}>
        <Image
          style={styles.sprite}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${route.params.id}.png`
          }}
        />

        <Text style={styles.text}>
          Pokemon #{route.params.id}
        </Text>

        <Text style={styles.text}>
          {route.params.pokemon.name}
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  detail: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'white'
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  sprite: {
    height: 300,
    width: 300
  }
})
