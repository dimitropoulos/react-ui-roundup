import { ComponentInfo } from '../entities';
import { checkmark, indexByOptionId } from '../utils';

export const tabs: ComponentInfo = {
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
};
