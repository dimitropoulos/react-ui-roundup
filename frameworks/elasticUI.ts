import { Framework } from '../entities';

const frameworkHomepage = 'https://elastic.github.io/eui';

export const elasticUI: Framework = {
  frameworkHomepage,
  frameworkId: 'elasticUI',
  repoURL: 'https://github.com/elastic/eui',
  frameworkName: 'Elastic UI',
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        type: 'Sketch',
        href: `${frameworkHomepage}`
      },
    ],
    rtlSupport: false,
    themer: false,
    typeScript: true,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/#/navigation/button`,
      options: {
        sizes: null,
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/#/navigation/tabs`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};