import { Framework } from '../frameworks';

const frameworkHomepage = 'https://orbit.kiwi';

export const orbit: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/components/information/alert-message/`,
      options: {
        closable: true,
        types: ['success', 'info', 'warning', 'critical'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/action/button/`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right', 'only'],
        loading: true,
        sizes: ['small', 'large', 'normal'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/components/input/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: false,
        invalid: true,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'pagination',
      componentName: 'Pagination',
      componentURL: `${frameworkHomepage}/components/navigation/pagination`,
      options: {
        compact: true,
        edgePages: false,
        firstLast: false,
        numPages: true,
        pageSize: false,
        style: ['pages'],
      },
    },
    {
      componentId: 'select',
      componentName: 'Select',
      componentURL: `${frameworkHomepage}/components/input/select`,
      options: {
        async: false,
        disabled: true,
        disabledOptions: true,
        filterable: false,
        groupable: false,
        icons: ['start', 'end'],
        virtual: false,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        href: `${frameworkHomepage}/getting-started/for-designers`,
        type: 'Abstract',
      },
      {
        href: `${frameworkHomepage}/getting-started/for-designers`,
        type: 'Sketch',
      },
    ],
    rtlSupport: true,
    themer: 'https://themer.orbit.kiwi/',
    typeScript: false,
  },
  frameworkHomepage,
  frameworkId: 'orbit',
  frameworkName: 'Orbit',
  repoURL: 'https://github.com/kiwicom/orbit',
};
