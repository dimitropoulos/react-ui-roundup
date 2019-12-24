import { Framework } from "../entities";

const frameworkHomepage = 'https://onsen.io';

export const onsenUI: Framework = {
  frameworkHomepage,
  frameworkId: 'onsenUI',
  repoURL: 'https://github.com/OnsenUI/OnsenUI',
  frameworkName: 'Onsen UI',
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
      componentId: 'tabs',
      componentName: 'Tabbar',
      componentURL: `${frameworkHomepage}/v2/api/react/Tabbar.html`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};