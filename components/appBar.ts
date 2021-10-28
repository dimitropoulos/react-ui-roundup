import { ComponentInfo } from '../components';
import { BaseComponent } from '../entities';
import { checkmark, indexByOptionId, stringArray } from '../utils';

const componentId = 'appBar';

export interface AppBar extends BaseComponent {
  componentId: typeof componentId;
  options: {
    api: ('children' | 'customComponents' | 'props')[];
    denseMode: boolean;
    sticky: boolean;
    themeMode: boolean;
  };
}

export const appBarComponent: ComponentInfo = {
  cannonicalName: 'App Bar',
  componentId,
  description: 'The App Bar displays information and actions relating to the current screen.',
  indefiniteArticle: 'an',
  optionsById: indexByOptionId([
    {
      criteria: 'The API style used for the components contained within the App Bar.',
      name: 'API',
      optionId: 'api',
      ...stringArray,
    },
    {
      criteria: 'There is a built-in way to make the bar take up less vertical space.',
      name: 'Dense',
      optionId: 'denseMode',
      ...checkmark,
    },
    {
      criteria: 'A prop exists which can set the bar into a mode where it remains at the top of the screen, independent of scroll depth.',
      name: 'Sticky',
      optionId: 'sticky',
      ...checkmark,
    },
    {
      criteria: 'The bar can be individually themed to use a theme mode that doesn\'t match the rest of the app.  E.g. dark mode app bar in a light mode app.',
      name: 'Theme Mode',
      optionId: 'themeMode',
      ...checkmark,
    },
  ]),
};
