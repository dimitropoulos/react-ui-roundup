import { ComponentInfo } from '../components';
import { BaseComponent } from '../entities';
import { checkmark, indexByOptionId, stringArray } from '../utils';

const componentId = 'alert';

export interface Alert extends BaseComponent {
  componentId: typeof componentId;
  options: {
    closable: boolean;
    types: string[] | null;
  };
}

export const alertComponent: ComponentInfo = {
  cannonicalName: 'Alert',
  componentId,
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
};
