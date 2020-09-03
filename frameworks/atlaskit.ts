import { Framework } from '../entities';

const frameworkHomepage = 'https://atlassian.design';

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
      componentURL: `${frameworkHomepage}/components/section-message`,
      options: {
        closable: false,
        types: ['info', 'warning', 'error', 'confirmation', 'change'],
      },
    },
    {
      componentId: 'alert',
      componentName: 'Flag',
      componentURL: `${frameworkHomepage}/components/flag`,
      options: {
        closable: false,
        types: ['info', 'warning', 'error', 'confirmation', 'change'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/button`,
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
      componentId: 'stepper',
      componentName: 'ProgressTracker',
      componentURL: `${frameworkHomepage}/components/progress-tracker`,
      options: {
        canBeVertical: false,
        clickable: true,
        stepDescription: false,
        stepIcon: false,
        stepError: false,
      },
    },
    {
      componentId: 'switch',
      componentName: 'Toggle',
      componentURL: `${frameworkHomepage}/components/toggle`,
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
      componentURL: `${frameworkHomepage}/components/tabs`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};