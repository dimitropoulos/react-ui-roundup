import { Framework } from '../entities';

const frameworkHomepage = 'https://jetbrains.github.io/ring-ui';

export const ringUI: Framework = {
  frameworkHomepage,
  frameworkId: 'ringUI',
  repoURL: 'https://github.com/JetBrains/ring-ui',
  frameworkName: 'Ring UI',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/master/index.html?path=/docs/components-alert--simple`,
      options: {
        closable: true,
        types: ['error', 'loading', 'message', 'success', 'warning'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/master/index.html?path=/docs/components-button--basic`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'only'],
        loading: true,
        sizes: ['small', 'large', 'default'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/master/index.html?path=/docs/components-checkbox--basic`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: false,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/master/index.html?path=/docs/components-tabs--basic`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};