import { Framework } from "../entities";

const frameworkHomepage = 'https://primefaces.org/primereact';

export const primeReact: Framework = {
  frameworkHomepage,
  frameworkId: 'primeReact',
  repoURL: 'https://github.com/primefaces/primereact',
  frameworkName: 'Prime React',
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
      componentURL: `${frameworkHomepage}/#/button`,
      options: {
        sizes: null,
      },
    },
    {
      componentId: 'tabs',
      componentName: 'TabView',
      componentURL: `${frameworkHomepage}/#/tabview`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};