import { Framework } from '../frameworks';

const frameworkHomepage = 'https://garden.zendesk.com';

export const zendesk: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'Notification',
      componentURL: 'https://garden.zendesk.com/components',
      options: {
        closable: true,
        types: ['success', 'info', 'warning', 'error'],
      },
    },
    {
      componentId: 'appBar',
      componentName: 'Header',
      componentURL: `${frameworkHomepage}/components/chrome#header`,
      options: {
        api: ['customComponents'],
        denseMode: true,
        sticky: false,
        themeMode: true,
      },
    },
    {
      componentId: 'avatar',
      componentName: 'Avatar',
      componentURL: `${frameworkHomepage}/components/avatar`,
      options: {
        badge: true,
        shapes: ['circle', 'rounded-square'],
        sizes: ['extraextrasmall', 'extrasmall', 'small', 'medium', 'large'],
        types: ['image', 'icon', 'text'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['only'],
        loading: false,
        sizes: ['small', 'large', 'default'],
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
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'datePicker',
      componentName: 'DatePicker',
      componentURL: `${frameworkHomepage}/components/date-picker`,
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
      componentName: 'Select',
      componentURL: `${frameworkHomepage}/components/select`,
      options: {
        async: false,
        disabled: true,
        disabledOptions: true,
        filterable: false,
        groupable: false,
        icons: ['start'],
        virtual: false,
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Stepper',
      componentURL: `${frameworkHomepage}/components/stepper`,
      options: {
        canBeVertical: false,
        clickable: false,
        stepDescription: false,
        stepError: false,
        stepIcon: false,
      },
    },
    {
      componentId: 'switch',
      componentName: 'Toggle',
      componentURL: `${frameworkHomepage}/components/toggle`,
      options: {
        disabled: false,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['above', 'below'],
        loading: false,
        sizes: [],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/components/tabs`,
      options: {
        canBeVertical: true,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: false,
    designKits: false,
    rtlSupport: true,
    themer: false,
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'zendesk',
  frameworkName: 'Zendesk Garden',
  repoURL: 'https://github.com/zendeskgarden/react-components',
};
