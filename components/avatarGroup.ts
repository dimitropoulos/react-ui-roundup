import { ComponentInfo } from '../components';
import { BaseComponent } from '../entities';
import { checkmark, indexByOptionId } from '../utils';

const componentId = 'avatarGroup';

export interface AvatarGroup extends BaseComponent {
  componentId: typeof componentId;
  options: {
    expandableGroup: boolean;
    maxCount: boolean;
  };
}

export const avatarGroup: ComponentInfo = {
  cannonicalName: 'AvatarGroup',
  componentId,
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
};