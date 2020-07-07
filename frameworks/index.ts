import { Framework, FrameworkFeatureInfo } from '../entities';
import { indexBy, prop, sort, ascend, sortBy, toLower, pipe } from 'ramda';

import { antDesign } from './antDesign';
import { atlaskit } from './atlaskit';
import { blueprint } from './blueprint';
import { carbonDesign } from './carbonDesign';
import { chakra } from './chakraUI';
import { elasticUI } from './elasticUI';
import { element } from './element';
import { elementalUI } from './elementalUI';
import { evergreen } from './evergreen';
import { gestalt } from './gestalt';
import { grommet } from './grommet';
import { materialUI } from './materialUI';
import { onsenUI } from './onsenUI';
import { orbit } from './orbit';
import { primeReact } from './primeReact';
import { quasar } from './quasar';
import { reactBootstrap } from './reactBootstrap';
import { reactMD } from './reactMD';
import { reactToolbox } from './reactToolbox';
import { ringUI } from './ringUI';
import { semanticUI } from './semanticUI';
import { smoothUI } from './smoothUI';
import { uiFabric } from './uiFabric';
import { zendesk } from './zendesk';

import {
  checkmark as markdownCheckmark,
  themer as markdownThemer,
  designKits as markdownDesignKits
} from '../markdown/utils';
import {
  checkmark as jsxCheckmark,
  themer as jsxThemer,
  designKits as jsxDesignKits,
} from '../website/utils';

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
  uiFabric,
  zendesk,
]);

export const frameworksById = indexBy(prop('frameworkId'), frameworks);

export const frameworkInfo: FrameworkFeatureInfo[] = sortBy(prop('featureId'), [
  {
    featureId: 'darkMode',
    criteria: 'The project is made with dark-mode styling in mind.  An out-of-the-box dark mode is either used on the docs site itself or well documented and easy to configure.',
    name: 'Native Dark Mode',
    toJsx: jsxCheckmark,
    toMarkdown: markdownCheckmark,
  },
  {
    featureId: 'designKits',
    criteria: 'Ready-made resources exist for designers such as Sketch or Figma download packs.',
    name: 'Design Kits',
    toJsx: jsxDesignKits,
    toMarkdown: markdownDesignKits,
  },
  {
    featureId: 'rtlSupport',
    criteria: 'Explicit right-to-Left support for use in apps with languages like Arabic, Hebrew, or Persian.',
    name: 'RTL Support',
    toJsx: jsxCheckmark,
    toMarkdown: markdownCheckmark,
  },
  {
    featureId: 'themer',
    criteria: 'A user-interactable theming area where designers and developers can play around with look and feel without needing to do any programming.',
    name: 'Themer',
    toJsx: jsxThemer,
    toMarkdown: markdownThemer,
  },
  {
    featureId: 'typeScript',
    criteria: 'Is either written in TypeScript (ideally) or has TypeScript definitions directly in the project.  DefinitelyTyped does not qualify.',
    name: 'Native TypeScript',
    toJsx: jsxCheckmark,
    toMarkdown: markdownCheckmark,
  },
]);

export const frameworkInfoById = indexBy(prop('featureId'), frameworkInfo);
