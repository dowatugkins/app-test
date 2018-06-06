import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ style, ...restOfProps }) =>
  <View style={[styles.card, style]} {...restOfProps} />;

const styles = StyleSheet.create({
  card: {
    marginBottom: 5,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
});

export { Card as default };
