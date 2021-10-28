import fetch from 'cross-fetch';
import { head, indexBy, map, pipe, prop, sortBy, toPairs } from 'ramda';
import { Entries } from 'type-fest';

import { Option } from './components';
import { RepoInfo, URL } from './entities';
import { Framework } from './frameworks';
import {
  checkmark as markdownCheckmark,
  designKits as markdownDesignKits, stringArray as markdownStringArray,
  themer as markdownThemer } from './markdown/utils';
import {
  checkmark as jsxCheckmark,
  designKits as jsxDesignKits,
  stringArray as jsxStringArray,
  themer as jsxThemer } from './website/utils';



const envShouldFetch = process.env.SHOULD_FETCH;
export const SHOULD_FETCH = envShouldFetch === undefined ? true : envShouldFetch !== 'false';

export const noValue = '--';
export const issueURL = 'https://github.com/dimitropoulos/react-ui-roundup/issues/new';

/** adds framework info to all `Component`s in a `Framework` */
export const unwrapFrameworks = (frameworks: Framework[]) => (
  map(({ components, ...frameworkInfo }) => (
    map(component => ({ ...component, frameworkInfo }), components)
  ), frameworks)
);

export const removeProtocol = (repoURL: URL) => repoURL.split('://')[1];

export const getGithubFullName = (repoURL: URL) => (
  repoURL.split('github.com')[1].substring(1)
);

export const getRepoInfo = async (repoURL: URL) => {
  if (!SHOULD_FETCH) {
    return null;
  }

  if ((/github\.com/).exec(repoURL)) {
    const fullName = getGithubFullName(repoURL);
    const response = await fetch(`https://api.github.com/repos/${fullName}`);
    return (response.json()) as unknown as RepoInfo;
  }
  return null;
};

export const pipeLog = <T>(input: T) => {
  console.log(input);
  return input;
};

export const toStablePairs = <T extends { [key: string]: any }>(input: T) => (
  pipe(
    () => input,
    // @ts-expect-error ramda
    (input: T) => toPairs(input) as Entries<T>,
    entries => sortBy(head, entries) as Entries<T>,
  )()
);

// export const toStablePairs = pipe(
//   toPairs,
//   sortBy(head),
// );

export const createScrollId = (cannonicalName: string) => `${cannonicalName.replace(' ', '')}`;

export const checkmark = {
  toJsx: jsxCheckmark,
  toMarkdown: markdownCheckmark,
};

export const stringArray = {
  toJsx: jsxStringArray,
  toMarkdown: markdownStringArray,
};

export const themer = {
  toJsx: jsxThemer,
  toMarkdown: markdownThemer,
};

export const designKits = {
  toJsx: jsxDesignKits,
  toMarkdown: markdownDesignKits,
};

export const indexByOptionId = (options: Option[]) => indexBy(prop('optionId'), options);
