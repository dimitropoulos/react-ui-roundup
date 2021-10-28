import { ComponentInfo } from '../components';
import { BaseComponent } from '../entities';
import { checkmark, indexByOptionId } from '../utils';

const componentId = 'tabs';

export interface Tabs extends BaseComponent {
  componentId: typeof componentId;
  options: {
    canBeVertical: boolean;
  };
}

export const tabs: ComponentInfo = {
  cannonicalName: 'Tabs',
  componentId,
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
};
