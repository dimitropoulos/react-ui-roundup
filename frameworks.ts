import { ascend, indexBy, pipe, prop, sort, sortBy, toLower } from 'ramda';
import { ReactNode } from 'react';

import { Component } from './components';
import { Sentence, URL } from './entities';
import { antDesign } from './frameworks/antDesign';
import { atlaskit } from './frameworks/atlaskit';
import { blueprint } from './frameworks/blueprint';
import { carbonDesign } from './frameworks/carbonDesign';
import { chakra } from './frameworks/chakraUI';
import { elasticUI } from './frameworks/elasticUI';
import { element } from './frameworks/element';
import { elementalUI } from './frameworks/elementalUI';
import { evergreen } from './frameworks/evergreen';
import { fluentUI } from './frameworks/fluentUI';
import { gestalt } from './frameworks/gestalt';
import { grommet } from './frameworks/grommet';
import { materialUI } from './frameworks/materialUI';
import { onsenUI } from './frameworks/onsenUI';
import { orbit } from './frameworks/orbit';
import { primeReact } from './frameworks/primeReact';
import { quasar } from './frameworks/quasar';
import { reactBootstrap } from './frameworks/reactBootstrap';
import { reactMD } from './frameworks/reactMD';
import { reactToolbox } from './frameworks/reactToolbox';
import { ringUI } from './frameworks/ringUI';
import { semanticUI } from './frameworks/semanticUI';
import { smoothUI } from './frameworks/smoothUI';
import { zendesk } from './frameworks/zendesk';
import { checkmark, designKits, themer } from './utils';

export type FrameworkId = string;
export interface Framework {
  /** must not end with a trailing forward slash */
  frameworkHomepage: string;

  frameworkId: FrameworkId;

  frameworkName: string;

  repoURL: URL;

  components: Component[];

  frameworkFeaturesById: FrameworkFeaturesById;
}

export const frameworks: Framework[] = sort(ascend(pipe(prop('frameworkName'), toLower)), [
  antDesign,
  atlaskit,
  blueprint,
  carbonDesign,
  chakra,
  elasticUI,
  element,
  elementalUI,
  evergreen,
  fluentUI,
  gestalt,
  grommet,
  materialUI,
  onsenUI,
  orbit,
  primeReact,
  quasar,
  reactBootstrap,
  reactMD,
  reactToolbox,
  ringUI,
  semanticUI,
  smoothUI,
  zendesk,
]);

export type FrameworksById = {
  [frameworkId in FrameworkId]: Framework;
};

export const frameworksById: FrameworksById = indexBy(prop('frameworkId'), frameworks);

export interface DesignKit {
  type: 'Abstract' | 'Adobe XD' | 'Axure' | 'Custom' | 'Figma' | 'Framer X' | 'Sketch';
  href: URL;
}

export interface FrameworkFeaturesById {
  /** criteria: an out-of-the-box dark mode */
  darkMode: boolean;

  /** criteria: a design kit supported by the developers */
  designKits: DesignKit[] | false;

  /** criteria: out-of-the-box support for right-to-left */
  rtlSupport: boolean;

  themer: URL | false;

  /** criteria: high quality and up to date (in the repo, not on DefinitelyTyped) TypeScript types, or the app is written in TypeScript. */
  typeScript: boolean;
}

export interface FrameworkFeatureInfoGeneric<T extends keyof FrameworkFeaturesById> {
  featureId: T;
  criteria: Sentence;
  name: string;
  toJsx: (input: FrameworkFeaturesById[T]) => ReactNode | string;
  toMarkdown: (input: FrameworkFeaturesById[T]) => string;
}

export type FrameworkFeatureInfo =
  | FrameworkFeatureInfoGeneric<'darkMode'>
  | FrameworkFeatureInfoGeneric<'designKits'>
  | FrameworkFeatureInfoGeneric<'rtlSupport'>
  | FrameworkFeatureInfoGeneric<'themer'>
  | FrameworkFeatureInfoGeneric<'typeScript'>;


export const frameworkInfo: FrameworkFeatureInfo[] = sortBy(prop('featureId'), [
  {
    criteria: 'The project is made with dark-mode styling in mind.  An out-of-the-box dark mode is either used on the docs site itself or well documented and easy to configure.',
    featureId: 'darkMode',
    name: 'Native Dark Mode',
    ...checkmark,
  },
  {
    criteria: 'Ready-made resources exist for designers such as Sketch or Figma download packs.',
    featureId: 'designKits',
    name: 'Design Kits',
    ...designKits,
  },
  {
    criteria: 'Explicit right-to-Left support for use in apps with languages like Arabic, Hebrew, or Persian.',
    featureId: 'rtlSupport',
    name: 'RTL Support',
    ...checkmark,
  },
  {
    criteria: 'A user-interactable theming area where designers and developers can play around with look and feel without needing to do any programming.',
    featureId: 'themer',
    name: 'Themer',
    ...themer,
  },
  {
    criteria: 'Is either written in TypeScript (ideally) or has TypeScript definitions directly in the project.  DefinitelyTyped does not qualify.',
    featureId: 'typeScript',
    name: 'Native TypeScript',
    ...checkmark,
  },
]);


export type FrameworkInfoByFeatureId = {
  [featureId in keyof FrameworkFeaturesById]: FrameworkFeatureInfo;
};

export const frameworkInfoByFeatureId: FrameworkInfoByFeatureId = indexBy(prop('featureId'), frameworkInfo);
