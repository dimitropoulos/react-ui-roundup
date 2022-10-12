import { Framework } from '../frameworks';

const frameworkHomepage = 'https://mui.com/material-ui/';

export const mui: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/react-alert`,
      options: {
        closable: true,
        types: ['error', 'warning', 'info', 'success'],
      },
    },
    {
      componentId: 'appBar',
      componentName: 'AppBar',
      componentURL: `${frameworkHomepage}/react-app-bar`,
      options: {
        api: ['children'],
        denseMode: true,
        sticky: true,
        themeMode: true,
      },
    },
    {
      componentId: 'avatar',
      componentName: 'Avatar',
      componentURL: `${frameworkHomepage}/react-avatar`,
      options: {
        badge: true,
        shapes: ['circle', 'square', 'rounded-square'],
        sizes: ['number'],
        types: ['image', 'icon', 'text'],
      },
    },
    {
      componentId: 'avatarGroup',
      componentName: 'AvatarGroup',
      componentURL: `${frameworkHomepage}/react-avatar`,
      options: {
        cascade: ['below'],
        expandableGroup: false,
        maxCount: true,
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/react-button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right', 'only'],
        loading: false,
        sizes: ['small', 'medium', 'large'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/react-checkbox`,
      options: {
        customIcon: true,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right', 'left', 'above', 'below'],
      },
    },
    {
      componentId: 'datePicker',
      componentName: 'DatePicker',
      componentURL: 'https://mui.com/x/react-date-pickers/date-picker/',
      options: {
        clearable: false,
        customLocale: false,
        minMax: false,
        modes: ['day'],
        presets: false,
        range: false,
        time: true,
      },
    },
    {
      componentId: 'pagination',
      componentName: 'Pagination',
      componentURL: `${frameworkHomepage}/react-pagination`,
      options: {
        compact: true,
        edgePages: true,
        firstLast: true,
        numPages: false,
        pageSize: false,
        style: ['pages'],
      },
    },
    {
      componentId: 'select',
      componentName: 'Select',
      componentURL: `${frameworkHomepage}/react-select`,
      options: {
        async: true,
        disabled: true,
        disabledOptions: true,
        filterable: false,
        groupable: true,
        icons: ['composable'],
        virtual: false,
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Stepper',
      componentURL: `${frameworkHomepage}/react-stepper`,
      options: {
        canBeVertical: true,
        clickable: true,
        stepDescription: true,
        stepError: true,
        stepIcon: true,
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/react-switch`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['above', 'below', 'left', 'right'],
        loading: false,
        sizes: ['default', 'small'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/react-tabs`,
      options: {
        canBeVertical: true,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        href: `${frameworkHomepage}/discover-more/related-projects/#design-resources`,
        type: 'Figma',
      },
      {
        href: `${frameworkHomepage}/discover-more/related-projects/#design-resources`,
        type: 'Sketch',
      },
      {
        href: `${frameworkHomepage}/discover-more/related-projects/#design-resources`,
        type: 'Adobe XD',
      },
    ],
    rtlSupport: true,
    themer: `${frameworkHomepage}/discover-more/related-projects/#theming`,
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'mui',
  frameworkName: 'MUI',
  repoURL: 'https://github.com/mui/material-ui',
};
