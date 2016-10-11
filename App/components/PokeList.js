import React, { Component } from 'react';
import {
  Text,
  ListView,
  StyleSheet
} from 'react-native';
import PokeRow from './PokeRow';

import pokeData from '../pokeData';

const ds = new ListView.DataSource({
  rowHasChanged: (p1, p2) => p1.name !== p2.name
});

export default class PokeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows([])
    };

    this.renderRow = this.renderRow.bind(this);
    this.showDetail = this.showDetail.bind(this);
  }

  componentDidMount() {
    // TODO: Hit the pokeapi
    this.setState({
      dataSource: ds.cloneWithRows(pokeData)
    });
  }

  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        enableEmptySections
      />
    );
  }

  renderRow(data, sectionId, rowId) {
    const pokemonId = parseInt(rowId, 10) + 1;

    return (
      <PokeRow
        pokemon={data}
        id={pokemonId}
        onPress={this.showDetail}
      />
    );
  }

  showDetail(pokemon, id) {
    this.props.navigator.push({
      ...this.props.routes[1],
      params: { pokemon, id }
    });
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 60,
    alignSelf: 'stretch'
  }
});
