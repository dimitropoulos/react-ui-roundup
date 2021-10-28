import { ComponentInfo } from '../components';
import { BaseComponent } from '../entities';
import { checkmark, indexByOptionId, stringArray } from '../utils';

const componentId = 'avatar';

export interface Avatar extends BaseComponent {
  componentId: typeof componentId;
  options: {
    badge: boolean;
    shapes: ('circle' | 'rounded-square' | 'square')[] | null;
    sizes: string[] | null;
    types: ('icon' | 'image' | 'text')[] | null;
  };
}

export const avatar: ComponentInfo = {
  cannonicalName: 'Avatar',
  componentId,
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
};
