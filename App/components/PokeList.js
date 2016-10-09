import React, { Component } from 'react';
import {
  Text,
  ListView,
  StyleSheet
} from 'react-native';
import PokeRow from './PokeRow';

export default class PokeList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(props.pokemon)
    };
  }

  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

  renderRow(data, sectionId, rowId) {
    const pokemonId = parseInt(rowId, 10) + 1;

    return (
      <PokeRow pokemon={data} id={pokemonId} />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    alignSelf: 'stretch'
  }
});
