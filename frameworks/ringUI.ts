import { Framework } from '../frameworks';

const frameworkHomepage = 'https://jetbrains.github.io/ring-ui/master/index.html?path=/docs';

export const ringUI: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/components-alert--simple`,
      options: {
        closable: true,
        types: ['error', 'loading', 'message', 'success', 'warning'],
      },
    },
    {
      componentId: 'appBar',
      componentName: 'Header',
      componentURL: `${frameworkHomepage}/components-header--header`,
      options: {
        api: ['children'],
        denseMode: true,
        sticky: false,
        themeMode: true,
      },
    },
    {
      componentId: 'avatar',
      componentName: 'Avatar',
      componentURL: `${frameworkHomepage}/components-avatar--basic`,
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
      componentURL: `${frameworkHomepage}/components-button--basic`,
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
      componentURL: `${frameworkHomepage}/components-checkbox--basic`,
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
      componentURL: `${frameworkHomepage}/components-date-picker--clearable`,
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
      componentId: 'pagination',
      componentName: 'Pager',
      componentURL: `${frameworkHomepage}/components-pager--basic`,
      options: {
        compact: false,
        edgePages: false,
        firstLast: true,
        numPages: true,
        pageSize: true,
        style: ['pages'],
      },
    },
    {
      componentId: 'select',
      componentName: 'Select',
      componentURL: `${frameworkHomepage}/components-select--with-a-filter-and-tags`,
      options: {
        async: true,
        disabled: true,
        disabledOptions: true,
        filterable: true,
        groupable: false,
        icons: [],
        virtual: false,
      },
    },
    {
      componentId: 'switch',
      componentName: 'Toggle',
      componentURL: `${frameworkHomepage}/components-toggle--basic`,
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
      componentURL: `${frameworkHomepage}/components-tabs--basic`,
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
