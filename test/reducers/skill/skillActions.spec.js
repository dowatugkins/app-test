import { map } from 'lodash';

import skillActions, { SkillActionsConst } from '../../../app/reducers/skill/skillActions';

describe('skillActions', () => {
  describe('.getSkills', () => {
    it('returns an action to fetch a collection of skills', () => {
      const subject = skillActions.getSkills();

      expect(subject.payload).toEqual({});
      expect(subject.type).toEqual(SkillActionsConst.GET_SKILLS);
    });
  });

  describe('.getSkillsFail', () => {
    const error = Object.freeze({ message: 'A certain fan was hit' });
    const subject = skillActions.getSkillsFail(error);

    it('has a payload', () => {
      expect(subject.payload).toEqual(error);
    });

    if('has a type', () => {
      expect(subject.type).toEqual(SkillActionsConst.GET_SKILLS_FAIL);
    });
  });

  describe('.getSkillsSuccess', () => {
    const response = Object.freeze({});
    const subject = skillActions.getSkillsSuccess(response);

    it('has a payload', () => {
      expect(subject.payload).toEqual(response);
    });

    if('has a type', () => {
      expect(subject.type).toEqual(SkillActionsConst.GET_SKILLS_SUCCESS);
    });
  });

  describe('.mergeSkills', () => {
    it('merges skills into state', () => {
      const response = Object.freeze({ skillsById: {1:{}}, skillIds: [1]})
      const subject = skillActions.mergeSkills(response);

      expect(subject.payload).toEqual(response);
      expect(subject.type).toEqual(SkillActionsConst.MERGE_SKILLS);
    });
  });

});
