import { Framework } from '../entities';

const frameworkHomepage = 'https://evergreen.segment.com';

export const evergreen: Framework = {
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
      },
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
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/components/switch`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: [],
        loading: false,
        sizes: ['integers'],
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
  ],
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        href: `${frameworkHomepage}/for-designers`,
        type: 'Sketch',
      },
    ],
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
  frameworkHomepage: 'https://evergreen.segment.com',
  frameworkId: 'evergreen',
  frameworkName: 'Evergreen',
  repoURL: 'https://github.com/segmentio/evergreen',
};
