import { Framework, FrameworkFeatureInfo, DesignKit, FrameworkFeaturesById } from '../entities';
import { indexBy, prop, sortBy } from 'ramda';

import { antDesign } from './antDesign';
import { atlaskit } from './atlaskit';
import { blueprint } from './blueprint';
import { carbonDesign } from './carbonDesign';
import { chakra } from './chakraUI';
import { elasticUI } from './elasticUI';
import { elementalUI } from './elementalUI';
import { evergreen } from './evergreen';
import { gestalt } from './gestalt';
import { grommet } from './grommet';
import { materialUI } from './materialUI';
import { onsenUI } from './onsenUI';
import { orbit } from './orbit';
import { primeReact } from './primeReact';
import { reactBootstrap } from './reactBootstrap';
import { reactMD } from './reactMD';
import { reactToolbox } from './reactToolbox';
import { ringUI } from './ringUI';
import { semanticUI } from './semanticUI';
import { uiFabric } from './uiFabric';
import { zendesk } from './zendesk';

import {
  checkmark as markdownCheckmark,
  themer as markdownThemer,
  designKits as markdownDesignKits
} from '../markdownUtils';
import {
  checkmark as jsxCheckmark,
  themer as jsxThemer,
  designKits as jsxDesignKits,
} from '../common';
import { noValue } from '../utils';

export const frameworks: Framework[] = sortBy(prop('frameworkName'), [
  antDesign,
  atlaskit,
  blueprint,
  carbonDesign,
  chakra,
  elasticUI,
  elementalUI,
  evergreen,
  gestalt,
  grommet,
  materialUI,
  onsenUI,
  orbit,
  primeReact,
  reactBootstrap,
  reactMD,
  reactToolbox,
  ringUI,
  semanticUI,
  uiFabric,
  zendesk,
]);

export const frameworksById = indexBy(prop('frameworkId'), frameworks);

export const frameworkInfo: FrameworkFeatureInfo[] = sortBy(prop('featureId'), [
  {
    featureId: 'darkMode',
    name: 'Native Dark Mode',
    toJsx: jsxCheckmark,
    toMarkdown: markdownCheckmark,
  },
  {
    featureId: 'designKits',
    name: 'Design Kits',
    toJsx: jsxDesignKits,
    toMarkdown: markdownDesignKits,
  },
  {
    featureId: 'rtlSupport',
    name: 'RTL Support',
    toJsx: jsxCheckmark,
    toMarkdown: markdownCheckmark,
  },
  {
    featureId: 'themer',
    name: 'Themer',
    toJsx: jsxThemer,
    toMarkdown: markdownThemer,
  },
  {
    featureId: 'typeScript',
    name: 'Native TypeScript',
    toJsx: jsxCheckmark,
    toMarkdown: markdownCheckmark,
  },
]);

export const frameworkInfoById = indexBy(prop('featureId'), frameworkInfo);
