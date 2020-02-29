import { URL, Framework } from './entities';
import { map, pipe, toPairs, sortBy, head } from 'ramda';
import fetch from 'cross-fetch';

export const noValue = '--';
export const issueURL = 'https://github.com/dimitropoulos/react-ui-roundup/issues/new';

/** adds `frameworkId` to all `Component`s in a `Framework` */
export const unwrapFrameworks = (frameworks: Framework[]) => (
  map(({ components, frameworkId }) => (
    map(component => ({ ...component, frameworkId }), components)
  ), frameworks)
);

export const removeProtocol = (repoURL: URL) => repoURL.split('://')[1];

export const getGithubFullName = (repoURL: URL) => (
  repoURL.split('github.com')[1].substring(1)
);

export const getRepoInfo = async (repoURL: URL) => {
  if (repoURL.match('github.com')) {
    const fullName = getGithubFullName(repoURL);
    const response = await fetch(`https://api.github.com/repos/${fullName}`)
    return response.json()
  }
  return null;
};

export const pipeLog = <T>(input: T) => {
  console.log(input);
  return input;
};

export const toStablePairs = pipe(
  toPairs,
  sortBy(head),
);
