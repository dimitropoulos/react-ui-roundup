import { Framework } from "../entities";

const frameworkHomepage = 'https://react-md.mlaursen.com';

export const reactMD: Framework = {
  frameworkHomepage,
  frameworkId: 'reactMD',
  repoURL: 'https://github.com/mlaursen/react-md',
  frameworkName: 'react-md',
  frameworkFeaturesById: {
    darkMode: true,
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: true,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/buttons`,
      options: {
        sizes: null,
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/components/tabs`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};