import { ComponentInfo } from '../entities';
import { checkmark, indexByOptionId } from '../utils';

export const select: ComponentInfo = {
  cannonicalName: 'Select',
  componentId: 'select',
  description: 'A Select allows a user to select a value from a series of options.  Much more advanced than the native HTML select.',
  indefiniteArticle: 'a',
  optionsById: indexByOptionId([
    {
      criteria: 'Has support fo async-loaded lists (for example, a loading state).',
      name: 'Async',
      optionId: 'async',
      ...checkmark,
    },
    {
      criteria: 'The whole select be disabled with a built-in prop.',
      name: 'Disabled',
      optionId: 'disabled',
      ...checkmark,
    },
    {
      criteria: 'Individual options can be easily disabled with a prop.',
      name: 'Disabled Options',
      optionId: 'disabledOptions',
      ...checkmark,
    },
    {
      criteria: 'Filter the options of the select with keyboard input.',
      name: 'Filterable',
      optionId: 'filterable',
      ...checkmark,
    },
    {
      criteria: 'Can group the options into sub sections within the options list.',
      name: 'Groupable',
      optionId: 'groupable',
      ...checkmark,
    },
  ]),
};
