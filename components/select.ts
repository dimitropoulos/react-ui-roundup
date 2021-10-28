import { ComponentInfo } from '../components';
import { BaseComponent } from '../entities';
import { checkmark, indexByOptionId, stringArray } from '../utils';

const componentId = 'select';

export interface Select extends BaseComponent {
  componentId: typeof componentId;
  options: {
    async: boolean;
    disabled: boolean;
    disabledOptions: boolean;
    filterable: boolean;
    groupable: boolean;
    icons: ('composable' | 'end' | 'start')[];
  };
}

export const select: ComponentInfo = {
  cannonicalName: 'Select',
  componentId,
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
    {
      criteria: 'Has out-of-the-box (i.e. props) support for start or end icons (or can easily be composed with icons and has examples of such on the docs).',
      name: 'Icons',
      optionId: 'icons',
      ...stringArray,
    },
  ]),
};
