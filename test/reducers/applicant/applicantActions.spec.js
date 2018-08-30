import applicantActions, { ApplicantActionsConst } from '../../../app/reducers/applicant/applicantActions';

describe('applicantActions', () => {
  describe('.getApplicants', () => {
    it('returns an action to fetch a collection of applicants', () => {
      const subject = applicantActions.getApplicants();

      expect(subject.payload).toEqual({});
      expect(subject.type).toEqual(ApplicantActionsConst.GET_APPLICANTS);
    });
  });

  describe('.getApplicantsFail', () => {
    const error = Object.freeze({ message: 'A certain fan was hit' });
    const subject = applicantActions.getApplicantsFail(error);

    it('has a payload', () => {
      expect(subject.payload).toEqual(error);
    });

    if('has a type', () => {
      expect(subject.type).toEqual(ApplicantActionsConst.GET_APPLICANTS_FAIL);
    });
  });

  describe('.getApplicantsSuccess', () => {
    const response = Object.freeze({});
    const subject = applicantActions.getApplicantsSuccess(response);

    it('has a payload', () => {
      expect(subject.payload).toEqual(response);
    });

    if('has a type', () => {
      expect(subject.type).toEqual(ApplicantActionsConst.GET_APPLICANTS_SUCCESS);
    });
  });

  describe('.mergeApplicants', () => {
    it('merges applicants into state', () => {
      const response = Object.freeze({ applicantsById: {1:{}}, applicantIds: [1]})
      const subject = applicantActions.mergeApplicants(response);

      expect(subject.payload).toEqual(response);
      expect(subject.type).toEqual(ApplicantActionsConst.MERGE_APPLICANTS);
    });
  });

  describe('.changeApplicantsSortOrder', () => {
    it('changes the sort order', () => {
      const subject = applicantActions.changeApplicantsSortOrder();

      expect(subject.type).toEqual(ApplicantActionsConst.CHANGE_APPLICANTS_SORT_ORDER);
    });
  });
});
