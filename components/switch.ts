import { ComponentInfo } from '../entities';
import { checkmark, indexByOptionId, stringArray } from '../utils';

export const switchComponent: ComponentInfo = {
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
};
