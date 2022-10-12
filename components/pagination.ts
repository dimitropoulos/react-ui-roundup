import { ComponentInfo } from '../components';
import { BaseComponent } from '../entities';
import { checkmark, indexByOptionId, stringArray } from '../utils';

const componentId = 'pagination';

export interface Pagination extends BaseComponent {
  componentId: typeof componentId;
  options: {
    compact: boolean;
    edgePages: boolean;
    firstLast: boolean;
    numPages: boolean;
    pageSize: boolean;
    style: ('items' | 'pages')[];
  };
}

export const pagination: ComponentInfo = {
  cannonicalName: 'Pagination',
  componentId,
  description: 'Pagination allows long lists to be divided into several pages.',
  indefiniteArticle: 'a',
  optionsById: indexByOptionId([
    {
      criteria: 'Has a mode that greatly conserves horizontal space, likely by omitting multiple page selectors.',
      name: 'Compact',
      optionId: 'compact',
      ...checkmark,
    },
    {
      criteria: 'Allows configuring the number of items that will be shown at the beginning and end of the range.',
      name: 'Edge #',
      optionId: 'edgePages',
      ...checkmark,
    },
    {
      criteria: 'Has ready-made functionality to allow users to quickly select first and last pages (either with a stationary page number or a dedicated button).',
      name: 'First/Last',
      optionId: 'firstLast',
      ...checkmark,
    },
    {
      criteria: 'Allows the number of page items shown to be configurable.',
      name: '# of Pages',
      optionId: 'numPages',
      ...checkmark,
    },
    {
      criteria: 'Allows configuring the number of items that will be shown per page.',
      name: 'Page Size',
      optionId: 'pageSize',
      ...checkmark,
    },
    {
      criteria: 'Has an API the is oriented around pages (but disregards pages) or items (and figures out pages automatically).',
      name: 'Style',
      optionId: 'style',
      ...stringArray,
    },
  ]),
};
