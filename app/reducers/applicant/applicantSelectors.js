import { defaultMemoize, createSelector } from 'reselect';
import { get, filter, map, sortBy } from 'lodash';

/**
 * @return {boolean} a value indicating whether the applicants redux state slice is fetching.
 */
const isApplicantsFetching = state => get(state, 'applicant.fetching', false);

/**
 * @return {boolean} a value indicating whether the skills redux state slice is fetching.
 */
const isSkillsFetching = state => get(state, 'skill.fetching', false);

/**
 * @return {array} ordered collection of applicant ids.
 */
const getApplicantIds = state => get(state, 'applicant.applicantIds', []);

/**
 * @return {object} collection of applicants indexed by their id.
 */
const getApplicantsById = state => get(state, 'applicant.applicantsById', {});

/**
 * @return {object} current sort order.
 */
const getSortOrder = state => get(state, 'applicant.sortOrder', 'NONE');

/**
 * @return {array} ordered collection of applicants.
 */
const getApplicants = createSelector(
  getApplicantIds,
  getApplicantsById,
  (orderedIds, applicantsById) => map(orderedIds, id => applicantsById[id]));

/**
 * TODO: Actually merge related skills from the `state.skill` slice.
 * @return {array} collection of applicants with their related skills included as a property.
 */
const getApplicantsWithSkills = createSelector(
  getApplicants,
  applicants => {
    const asApplicantWithSkills = applicant => ({
      ...applicant,
      skills: [],
    });

    return map(applicants, asApplicantWithSkills);
  });

/**
 * @return {boolean} a value indicating whether applicant data is being fetched from the server.
 */
const isApplicantListFetching = createSelector(
  isApplicantsFetching,
  isSkillsFetching,
  (applicantFetching, skillsFetching) => applicantFetching || skillsFetching);

const applicantSelectors = {
  getApplicants,
  getApplicantsWithSkills,
  getSortOrder,
  isApplicantListFetching,
};

export { applicantSelectors as default };
