import { indexBy, prop, sortBy } from 'ramda';
import { ComponentInfo, Option } from './entities';
import {
  stringArray as markdownStringArray,
  checkmark as markdownCheckmark,
} from './markdown/utils';
import {
  checkmark as jsxCheckmark,
  stringArray as jsxStringArray,
} from './website/utils';

const indexByOptionId = indexBy<Option>(prop('optionId'))

export const componentInfo: ComponentInfo[] = sortBy(prop('componentId'), [
  {
    componentId: 'alert',
    cannonicalName: 'Alert',
    indefiniteArticle: 'an',
    description: 'used to show an important message to users',
    optionsById: indexByOptionId([
      {
        criteria: 'The alert has ready-made variations.',
        name: 'Types',
        optionId: 'types',
        toJsx: jsxStringArray,
        toMarkdown: markdownStringArray,
      },
      {
        criteria: 'The alert has an "out of the box" way to dismiss, usually with an `onClose` prop.',
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
    indefiniteArticle: 'a',
    description: 'users trigger actions by clicking on buttons',
    optionsById: indexByOptionId([
      {
        criteria: 'The button can be easily sized between different (and consistent) major sizes.',
        name: 'Sizes',
        optionId: 'sizes',
        toJsx: jsxStringArray,
        toMarkdown: markdownStringArray,
      },
      {
        criteria: 'The button has a pre-made loading state for asynchronous events.',
        name: 'Loading',
        optionId: 'loading',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'An icon can be included either at the left or right of the text, or button can be used with just an icon and no text (notated as `only`).',
        name: 'Icon',
        optionId: 'icon',
        toJsx: jsxStringArray,
        toMarkdown: markdownStringArray,
      },
      {
        criteria: 'A ButtonGroup component exists in the library, or other such pre-made methods for making button groups.',
        name: 'Groupable',
        optionId: 'groupable',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'A `disabled` prop exists for use in situations where the user cannot interact with the button.',
        name: 'Disabled',
        optionId: 'disabled',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
    ]),
  },
  {
    componentId: 'checkbox',
    cannonicalName: 'Checkbox',
    indefiniteArticle: 'a',
    description: 'users toggle between checked, unchecked (or indeterminate) values with checkboxes',
    optionsById: indexByOptionId([
      {
        criteria: 'A custom icon can be provided in place of the checkbox itself.',
        name: 'Custom Icon',
        optionId: 'customIcon',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'The checkbox has a `disabled` state, indicating the user cannot interact with it',
        name: 'Disabled',
        optionId: 'disabled',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'The checkbox has an indeterminate state.',
        name: 'Indeterminate',
        optionId: 'indeterminate',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'The checkbox has an `invalid` or `error` state.',
        name: 'Invalid',
        optionId: 'invalid',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'The text can be positioned at different places around the checkbox.',
        name: 'Label Placement',
        optionId: 'labelPlacement',
        toJsx: jsxStringArray,
        toMarkdown: markdownStringArray,
      },
    ]),
  },
  {
    componentId: 'switch',
    cannonicalName: 'Switch',
    indefiniteArticle: 'a',
    description: 'used to toggle between two states: on and off.',
    optionsById: indexByOptionId([
      {
        criteria: 'The switch has a `disabled` state, indicating that the user cannot interact with it.',
        name: 'Disabled',
        optionId: 'disabled',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'The switch has the option to include custom icons within the space of the switch.',
        name: 'Internal Icons',
        optionId: 'internalIcons',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'The switch has the option to include custom text within the space of the switch (e.g. `on` and `off`).',
        name: 'Internal Text',
        optionId: 'internalText',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'Where a label can be attached to the switch.',
        name: 'Lable Placement',
        optionId: 'labelPlacement',
        toJsx: jsxStringArray,
        toMarkdown: markdownStringArray,
      },
      {
        criteria: 'The switch has a `loading` state that indicates a pending state of a switch action.',
        name: 'Loading',
        optionId: 'loading',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'The lable has native, pre-configured size options.',
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
    indefiniteArticle: 'a',
    description: 'users switch between different views with tabs',
    optionsById: indexByOptionId([
      {
        criteria: 'The tabs can be stacked vertically.',
        name: 'Can Be Vertical',
        optionId: 'canBeVertical',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
    ]),
  },
]);

export const componentInfoById = indexBy(prop('componentId'), componentInfo);
