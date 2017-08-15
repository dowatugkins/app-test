import { isPlainObject, map, reduce, uniq } from 'lodash';

import applicantActions, { ApplicantActionsConst } from './applicantActions';

const SortOrders = ['NONE', 'ASC', 'DESC'];

const initialState = {
  // A value indicating which direction the applicants are being sorted.
  sortOrder: SortOrders[0],

  // A value indicating whether a network request related to applicants is active.
  fetching: false,

  // A value representing why the previous network request failed;
  // This will be `null` if the previous request did not fail, or if there is an active request.
  error: null,

  // Unordered collection of applicants indexed by their id.
  applicantsById: {},

  // Collection of applicant ids that matches the ordering of the server's response.
  applicantIds: [],
};

const intoApplicantsById = (applicantsById, model) => ({ ...applicantsById, [model.id]: model });

function applicantReducer(state = initialState, action = {}) {
  if (!isPlainObject(action)) {
    return state;
  }

  const { type, payload } = action;

  switch (type) {
    case ApplicantActionsConst.GET_APPLICANTS:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case ApplicantActionsConst.GET_APPLICANTS_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    case ApplicantActionsConst.GET_APPLICANTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };

    case ApplicantActionsConst.MERGE_APPLICANTS:
      return {
        ...state,
        applicantIds: uniq((state.applicantIds || []).concat(map(payload, 'id'))),
        applicantsById: {
          ...(state.applicantsById || {}),
          ...reduce(payload, intoApplicantsById, {}),
        },
      };

    case ApplicantActionsConst.CHANGE_APPLICANTS_SORT_ORDER:
      return {
        ...state,
        sortOrder: SortOrders[((SortOrders.indexOf(state.sortOrder) + 1) % 3)],
      }

    default: return state;
  }
}

export { applicantReducer as default };
