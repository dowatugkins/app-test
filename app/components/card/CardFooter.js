import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardFooter = ({ style, ...restOfProps }) => (
  <View style={[styles.cardFooter, style]} {...restOfProps} />
);

const styles = StyleSheet.create({
  cardFooter: {
    marginTop: 10,
    paddingTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
  },
});

export { CardFooter as default };
