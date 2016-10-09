import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Slider,
  Platform
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Type here',
      on: false,
      rating: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
        />

        <Switch
          value={this.state.on}
          onValueChange={(value) => this.setState({on: value})}
        />

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={this.state.rating}
          onValueChange={(rating) => this.setState({rating})}
        />
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
  },
  input: {
    height: 40,
    margin: 10,
    alignSelf: 'stretch',
    ...Platform.select({
      ios: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5
      }
    })
  },
  slider: {
    alignSelf: 'stretch'
  }
});

export default App;
