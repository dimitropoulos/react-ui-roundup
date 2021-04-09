import { Link } from '@material-ui/core';
import { indexBy, prop, sortBy } from 'ramda';
import React, { Fragment } from 'react';

import { ComponentInfo, Option } from './entities';
import {
  checkmark as markdownCheckmark,
  link,
  stringArray as markdownStringArray,
} from './markdown/utils';
import {
  checkmark as jsxCheckmark,
  stringArray as jsxStringArray,
} from './website/utils';

const checkmark = {
  toJsx: jsxCheckmark,
  toMarkdown: markdownCheckmark,
};

const stringArray = {
  toJsx: jsxStringArray,
  toMarkdown: markdownStringArray,
};

const indexByOptionId = indexBy<Option>(prop('optionId'));

export const componentInfo: ComponentInfo[] = sortBy(prop('componentId'), [
  {
    cannonicalName: 'Alert',
    componentId: 'alert',
    description: 'Alerts are used to show an important message to users.',
    indefiniteArticle: 'an',
    optionsById: indexByOptionId([
      {
        criteria: 'The alert has ready-made variations.',
        name: 'Types',
        optionId: 'types',
        ...stringArray,
      },
      {
        criteria: 'The alert has an "out of the box" way to dismiss, usually with an `onClose` prop.',
        name: 'Closable',
        optionId: 'closable',
        ...checkmark,
      },
    ]),
  },
  {
    cannonicalName: 'Avatar',
    componentId: 'avatar',
    description: 'Avatars can be used to represent people or objects.',
    indefiniteArticle: 'an',
    optionsById: indexByOptionId([
      {
        criteria: 'A custom badge or status is available or easily configurable.',
        name: 'Badge',
        optionId: 'badge',
        ...checkmark,
      },
      {
        criteria: 'Avatars can be easily formed into different styles using a prop or similar mechanism (not custom CSS).',
        name: 'Shapes',
        optionId: 'shapes',
        ...stringArray,
      },
      {
        criteria: 'Avatars can be easily sized between different (and consistent) major sizes.',
        name: 'Sizes',
        optionId: 'sizes',
        ...stringArray,
      },
      {
        criteria: 'Avatars can be presented to users as icons (i.e. generic fallback illustrations), custom images, or can contain text.',
        name: 'Types',
        optionId: 'types',
        ...stringArray,
      },
    ]),
  },
  {
    cannonicalName: 'AvatarGroup',
    componentId: 'avatarGroup',
    description: 'AvatarGroups stack a set of Avatars into a customized list, often with customized animations and options.',
    indefiniteArticle: 'an',
    optionsById: indexByOptionId([
      {
        criteria: 'Avatar groups support expandable lists where a user can click to see more members in the list.',
        name: 'Expandable Group',
        optionId: 'expandableGroup',
        ...checkmark,
      },
      {
        criteria: 'A custom number can be set representing the number of avatars shown.',
        name: 'Max Count',
        optionId: 'maxCount',
        ...checkmark,
      },
    ]),
  },
  {
    cannonicalName: 'Button',
    componentId: 'button',
    description: 'Users trigger actions by clicking on buttons.',
    indefiniteArticle: 'a',
    optionsById: indexByOptionId([
      {
        criteria: 'The button can be easily sized between different (and consistent) major sizes.',
        name: 'Sizes',
        optionId: 'sizes',
        ...stringArray,
      },
      {
        criteria: 'The button has a pre-made loading state for asynchronous events.',
        name: 'Loading',
        optionId: 'loading',
        ...checkmark,
      },
      {
        criteria: 'An icon can be included either at the left or right of the text, or button can be used with just an icon and no text (notated as `only`).',
        name: 'Icon',
        optionId: 'icon',
        ...stringArray,
      },
      {
        criteria: 'A ButtonGroup component exists in the library, or other such pre-made methods for making button groups.',
        name: 'Groupable',
        optionId: 'groupable',
        ...checkmark,
      },
      {
        criteria: 'A `disabled` prop exists for use in situations where the user cannot interact with the button.',
        name: 'Disabled',
        optionId: 'disabled',
        ...checkmark,
      },
    ]),
  },
  {
    cannonicalName: 'Checkbox',
    componentId: 'checkbox',
    description: 'Users toggle between checked, unchecked (or indeterminate) values with checkboxes.',
    indefiniteArticle: 'a',
    optionsById: indexByOptionId([
      {
        criteria: 'A custom icon can be provided in place of the checkbox itself via a prop or a child.',
        name: 'Custom Icon',
        optionId: 'customIcon',
        ...checkmark,
      },
      {
        criteria: 'The checkbox has a `disabled` state, indicating the user cannot interact with it',
        name: 'Disabled',
        optionId: 'disabled',
        ...checkmark,
      },
      {
        criteria: 'The checkbox has an indeterminate state.',
        name: 'Indeterminate',
        optionId: 'indeterminate',
        ...checkmark,
      },
      {
        criteria: 'The checkbox has an `invalid` or `error` state.',
        name: 'Invalid',
        optionId: 'invalid',
        ...checkmark,
      },
      {
        criteria: 'The text can be positioned at different places around the checkbox.',
        name: 'Label Placement',
        optionId: 'labelPlacement',
        ...stringArray,
      },
    ]),
  },
  {
    cannonicalName: 'DatePicker',
    componentId: 'datePicker',
    description: 'Users select a date or date range using a date picker.',
    indefiniteArticle: 'a',
    optionsById: indexByOptionId([
      {
        criteria: 'Has a prop that allows the user to easily clear the date selection.',
        name: 'Clearable',
        optionId: 'clearable',
        ...checkmark,
      },
      {
        criteria: 'A developer can specify a custom locale with a prop.',
        name: 'Custom Locale',
        optionId: 'customLocale',
        ...checkmark,
      },
      {
        criteria: 'Allows a devloper to easily set a minimum and maximum date.',
        name: 'Min/Max',
        optionId: 'minMax',
        ...checkmark,
      },
      {
        criteria: 'Allows users to quickly select from different magnituteds of lengths of time.',
        name: 'Modes',
        optionId: 'modes',
        ...stringArray,
      },
      {
        criteria: 'A super simple way exists to provide the user with preset dates (e.g. "Today", "Last Week", , "Past 3 years").',
        name: 'Presets',
        optionId: 'presets',
        ...checkmark,
      },
      {
        criteria: 'An out-of-the-box solution exists for allowing the user to select date ranges.',
        name: 'Range',
        optionId: 'range',
        ...checkmark,
      },
      {
        criteria: 'Users are able to input times.',
        name: 'Time',
        optionId: 'time',
        ...checkmark,
      },
    ]),
  },
  {
    cannonicalName: 'ErrorBoundary',
    componentId: 'errorBoundary',
    description: {
      jsx: <Fragment><Link href="https://reactjs.org/docs/error-boundaries.html">ErrorBoundaries</Link> are a React 16+ specific feature that uses the <Link href="https://reactjs.org/docs/react-component.html#componentdidcatch">componentDidCatch</Link> API for handling uncaught errors without unmounting the whole React component tree.</Fragment>,
      markdown: `${link({ href: 'https://reactjs.org/docs/error-boundaries.html', text: 'ErrorBoundaries' })} are a React 16+ specific feature that uses the ${link({ href: 'https://reactjs.org/docs/react-component.html#componentdidcatch', text: 'componentDidCatch' })} API for handling uncaught errors without unmounting the whole React component tree.`,
    },
    indefiniteArticle: 'an',
    optionsById: indexByOptionId([
      {
        criteria: 'Has a prop or props that can be used to provide a custom title and/or description (as a string, not a ReactNode).',
        name: 'Custom Text',
        optionId: 'customText',
        ...checkmark,
      },
      {
        criteria: 'Has a prop that can be used to provide a custom ReactNode fallback that does not receive the date of `componentDidCatch`.',
        name: 'Drop-In JSX Fallback',
        optionId: 'dropInFallback',
        ...checkmark,
      },
      {
        criteria: 'Has a prop that can be used to provide a custom ReactNode for fallback which receives the data of `componentDidCatch`.',
        name: 'Wrapper JSX Fallback',
        optionId: 'wrapperFallback',
        ...checkmark,
      },
    ]),
  },
  {
    cannonicalName: 'Stepper',
    componentId: 'stepper',
    description: 'Navigation that guides users through the steps of a task.',
    indefiniteArticle: 'a',
    optionsById: indexByOptionId([
      {
        criteria: 'The steps can be stacked vertically.',
        name: 'Can Be Vertical',
        optionId: 'canBeVertical',
        ...checkmark,
      },
      {
        criteria: 'A user can click on the step itself to navigate.',
        name: 'Clickable',
        optionId: 'clickable',
        ...checkmark,
      },
      {
        criteria: 'A step can have a subtext with a description.',
        name: 'Step Description',
        optionId: 'stepDescription',
        ...checkmark,
      },
      {
        criteria: 'A step with an error can be easily identified to the user.',
        name: 'Step Error',
        optionId: 'stepError',
        ...checkmark,
      },
      {
        criteria: 'The steps have a prop whereby they can be given custom icons.',
        name: 'Step Icon',
        optionId: 'stepIcon',
        ...checkmark,
      },
    ]),
  },
  {
    cannonicalName: 'Switch',
    componentId: 'switch',
    description: 'Used to toggle between two states: on and off.',
    indefiniteArticle: 'a',
    optionsById: indexByOptionId([
      {
        criteria: 'The switch has a `disabled` state, indicating that the user cannot interact with it.',
        name: 'Disabled',
        optionId: 'disabled',
        ...checkmark,
      },
      {
        criteria: 'The switch has an ability to display an indeterminate state.',
        name: 'Indeterminate',
        optionId: 'indeterminate',
        ...checkmark,
      },
      {
        criteria: 'The switch has a prop (or child) to include custom icons within the space of the switch (e.g. a `checkmark` and an `x` icon).',
        name: 'Internal Icons',
        optionId: 'internalIcons',
        ...checkmark,
      },
      {
        criteria: 'The switch has a prop (or child) to include custom text within the space of the switch (e.g. the text `on` and `off`).',
        name: 'Internal Text',
        optionId: 'internalText',
        ...checkmark,
      },
      {
        criteria: 'Where a label can be attached to the switch.',
        name: 'Lable Placement',
        optionId: 'labelPlacement',
        ...stringArray,
      },
      {
        criteria: 'The switch has a `loading` state that indicates a pending state of a switch action.',
        name: 'Loading',
        optionId: 'loading',
        ...checkmark,
      },
      {
        criteria: 'The lable has native, pre-configured size options.',
        name: 'Sizes',
        optionId: 'sizes',
        ...stringArray,
      },
    ]),
  },
  {
    cannonicalName: 'Tabs',
    componentId: 'tabs',
    description: 'Users switch between different views with tabs.',
    indefiniteArticle: 'a',
    optionsById: indexByOptionId([
      {
        criteria: 'The tabs can be stacked vertically.',
        name: 'Can Be Vertical',
        optionId: 'canBeVertical',
        ...checkmark,
      },
    ]),
  },
]);

export const componentInfoById = indexBy(prop('componentId'), componentInfo);
