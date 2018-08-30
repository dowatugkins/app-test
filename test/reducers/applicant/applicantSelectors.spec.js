import { map } from 'lodash';

import applicantSelectors from '../../../app/reducers/applicant/applicantSelectors';

const state = Object.freeze({
  applicant: {
    fetching: false,
    applicantIds: [1, 2],
    applicantsById: {
      1: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        coverLetter: 'Stuff and things',
      },
      2: {
        id: 2,
        firstName: 'Bruce',
        lastName: 'Wayne',
        email: 'totsnotbatman@iambatman.com',
        coverLetter: 'Ever dance with the devil in the pail moolight?',
      }
    },
    sortOrder: 'NONE'
  },
  skill: {
    fetching: false,
    skillIds: [1, 2, 3],
    skillsById: {
      1: {
        id: 1,
        description: 'Skill 1',
        experienceInYears: 2,
        applicantId: 1
      },
      2: {
        id: 2,
        description: 'Skill 2',
        experienceInYears: 4,
        applicantId: 1
      },
      3: {
        id: 3,
        description: 'Skill 3',
        experienceInYears: 30,
        applicantId: 2,
      }
    }
  },
});

const skills = Object.freeze([
  {
    id: 1,
    description: 'Skill 1',
    experienceInYears: 2,
    applicantId: 1
  },
  {
    id: 2,
    description: 'Skill 2',
    experienceInYears: 4,
    applicantId: 1
  },
  {
    id: 3,
    description: 'Skill 3',
    experienceInYears: 30,
    applicantId: 2,
  }
]);

describe('applicantSelectors', () => {
  describe('.getSortOrder', () => {
    it('returns a string representing the current sort order', () => {
      const sortOrder = state.applicant.sortOrder;
      expect(applicantSelectors.getSortOrder(state)).toBe(sortOrder);
    });
  });

  describe('.getApplicants', () => {
    it('returns a collection of applicants, ordered by id', () => {
      const applicants = state.applicant.applicantsById;
      const expected = map(applicants, applicant => {
        return { ...applicant };
      });
      expect(applicantSelectors.getApplicants(state)).toEqual(expected);
    });
  });

  describe('.getApplicantsWithSkills', () => {
    it('returns a collection of applicants, ordered by id, who also have a set of skills', () => {
      // TODO: fix this
      const applicants = state.applicant.applicantsById;
      const expected = map(applicants, applicant => {
        return { ...applicant, skills: [] };
      });
      expect(applicantSelectors.getApplicantsWithSkills(state)).toEqual(expected);
    });
  });

  describe('.isApplicantListFetching', () => {
    it('return a bool representing both applicant and skill isFetching', () => {
      expect(applicantSelectors.isApplicantListFetching(state)).toEqual(false);
    });
  });

});
