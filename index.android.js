import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

class pokedex extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('pokedex', () => pokedex);
