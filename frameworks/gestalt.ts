import { Framework } from '../frameworks';

const frameworkHomepage = 'https://gestalt.netlify.app';

export const gestalt: Framework = {
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/button`,
      options: {
        disabled: true,
        groupable: false,
        icon: ['only'],
        loading: false,
        sizes: ['sm', 'md', 'lg'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: true,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'datePicker',
      componentName: 'DatePicker',
      componentURL: `${frameworkHomepage}/datepicker`,
      options: {
        clearable: false,
        customLocale: true,
        minMax: true,
        modes: ['day'],
        presets: false,
        range: true,
        time: false,
      },
    },
    {
      componentId: 'select',
      componentName: 'SelectList',
      componentURL: `${frameworkHomepage}/selectlist`,
      options: {
        async: false,
        disabled: true,
        disabledOptions: true,
        filterable: false,
        groupable: false,
        icons: [],
        virtual: false,
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/switch`,
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
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/tabs`,
      options: {
        canBeVertical: false,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: false,
    designKits: false,
    rtlSupport: true,
    themer: false,
    typeScript: false,
  },
  frameworkHomepage,
  frameworkId: 'gestalt',
  frameworkName: 'Gestalt',
  repoURL: 'https://github.com/pinterest/gestalt',
};
