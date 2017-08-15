import React, { Component, PropTypes } from 'react';
import { ListView } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ApplicantsList } from '../../components/applicants';
import { applicantActions, applicantSelectors } from '../../reducers/applicant';
import { skillActions } from '../../reducers/skill';

const { DataSource } = ListView;
const rowHasChanged = (row1, row2) => row1 !== row2;

class InternalContainer extends Component {
  constructor(props) {
    super(props);

    this.onSortPress = () => this.props.actions.changeApplicantsSortOrder();
    this.state = {
      dataSource: new DataSource({ rowHasChanged }).cloneWithRows(this.props.applicants || []),
    };
  }

  componentWillMount() {
    this.props.actions.asyncGetApplicants();
    this.props.actions.asyncGetSkills();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.applicants !== this.props.applicants) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.applicants || []),
      });
    }
  }

  render() {
    return (
      <ApplicantsList
        dataSource={this.state.dataSource}
        isFetching={this.props.isApplicantListFetching}
        onSortPress={this.onSortPress}
        sortOrder={this.props.sortOrder}
      />
    );
  }
}

InternalContainer.propTypes = {
  applicants: PropTypes.array,
  isApplicantListFetching: PropTypes.bool,
};

const actions = { ...applicantActions, ...skillActions };
const mapStateToProps = state => ({
  applicants: applicantSelectors.getApplicantsWithSkills(state),
  sortOrder: applicantSelectors.getSortOrder(state),
  isApplicantListFetching: applicantSelectors.isApplicantListFetching(state),
});
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
const enhance = connect(mapStateToProps, mapDispatchToProps);
const ApplicantsContainer = enhance(InternalContainer);

export { ApplicantsContainer as default };
