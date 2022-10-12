import { Framework } from '../frameworks';

const frameworkHomepage = 'https://quasar.dev';

export const quasar: Framework = {
  components: [
    {
      componentId: 'alert',
      // @ts-expect-error quasar, being a vue framework, doesn't use react component conventions
      componentName: 'banner',
      componentURL: `${frameworkHomepage}/vue-components/banner`,
      options: {
        closable: false,
        types: [],
      },
    },
    {
      componentId: 'avatar',
      // @ts-expect-error quasar, being a vue framework, doesn't use react component conventions
      componentName: 'avatar',
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
      // @ts-expect-error quasar, being a vue framework, doesn't use react component conventions
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
      // @ts-expect-error quasar, being a vue framework, doesn't use react component conventions
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
      // @ts-expect-error quasar, being a vue framework, doesn't use react component conventions
      componentName: 'date',
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
      componentId: 'pagination',
      // @ts-expect-error quasar, being a vue framework, doesn't use react component conventions
      componentName: 'pagination',
      componentURL: `${frameworkHomepage}/vue-components/pagination`,
      options: {
        compact: true,
        edgePages: false,
        firstLast: true,
        numPages: true,
        pageSize: false,
        style: ['pages'],
      },
    },
    {
      componentId: 'select',
      // @ts-expect-error quasar, being a vue framework, doesn't use react component conventions
      componentName: 'select',
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
      // @ts-expect-error quasar, being a vue framework, doesn't use react component conventions
      componentName: 'stepper',
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
      // @ts-expect-error quasar, being a vue framework, doesn't use react component conventions
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
      // @ts-expect-error quasar, being a vue framework, doesn't use react component conventions
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
