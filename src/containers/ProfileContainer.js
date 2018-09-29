import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class ProfileContainer extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>
Coming soon!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  },
});
