import applicantActions, { ApplicantActionsConst } from '../../../app/reducers/applicant/applicantActions';

describe('applicantActions', function () {
  describe('.getApplicants', function () {
    it('returns an action to fetch a collection of applicants', function () {
      const subject = applicantActions.getApplicants();

      expect(subject.payload).toEqual({});
      expect(subject.type).toEqual(ApplicantActionsConst.GET_APPLICANTS);
    });
  });

  describe('.getApplicantsFail', function () {
    const error = Object.freeze({ message: 'A certain fan was hit' });
    const subject = applicantActions.getApplicantsFail(error);

    it('has a payload', function () {
      expect(subject.payload).toEqual(error);
    });

    if('has a type', function () {
      expect(subject.type).toEqual(ApplicantActionsConst.GET_APPLICANTS_FAIL);
    });
  });

  describe('.getApplicantsSuccess', function () {
    const response = Object.freeze({});
    const subject = applicantActions.getApplicantsSuccess(response);

    it('has a payload', function () {
      expect(subject.payload).toEqual(response);
    });

    if('has a type', function () {
      expect(subject.type).toEqual(ApplicantActionsConst.GET_APPLICANTS_SUCCESS);
    });
  });

  describe('.mergeApplicants', function () {
    it('merges applicants into state', function () {
      const response = Object.freeze({ applicantsById: {}, applicantIds: []})
      const subject = applicantActions.mergeApplicants(response);

      expect(subject.payload).toEqual(response);
      expect(subject.type).toEqual(ApplicantActionsConst.MERGE_APPLICANTS);
    });
  });

  describe('.changeApplicantsSortOrder', function () {
    it('changes the sort order', function () {
      const subject = applicantActions.changeApplicantsSortOrder();

      expect(subject.type).toEqual(ApplicantActionsConst.CHANGE_APPLICANTS_SORT_ORDER);
    });
  });
});
