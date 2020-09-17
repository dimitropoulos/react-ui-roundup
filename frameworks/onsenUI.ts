import { Framework } from '../entities';

const frameworkHomepage = 'https://onsen.io';

export const onsenUI: Framework = {
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/v2/api/react/Button.html`,
      options: {
        disabled: true,
        groupable: false,
        icon: null,
        loading: false,
        sizes: ['default', 'large'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/v2/api/react/Checkbox.html`,
      options: {
        customIcon: true,
        disabled: false,
        indeterminate: true,
        invalid: true,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/v2/api/react/Switch.html`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: [],
        loading: false,
        sizes: [],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabbar',
      componentURL: `${frameworkHomepage}/v2/api/react/Tabbar.html`,
      options: {
        canBeVertical: false,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: true,
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'onsenUI',
  frameworkName: 'Onsen UI',
  repoURL: 'https://github.com/OnsenUI/OnsenUI',
};
