import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { get } from 'lodash';

import { Card, CardBody, CardFooter } from '../card';

class ApplicantRow extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <Text style={styles.name}>
            {this.props.applicant.firstName} {}
            {this.props.applicant.lastName}
          </Text>

          <Text style={styles.coverLetter}>
            {this.props.applicant.coverLetter}
          </Text>
        </CardBody>
        <CardFooter style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>SKILL COUNT</Text>
            <Text style={styles.skill}>
              {get(this.props.applicant, 'skills.length', 0)}
            </Text>
          </View>

          <View style={styles.col}>
            <Text style={styles.label}>TOP SKILL</Text>
            <Text style={styles.skill}>
              {/* TOP SKILL SHOULD BE SHOWN HERE */}
            </Text>
          </View>

        </CardFooter>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    lineHeight: 18,
  },

  row: {
    flexDirection: 'row',
  },

  col: {
    flex: 0.5,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
  },

  value: {
    fontSize: 16,
    lineHeight: 18,
  },
});

export { ApplicantRow as default };
