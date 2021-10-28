import { ComponentInfo } from '../components';
import { BaseComponent } from '../entities';
import { checkmark, indexByOptionId, stringArray } from '../utils';

const componentId = 'checkbox';

export interface Checkbox extends BaseComponent {
  componentId: typeof componentId;
  options: {
    customIcon: boolean;
    disabled: boolean;
    indeterminate: boolean;
    invalid: boolean;
    labelPlacement: ('above' | 'below' | 'left' | 'right')[];
  };
}

export const checkbox: ComponentInfo = {
  cannonicalName: 'Checkbox',
  componentId,
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
      criteria: 'The checkbox has a `disabled` state, indicating the user cannot interact with it.',
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
};
