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
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/components/alert`,
      options: {
        closable: true,
        types: ['none', 'success', 'warning', 'danger'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right', 'only'],
        loading: true,
        sizes: ['arbitrary pixel sizes'],
      }
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/components/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: true,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tablist',
      componentURL: `${frameworkHomepage}/components/tab`,
      options: {
        canBeVertical: true,
      },
    },
  ]
}