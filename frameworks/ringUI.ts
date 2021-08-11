import { Framework } from '../entities';

const frameworkHomepage = 'https://jetbrains.github.io/ring-ui';

export const ringUI: Framework = {
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
      componentId: 'avatar',
      componentName: 'Avatar',
      componentURL: `${frameworkHomepage}/master/index.html?path=/docs/components-avatar--basic`,
      options: {
        badge: false,
        shapes: ['circle', 'rounded-square'],
        sizes: ['18', '20', '24', '32', '40', '48', '56', 'number'],
        types: ['image'],
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
      componentId: 'datePicker',
      componentName: 'DatePicker',
      componentURL: `${frameworkHomepage}/master/index.html?path=/docs/components-date-picker--clearable`,
      options: {
        clearable: true,
        customLocale: false,
        minMax: true,
        modes: ['day', 'month', 'year'],
        presets: false,
        range: true,
        time: true,
      },
    },
    {
      componentId: 'select',
      componentName: 'Select',
      componentURL: `${frameworkHomepage}/master/index.html?path=/docs/components-select--with-a-filter-and-tags`,
      options: {
        async: true,
        disabled: true,
        disabledOptions: true,
        filterable: true,
        groupable: false,
        icons: [],
      },
    },
    {
      componentId: 'switch',
      componentName: 'Toggle',
      componentURL: `${frameworkHomepage}/master/index.html?path=/docs/components-toggle--basic`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['right', 'left'],
        loading: false,
        sizes: [],
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
  frameworkFeaturesById: {
    darkMode: false,
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
  frameworkHomepage,
  frameworkId: 'ringUI',
  frameworkName: 'Ring UI',
  repoURL: 'https://github.com/JetBrains/ring-ui',
};
