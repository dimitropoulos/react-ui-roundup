import { Framework } from '../entities';

const frameworkHomepage = 'https://chakra-ui.com';

export const chakra: Framework = {
  frameworkHomepage,
  frameworkId: 'chakra',
  repoURL: 'https://github.com/chakra-ui/chakra-ui',
  frameworkName: 'Chakra UI',
  frameworkFeaturesById: {
    darkMode: true,
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/button`,
      options: {
        sizes: ['xs', 'sm', 'md', 'lg'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/tabs`,
      options: {
        canBeVertical: true,
      },
    },
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/alert`,
      options: {
        closable: true,
        types: ['success', 'info', 'warning', 'error'],
      },
    },
  ],
};