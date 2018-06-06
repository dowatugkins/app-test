import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardBody = ({ style, ...restOfProps }) =>
  <View style={[styles.cardBody, style]} {...restOfProps} />;

const styles = StyleSheet.create({
  cardBody: {},
});

export { CardBody as default };
