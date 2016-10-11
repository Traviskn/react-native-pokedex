import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={this.renderScene}
        navigationBar={this.getNavBar()}
        style={styles.container}
      />
    );
  }

  renderScene(route, navigator) {
    return React.createElement(route.screen, {
      route,
      navigator,
      routes,
    });
  }

  getNavBar() {
    return (
      <Navigator.NavigationBar
        style={styles.navBar}
        routeMapper={{
          Title(route) {
            return (
              <View style={styles.title}>
                <Text style={styles.text}>
                  {route.title}
                </Text>
              </View>
            );
          },

          LeftButton(route, navigator) {
            if (route.index > 0) {
              return (
                <View style={styles.leftButton}>
                  <TouchableOpacity onPress={() => navigator.pop()}>
                    <Text style={styles.text}>&#60; Back</Text>
                  </TouchableOpacity>
                </View>
              );
            }

            return null;
          },

          RightButton: () => null
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  navBar: {
    backgroundColor: '#EE0000',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftButton: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  }
});
