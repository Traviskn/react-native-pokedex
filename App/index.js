import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import PokeList from './components/PokeList';
import pokeData from './pokeData';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };
  }

  componentWillMount() {
    // TODO: hit the pokeapi
    this.setState({
      pokemon: pokeData
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PokeList pokemon={this.state.pokemon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  }
});
