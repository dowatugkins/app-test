import { isPlainObject, map, reduce, uniq } from 'lodash';

import { SkillActionsConst } from './skillActions';

const initialState = {
  // A value indicating whether there is an active network request.
  fetching: false,

  // An error indicating why the previous network request failed.
  // This will be `null` if there is an active network request, or if the last request did not fail.
  error: null,

  // Collection of skills indexed by their id.
  skillsById: {},

  // Ordered collection of skill ids. This is the order dictated by the server.
  skillIds: []
};

const intoSkillsById = (applicantsById, model) => ({ ...applicantsById, [model.id]: model });

function skillReducer(state = initialState, action = {}) {
  if (!isPlainObject(action)) {
    return state;
  }

  const { type, payload } = action;

  switch (type) {
    case SkillActionsConst.GET_SKILLS:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case SkillActionsConst.GET_SKILLS_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    case SkillActionsConst.GET_SKILLS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };

    case SkillActionsConst.MERGE_SKILLS:
      return {
        ...state,
        skillIds: uniq((state.skillIds || []).concat(map(payload, 'id'))),
        skillsById: {
          ...(state.skillsById || {}),
          ...reduce(payload, intoSkillsById, {}),
        },
      };

    default: return state;
  }
}

export { skillReducer as default, initialState };
