import { ComponentInfo } from '../entities';
import { checkmark, indexByOptionId, stringArray } from '../utils';

export const button: ComponentInfo = {
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
};
