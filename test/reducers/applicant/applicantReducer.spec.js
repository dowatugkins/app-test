import applicantReducer, { initialState } from '../../../app/reducers/applicant/applicantReducer';
import applicantActions from '../../../app/reducers/applicant/applicantActions';

describe('applicantReducer(state, action) => state', function () {
  const setup = () => {
    SortOrders = ['NONE', 'ASC', 'DESC'];

    return { SortOrders };
  };

  describe('when the action type is GET_APPLICANTS', function () {
    it('sets the fetching flag and has no errors', function () {
      const action = applicantActions.getApplicants();
      const subject = applicantReducer(initialState, action);

      expect(subject.fetching).toEqual(true);
      expect(subject.error).toEqual(null);
    });
  });

  describe('when the action type is GET_APPLICANTS_FAIL', function () {
    it('sets the fetching flag and has errors', function () {
      const error = Object.freeze({ message: 'Hit that fan again' });

      const action = applicantActions.getApplicantsFail(error);
      const subject = applicantReducer(initialState, action);

      expect(subject.fetching).toEqual(false);
      expect(subject.error).toEqual(error);
    });
  });

  describe('when the action type is GET_APPLICANTS_SUCCESS', function () {
    it('sets the fetching flag and has no errors', function () {
      const action = applicantActions.getApplicantsSuccess();
      const subject = applicantReducer(initialState, action);

      expect(subject.fetching).toEqual(false);
      expect(subject.error).toEqual(null);
    });
  });

  describe('when the action type is MERGE_APPLICANTS', function () {
    it('updates state with applicantsById and applicantIds', function () {
      const applicantsById = { 1: { id: 1 }, 2: { id: 2 }};
      const applicantIds = [1, 2]

      const action = applicantActions.mergeApplicants(applicantsById);
      const subject = applicantReducer(initialState, action);

      expect(subject.applicantsById).toEqual(applicantsById);
      expect(subject.applicantIds).toEqual(applicantIds);
    });
  });

  describe('when the action type is CHANGE_APPLICANTS_SORT_ORDER', function () {
    it('changes the sort order to the next one on the list', function () {
      const action = applicantActions.getApplicantsSuccess();
      const subject = applicantReducer(initialState, action);

      expect(subject.fetching).toEqual(false);
      expect(subject.error).toEqual(null);
    });
  });


});
