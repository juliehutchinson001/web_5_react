import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator  } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          San Francisco{'\n'}
          Sunday, October 1
        </Text>
        <Text style={styles.temperature}>
          57 degrees
        </Text>
        <Text style={styles.temperature}>
          Partly Cloudy
        </Text>
        <Text style={styles.temperature}>
          Humidity 78%{'\n'}
        </Text>
        <Text style={styles.temperature}>
          Wind Moderate
        </Text>
        <Text style={styles.temperature}>
          Mon Tues Wed Thur Fri Sat Sun{'\n'}
           67  70  69   68  75  74   73
        </Text>
        <Text style={styles.temperature}>
          Mon Tues Wed Thur Fri Sat Sun{'\n'}
           67  70  69   68  75  74   73
        </Text>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
