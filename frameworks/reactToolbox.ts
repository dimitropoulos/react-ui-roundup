import { Framework } from '../frameworks';

const frameworkHomepage = 'http://react-toolbox.io';

export const reactToolbox: Framework = {
  components: [
    {
      componentId: 'appBar',
      componentName: 'AppBar',
      componentURL: `${frameworkHomepage}/#/components/app_bar`,
      options: {
        api: ['props'],
        denseMode: false,
        sticky: true,
        themeMode: false,
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/#/components/button`,
      options: {
        disabled: true,
        groupable: false,
        icon: ['left', 'only'],
        loading: false,
        sizes: null,
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/#/components/checkbox`,
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
      componentURL: `${frameworkHomepage}/#/components/date_picker`,
      options: {
        clearable: false,
        customLocale: true,
        minMax: true,
        modes: ['day', 'month', 'year'],
        presets: false,
        range: false,
        time: false,
      },
    },
    {
      componentId: 'select',
      componentName: 'Dropdown',
      componentURL: `${frameworkHomepage}/#/components/dropdown`,
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
      componentURL: `${frameworkHomepage}/#/components/switch`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['right'],
        loading: false,
        sizes: [],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/#/components/tabs`,
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
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'reactToolbox',
  frameworkName: 'React Toolbox',
  repoURL: 'https://github.com/react-toolbox/react-toolbox',
};
