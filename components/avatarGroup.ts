import { ComponentInfo } from '../entities';
import { checkmark, indexByOptionId } from '../utils';

export const avatarGroup: ComponentInfo = {
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
};
