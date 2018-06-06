# README

This assessment helps us gauge your ability to code, work in an existing codebase, and follow guidelines. It's estimated that this assessment will take about two hours to complete.

## Setup

Before you can start you'll need to setup the project.

These instructions are generalized, and written on a Mac. You'll need to adapt as necessary if you are working on a different platform.

Also, make sure you kill any running packagers for other React Native apps before starting

#### Dependencies

* [node.js](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/en/)
* [React Native](https://facebook.github.io/react-native/docs/getting-started.html)

#### Quick Steps

```sh
# Install project dependencies
$ yarn

# Start the React Native Package Manager
$ yarn start

# Run the mock HTTP server
$ yarn run mock-server

# Start up the application in an iOS simulator
$ react-native run-ios
```

## Rules

* You **cannot** add any dependencies or packages.
* You **cannot** modify any code outside of the `./app` directory.
* You **can** modify/add/remove code in `./app/components` and
  `./app/containers`.
* You **cannot** add any files in `./app/reducers` or its subdirectories.
* You **can** only modify the following files in `./app/reducers` and its
  subdirectories:
    * `./app/reducers/applicant/applicantSelectors.js`
    * `./app/reducers/skill/skillSelectors.js`

**REMEMBER:** We want to see how well you can work in an existing code base.

## Problem Set

See `examples/before.png`.

1. Fix the implementation of `getApplicantsWithSkills` in
  `./app/reducers/applicant/applicantSelectors.js`

  > Currently the implementation returns a list of applicants with an empty set
  > of skills.
  >
  > However most applicants have skills associated with them.
  >
  > If done correctly, this will make the next two problems much simpler
  >
  > **DIFFICULT**: Easy
  >
  > **EXAMPLE**: `./examples/problem-1.png`

2. Display each applicants' top skill in the list of applicants.

  > We consider an applicant's top skill to be the skill with the most years of
  > experience.
  >
  > For example if Bob has 3 years of experience with PHP, and 5 years of
  > experience with Objective-C, then Bob's top skill is Objective-C.
  >
  > If the user has no skills, then you can show nothing.
  >
  > If the user has multiple top skills you can show whichever skill you like.
  >
  > **HINT**: See `./app/components/applicants/ApplicantRow.js`
  >
  > **DIFFICULTY**: Easy
  >
  > **EXAMPLE**: `./examples/problem-2.png`

3. Change the sort order of applicants' when the `sortOrder` value changes.

  > Based on the sort order in the redux state, the applicants should be sorted
  > by their total count of skills.
  >
  > **HINT**: There is a stub function in `applicantSelectors.js` which, if
  > implemented correctly, will be all you need to do.
  >
  > **DIFFICULTY**: Medium
  >
  > **EXAMPLE**: `./examples/problem-3-sorted-asc.png`
  > **EXAMPLE**: `./examples/problem-3-sorted-desc.png`

## Your Notes

If you have any notes with regards to your solution, leave them below this line.

<hr>

REPLACE
