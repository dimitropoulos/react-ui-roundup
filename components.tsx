import React, { Fragment } from 'react';
import { indexBy, prop, sortBy } from 'ramda';
import { ComponentInfo, Option } from './entities';
import {
  stringArray as markdownStringArray,
  checkmark as markdownCheckmark,
  link,
} from './markdown/utils';
import {
  checkmark as jsxCheckmark,
  stringArray as jsxStringArray,
} from './website/utils';
import { Link } from '@material-ui/core';

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
    cannonicalName: 'Button',
    componentId: 'button',
    description: 'Users trigger actions by clicking on buttons.',
    indefiniteArticle: 'a',
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
    cannonicalName: 'Checkbox',
    componentId: 'checkbox',
    description: 'Users toggle between checked, unchecked (or indeterminate) values with checkboxes.',
    indefiniteArticle: 'a',
    optionsById: indexByOptionId([
      {
        criteria: 'A custom icon can be provided in place of the checkbox itself via a prop or a child.',
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
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'Has a prop that can be used to provide a custom ReactNode fallback that does not receive the date of `componentDidCatch`.',
        name: 'Drop-In JSX Fallback',
        optionId: 'dropInFallback',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'Has a prop that can be used to provide a custom ReactNode for fallback which receives the data of `componentDidCatch`.',
        name: 'Wrapper JSX Fallback',
        optionId: 'wrapperFallback',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
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
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'A user can click on the step itself to navigate.',
        name: 'Clickable',
        optionId: 'clickable',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'A step can have a subtext with a description.',
        name: 'Step Description',
        optionId: 'stepDescription',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'A step with an error can be easily identified to the user.',
        name: 'Step Error',
        optionId: 'stepError',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'The steps have a prop whereby they can be given custom icons.',
        name: 'Step Icon',
        optionId: 'stepIcon',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
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
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'The switch has an ability to display an indeterminate state.',
        name: 'Indeterminate',
        optionId: 'indeterminate',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'The switch has a prop (or child) to include custom icons within the space of the switch (e.g. a `checkmark` and an `x` icon).',
        name: 'Internal Icons',
        optionId: 'internalIcons',
        toJsx: jsxCheckmark,
        toMarkdown: markdownCheckmark,
      },
      {
        criteria: 'The switch has a prop (or child) to include custom text within the space of the switch (e.g. the text `on` and `off`).',
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
    cannonicalName: 'Tabs',
    componentId: 'tabs',
    description: 'Users switch between different views with tabs.',
    indefiniteArticle: 'a',
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
