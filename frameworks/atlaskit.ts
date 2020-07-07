import { Framework } from '../entities';

const frameworkHomepage = 'https://atlaskit.atlassian.com';

export const atlaskit: Framework = {
  frameworkHomepage,
  frameworkId: 'atlaskit',
  repoURL: 'https://bitbucket.org/atlassian/atlaskit-mk-2',
  frameworkName: 'Atlaskit',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        type: 'Sketch',
        href: `https://atlassian.design/guidelines/product/resources/web-product-gui-pack`,
      }
    ],
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
  components: [
    {
      componentId: 'alert',
      componentName: 'SectionMessage',
      componentURL: `${frameworkHomepage}/packages/core/section-message`,
      options: {
        closable: false,
        types: ['info', 'warning', 'error', 'confirmation', 'change'],
      },
    },
    {
      componentId: 'alert',
      componentName: 'Flag',
      componentURL: `${frameworkHomepage}/packages/core/flag`,
      options: {
        closable: false,
        types: ['info', 'warning', 'error', 'confirmation', 'change'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/packages/core/button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right'],
        loading: true,
        sizes: null,
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/packages/core/checkbox`,
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
      componentName: 'Toggle',
      componentURL: `${frameworkHomepage}/packages/core/toggle`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: [],
        loading: false,
        sizes: ['regular', 'large'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/packages/core/tabs`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};