import React, { Component, PropTypes } from 'react';
import { ActivityIndicator, Button, ListView, StyleSheet, Text, View } from 'react-native';

import { Card, CardBody, CardFooter, CardHeader } from '../card';
import ApplicantRow from './ApplicantRow';

class ApplicantsList extends Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderRow(applicant) {
    return this.props.isFetching ? null : <ApplicantRow applicant={applicant} />;
  }

  renderHeader() {
    return (
      <Card>
        <CardHeader>
          <Text style={styles.cardHeading}>Applicant Management</Text>
        </CardHeader>
        <CardBody>
          <Text style={styles.cardText}>
            Here at ACME we got a large amount of applicants. Easily view, edit, remove, and {}
            add applicants from this screen!
          </Text>
        </CardBody>
        <CardFooter>
          <Button
            title={`Sort Applicants (Order: ${this.props.sortOrder})`}
            onPress={this.props.onSortPress}
          />
        </CardFooter>
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.scene}>
        <ListView
          dataSource={this.props.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderHeader={this.renderHeader}
          enableEmptySections
        />
        {this.props.isFetching && <ActivityIndicator style={styles.centered} size="large" />}
      </View>
    );
  }
}

ApplicantsList.propTypes = {
  // ListView dataSource
  dataSource: PropTypes.instanceOf(ListView.DataSource).isRequired,

  // Bool to disclose when the data is fetching
  isFetching: PropTypes.bool,

  // Callback when sort button is pressed
  onSortPress: PropTypes.func,
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#eee',
    marginTop: 64,
  },

  centered: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 5,
  },

  cardText: {
    fontSize: 14,
    lineHeight: 16,
  },
});

export { ApplicantsList as default };
