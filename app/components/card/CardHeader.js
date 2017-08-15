import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardHeader = ({ style, ...restOfProps }) => (
  <View style={[styles.cardHeader, style]} {...restOfProps} />
);

const styles = StyleSheet.create({
  cardHeader: {},
});

export { CardHeader as default };
