import { Framework } from '../entities';

const frameworkHomepage = 'https://evergreen.segment.com';

export const evergreen: Framework = {
  frameworkId: 'evergreen',
  repoURL: 'https://github.com/segmentio/evergreen',
  frameworkHomepage: 'https://evergreen.segment.com',
  frameworkName: 'Evergreen',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        type: 'Sketch',
        href: `${frameworkHomepage}/for-designers`,
      },
    ],
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/button`,
      options: {
        sizes: ['arbitrary pixel sizes'],
      }
    },
    {
      componentId: 'tabs',
      componentName: 'Tablist',
      componentURL: `${frameworkHomepage}/components/tab`,
      options: {
        canBeVertical: true,
      },
    },
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/components/alert`,
      options: {
        closable: true,
        types: ['none', 'success', 'warning', 'danger'],
      },
    },
  ]
}