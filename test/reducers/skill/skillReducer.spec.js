import { map } from 'lodash';

import skillReducer, { initialState } from '../../../app/reducers/skill/skillReducer';
import skillActions from '../../../app/reducers/skill/skillActions';

describe('skillReducer', () => {
  describe('when the action type is GET_SKILLS', () => {
    it('sets the fetching flag and has no errors', () => {
      const action = skillActions.getSkills();
      const subject = skillReducer(initialState, action);

      expect(subject.fetching).toEqual(true);
      expect(subject.error).toEqual(null);
    });
  });

  describe('when the action type is GET_SKILLS_FAIL', () => {
    it('sets the fetching flag and has errors', () => {
      const error = Object.freeze({ message: 'Hit that fan again' });

      const action = skillActions.getSkillsFail(error);
      const subject = skillReducer(initialState, action);

      expect(subject.fetching).toEqual(false);
      expect(subject.error).toEqual(error);
    });
  });

  describe('when the action type is GET_SKILLS_SUCCESS', () => {
    it('sets the fetching flag and has no errors', () => {
      const action = skillActions.getSkillsSuccess();
      const subject = skillReducer(initialState, action);

      expect(subject.fetching).toEqual(false);
      expect(subject.error).toEqual(null);
    });
  });

  describe('when the action type is MERGE_SKILLS', () => {
    it('updates state with skillsById and skillIds', () => {
      const skillsById = { 1: { id: 1 }, 2: { id: 2 }};
      const skillIds = [1, 2]

      const action = skillActions.mergeSkills(skillsById);
      const subject = skillReducer(initialState, action);

      expect(subject.skillsById).toEqual(skillsById);
      expect(subject.skillIds).toEqual(skillIds);
    });
  });

});
