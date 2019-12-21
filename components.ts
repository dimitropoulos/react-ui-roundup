import { indexBy, prop, sortBy } from 'ramda';
import { ComponentInfo, Option } from './entities';
import {
  stringArray as markdownStringArray,
  checkmark as markdownCheckmark,
} from './markdownUtils';
import {
  checkmark as jsxCheckmark,
  stringArray as jsxStringArray,
} from './common';

const indexByOptionId = indexBy<Option>(prop('optionId'))


export const componentInfo: ComponentInfo[] = sortBy(prop('componentId'), [
  {
    componentId: 'alert',
    cannonicalName: 'Alert',
    optionsById: indexByOptionId([
      {
        name: 'Types',
        optionId: 'types',
        toJsx: jsxStringArray,
        toMarkdown: markdownStringArray,
      },
      {
        name: 'Closable',
        optionId: 'closable',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
    ]),
  },
  {
    componentId: 'button',
    cannonicalName: 'Button',
    optionsById: indexByOptionId([
      {
        name: 'Sizes',
        optionId: 'sizes',
        toJsx: jsxStringArray,
        toMarkdown: markdownStringArray,
      },
    ]),
  },
  {
    componentId: 'tabs',
    cannonicalName: 'Tabs',
    optionsById: indexByOptionId([
      {
        name: 'Can Be Vertical',
        optionId: 'canBeVertical',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
    ]),
  },
]);

export const componentInfoById = indexBy(prop('componentId'), componentInfo);