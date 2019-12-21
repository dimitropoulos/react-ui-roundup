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
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/#/Tabs`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};