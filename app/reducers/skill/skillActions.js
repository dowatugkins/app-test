const SkillActionsConst = {
  GET_SKILLS: 'GET_SKILLS',
  GET_SKILLS_FAIL: 'GET_SKILLS_FAIL',
  GET_SKILLS_SUCCESS: 'GET_SKILLS_SUCCESS',

  MERGE_SKILLS: 'MERGE_SKILLS',
};

// Standard Action Creators

const getSkills = () => ({
  type: SkillActionsConst.GET_SKILLS,
  payload: {},
});

const getSkillsFail = error => ({
  type: SkillActionsConst.GET_SKILLS_FAIL,
  payload: error,
});

const getSkillsSuccess = () => ({
  type: SkillActionsConst.GET_SKILLS_SUCCESS,
  payload: {},
});

const mergeSkills = skills => ({
  type: SkillActionsConst.MERGE_SKILLS,
  payload: skills
});

// Async Actions

const asyncGetSkills = () => (dispatch, getState) => {
  dispatch(getSkills());

  fetch('http://localhost:3000/skills')
    .then(response => response.json(), error => { throw (error) })
    .then(data => {
      dispatch(mergeSkills(data));
      dispatch(getSkillsSuccess());
    }, error => dispatch(getSkillsFail(error)));
};

const skillActions = {
  asyncGetSkills,
  getSkills,
  getSkillsFail,
  getSkillsSuccess,

  mergeSkills,
};

export { skillActions as default, SkillActionsConst };
