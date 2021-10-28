import { ComponentInfo } from '../components';
import { BaseComponent } from '../entities';
import { checkmark, indexByOptionId, stringArray } from '../utils';

const componentId = 'datePicker';

export interface DatePicker extends BaseComponent {
  componentId: typeof componentId;
  options: {
    clearable: boolean;
    customLocale: boolean;
    minMax: boolean;
    modes: ('day' | 'month' | 'quarter' | 'week' | 'year')[];
    presets: boolean;
    range: boolean;
    time: boolean;
  };
}

export const datePicker: ComponentInfo = {
  cannonicalName: 'DatePicker',
  componentId,
  description: 'Users select a date or date range using a date picker.',
  indefiniteArticle: 'a',
  optionsById: indexByOptionId([
    {
      criteria: 'Has a prop that allows the user to easily clear the date selection.',
      name: 'Clearable',
      optionId: 'clearable',
      ...checkmark,
    },
    {
      criteria: 'A developer can specify a custom locale with a prop.',
      name: 'Custom Locale',
      optionId: 'customLocale',
      ...checkmark,
    },
    {
      criteria: 'Allows a devloper to easily set a minimum and maximum date.',
      name: 'Min/Max',
      optionId: 'minMax',
      ...checkmark,
    },
    {
      criteria: 'Allows users to quickly select from different magnituteds of lengths of time.',
      name: 'Modes',
      optionId: 'modes',
      ...stringArray,
    },
    {
      criteria: 'A super simple way exists to provide the user with preset dates (e.g. "Today", "Last Week", , "Past 3 years").',
      name: 'Presets',
      optionId: 'presets',
      ...checkmark,
    },
    {
      criteria: 'An out-of-the-box solution exists for allowing the user to select date ranges.',
      name: 'Range',
      optionId: 'range',
      ...checkmark,
    },
    {
      criteria: 'Users are able to input times.',
      name: 'Time',
      optionId: 'time',
      ...checkmark,
    },
  ]),
};
