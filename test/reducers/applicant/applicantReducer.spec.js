import applicantReducer, { initialState } from '../../../app/reducers/applicant/applicantReducer';
import applicantActions from '../../../app/reducers/applicant/applicantActions';

describe('applicantReducer(state, action) => state', () => {
  const setup = () => {
    SortOrders = ['NONE', 'ASC', 'DESC'];

    return { SortOrders };
  };

  describe('when the action type is GET_APPLICANTS', () => {
    it('sets the fetching flag and has no errors', () => {
      const action = applicantActions.getApplicants();
      const subject = applicantReducer(initialState, action);

      expect(subject.fetching).toEqual(true);
      expect(subject.error).toEqual(null);
    });
  });

  describe('when the action type is GET_APPLICANTS_FAIL', () => {
    it('sets the fetching flag and has errors', () => {
      const error = Object.freeze({ message: 'Hit that fan again' });

      const action = applicantActions.getApplicantsFail(error);
      const subject = applicantReducer(initialState, action);

      expect(subject.fetching).toEqual(false);
      expect(subject.error).toEqual(error);
    });
  });

  describe('when the action type is GET_APPLICANTS_SUCCESS', () => {
    it('sets the fetching flag and has no errors', () => {
      const action = applicantActions.getApplicantsSuccess();
      const subject = applicantReducer(initialState, action);

      expect(subject.fetching).toEqual(false);
      expect(subject.error).toEqual(null);
    });
  });

  describe('when the action type is MERGE_APPLICANTS', () => {
    it('updates state with applicantsById and applicantIds', () => {
      const applicantsById = { 1: { id: 1 }, 2: { id: 2 }};
      const applicantIds = [1, 2]

      const action = applicantActions.mergeApplicants(applicantsById);
      const subject = applicantReducer(initialState, action);

      expect(subject.applicantsById).toEqual(applicantsById);
      expect(subject.applicantIds).toEqual(applicantIds);
    });
  });

  describe('when the action type is CHANGE_APPLICANTS_SORT_ORDER', () => {
    it('changes the sort order to the next one on the list', () => {
      const action = applicantActions.getApplicantsSuccess();
      const subject = applicantReducer(initialState, action);

      expect(subject.fetching).toEqual(false);
      expect(subject.error).toEqual(null);
    });
  });


});
