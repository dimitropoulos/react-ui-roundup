import { Framework } from '../frameworks';

const frameworkHomepage = 'https://quasar.dev';

export const quasar: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'banner',
      componentURL: `${frameworkHomepage}/vue-components/banner`,
      options: {
        closable: false,
        types: [],
      },
    },
    {
      componentId: 'avatar',
      componentName: 'Avatar',
      componentURL: `${frameworkHomepage}/vue-components/avatar`,
      options: {
        badge: true,
        shapes: ['circle', 'square', 'rounded-square'],
        sizes: ['number', 'xs', 'sm', 'md', 'lg', 'xl'],
        types: ['image', 'icon', 'text'],
      },
    },
    {
      componentId: 'button',
      componentName: 'btn',
      componentURL: `${frameworkHomepage}/vue-components/button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right', 'only'],
        loading: true,
        sizes: ['xs', 'sm', 'md', 'lg', 'custom'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'checkbox',
      componentURL: `${frameworkHomepage}/vue-components/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['left', 'right'],
      },
    },
    {
      componentId: 'datePicker',
      componentName: 'DatePicker',
      componentURL: `${frameworkHomepage}/vue-components/date`,
      options: {
        clearable: false,
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
      componentURL: `${frameworkHomepage}/vue-components/select`,
      options: {
        async: true,
        disabled: true,
        disabledOptions: true,
        filterable: true,
        groupable: false,
        icons: [],
        virtual: true,
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Stepper',
      componentURL: `${frameworkHomepage}/vue-components/stepper`,
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
      componentName: 'toggle',
      componentURL: `${frameworkHomepage}/vue-components/toggle`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: true,
        internalText: false,
        labelPlacement: ['left', 'right'],
        loading: false,
        sizes: ['xs', 'sm', 'md', 'lg', 'xl', 'custom'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'tabs',
      componentURL: `${frameworkHomepage}/vue-components/tabs`,
      options: {
        canBeVertical: true,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: true,
    designKits: false,
    rtlSupport: true,
    themer: 'https://quasar.dev/style/theme-builder',
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'quasar',
  frameworkName: 'Quasar',
  repoURL: 'https://github.com/quasarframework/quasar',
};
