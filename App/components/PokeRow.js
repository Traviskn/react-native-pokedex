import React from 'react';
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

export default function PokeRow({ pokemon, id }) {
  return (
    <View style={styles.row}>
      <Image
        style={styles.sprite}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        }}
      />
      <Text>{pokemon.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  sprite: {
    height: 50,
    width: 50
  }
});
