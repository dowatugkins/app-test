const ApplicantActionsConst = Object.freeze({
  GET_APPLICANTS: 'GET_APPLICANTS',
  GET_APPLICANTS_FAIL: 'GET_APPLICANTS_FAIL',
  GET_APPLICANTS_SUCCESS: 'GET_APPLICANTS_SUCCESS',

  MERGE_APPLICANTS: 'MERGE_APPLICANTS',
  CHANGE_APPLICANTS_SORT_ORDER: 'CHANGE_APPLICANTS_SORT_ORDER',
});

// Standard Action Creators

const getApplicants = () => ({
  type: ApplicantActionsConst.GET_APPLICANTS,
  payload: {},
});

const getApplicantsFail = error => ({
  type: ApplicantActionsConst.GET_APPLICANTS_FAIL,
  payload: error,
});

const getApplicantsSuccess = () => ({
  type: ApplicantActionsConst.GET_APPLICANTS_SUCCESS,
  payload: {},
});

const mergeApplicants = applicants => ({
  type: ApplicantActionsConst.MERGE_APPLICANTS,
  payload: applicants,
});

const changeApplicantsSortOrder = () => ({
  type: ApplicantActionsConst.CHANGE_APPLICANTS_SORT_ORDER,
})

// Async Actions

const asyncGetApplicants = () => (dispatch, getState) => {
  dispatch(getApplicants());

  fetch('http://localhost:3000/applicants')
    .then(response => response.json(), error => { throw (error) })
    .then(data => {
      console.log(data);

      dispatch(mergeApplicants(data));
      dispatch(getApplicantsSuccess(data));
    }, error => dispatch(getApplicantsFail(error)));
};

const applicantActions = Object.freeze({
  asyncGetApplicants,

  getApplicants,
  getApplicantsFail,
  getApplicantsSuccess,

  changeApplicantsSortOrder,
  mergeApplicants,
});

export { applicantActions as default, ApplicantActionsConst };
