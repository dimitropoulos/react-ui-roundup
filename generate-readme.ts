import { chain, map, pipe, filter, whereEq, values, sortBy, prop, pluck, indexBy } from 'ramda';
import { compact } from 'ramda-adjunct';
import { componentInfo } from './components';
import { frameworks, frameworkInfo, frameworksById } from './frameworks';
import { writeFile } from 'fs';
import { lines, h1, h2, link, p, table, disclaimerLines, website, disclaimer, criteria } from './markdownUtils';
import { removeProtocol, getRepoInfo, noValue, toStablePairs } from './utils';
import { Component, Framework } from './entities';

const headerMarkdown = disclaimerLines([
  h1('React UI Roundup'),
  p('Are you a frontend developer or designer?  Do you wish you had a one-stop-shop you could go to see the various implementations of common components?  If so - React UI Roundup is for you!'),
  p(`An even more better version of this exact document is available at ${website}.  It has special "Open All" buttons that allow you to open every link in a table with one click!`)
])

const frameworksSectionMarkdown = (repoInfo: any) => disclaimerLines([
  h2('Framework Stats'),
  table({
    headers: [
      'Name',
      'Homepage',
      'Repository',
      'Stars',
      'Forks',
      'Issues',
      'License',
    ],
    rows: map(({ frameworkName, frameworkHomepage, repoURL }) => [
      frameworkName,
      link({ text: removeProtocol(frameworkHomepage), href: frameworkHomepage }),
      link({ text: removeProtocol(repoURL).replace(/github\.com\//, ''), href: repoURL }),
      repoInfo[repoURL]?.stargazers_count?.toLocaleString() ?? noValue,
      repoInfo[repoURL]?.forks_count?.toLocaleString() ?? noValue,
      repoInfo[repoURL]?.open_issues_count?.toLocaleString() ?? noValue,
      repoInfo[repoURL]?.license?.name?.replace(/ License/, '') ?? noValue,
    ], frameworks),
  }),
]);

const frameworkFeaturesSectionMarkdown = disclaimerLines([
  h2('Framework Features'),
  criteria(map(({ name, criteria }) => [name, criteria], frameworkInfo)),
  table({
    headers: [
      'Name',
      ...pluck('name', frameworkInfo),
    ],
    rows: map(({ frameworkName, frameworkFeaturesById }) => [
      frameworkName,
      ...map(({ toMarkdown, featureId }) => (
        // @ts-ignore @ROBBBBBBBBBBBBBBB
        toMarkdown(frameworkFeaturesById[featureId])
      ), frameworkInfo),
    ], frameworks),
  })
])

const frameworksMarkdown = (repoInfo: any) => disclaimerLines([
  h1('Frameworks'),
  frameworksSectionMarkdown(repoInfo),
  frameworkFeaturesSectionMarkdown,
]);

const componentsMarkdown = disclaimerLines([
  h1('Components'),
  ...chain(({ componentId, cannonicalName, optionsById }) => {
    const optionsArray = pipe(
      values,
      sortBy(prop('name')),
    )(optionsById);

    const headers = [
      'Framework',
      'Name',
      ...pluck('name', optionsArray),
    ];

    const rows = pipe(
      chain<Framework, Component & Pick<Framework, 'frameworkName'>>(({ components, frameworkName }) => (
        map(component => ({ ...component, frameworkName }), components)
      )),
      filter(whereEq({ componentId })),
      map(({ componentName, frameworkName, componentURL, options }) => [
        frameworkName,
        link({ text: componentName, href: componentURL }),
        // @ts-ignore @ROBBBBBBBBBBBBBBB
        ...map(({ optionId, toMarkdown }) => toMarkdown(options[optionId]), optionsArray),
      ]),
    )(frameworks);

    return [
      disclaimer,
      h2(cannonicalName),
      criteria(map(([key, value]) => (
        [value.name, value.criteria]
      ), toStablePairs(optionsById))),
      table({
        headers,
        rows,
      }),
    ];
  }, componentInfo),
]);

const fetchAll = async () => {
  const repoInfo = await Promise.all(
    map(({ repoURL }) => getRepoInfo(repoURL), frameworks)
  );

  const readme = lines([
    headerMarkdown,
    frameworksMarkdown(indexBy(prop('html_url'), compact(repoInfo))),
    componentsMarkdown,
  ]);

  writeFile('README.md', readme, error => {
    if (error) {
      return console.error(error);
    }
  });
};

fetchAll();
