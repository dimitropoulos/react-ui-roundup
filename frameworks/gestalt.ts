import { Framework } from "../entities";

const frameworkHomepage = 'https://pinterest.github.io/gestalt';

export const gestalt: Framework = {
  frameworkHomepage,
  frameworkId: 'gestalt',
  repoURL: 'https://github.com/pinterest/gestalt',
  frameworkName: 'Gestalt',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: false,
    rtlSupport: true,
    themer: false,
    typeScript: false,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/#/Button`,
      options: {
        sizes: ['sm', 'md', 'lg'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/#/Checkbox`,
      options: {
        customIcon: true,
        disabled: true,
        indeterminate: true,
        invalid: true,
        labelPlacement: ['right', 'left', 'above', 'below'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/#/Tabs`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};