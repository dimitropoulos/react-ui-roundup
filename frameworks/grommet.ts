import { Framework } from "../entities";

const frameworkHomepage = 'https://v2.grommet.io';

export const grommet: Framework = {
  frameworkHomepage,
  frameworkId: 'grommet',
  repoURL: 'https://github.com/grommet/grommet',
  frameworkName: 'grommet',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: true,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/button`,
      options: {
        sizes: null,
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/tabs`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};