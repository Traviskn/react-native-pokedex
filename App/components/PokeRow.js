import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function PokeRow({ pokemon, id, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(pokemon, id)}>
      <View style={styles.row}>
        <Image
          style={styles.sprite}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          }}
        />

        <Text style={styles.rowText}>{pokemon.name}</Text>

        <Text style={styles.arrow}>&#62;</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rowText: {
    fontSize: 20
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  sprite: {
    height: 50,
    width: 50
  }
});
