import { Framework } from '../entities';

const frameworkHomepage = 'https://orbit.kiwi';

export const orbit: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/components/alert-message/`,
      options: {
        closable: true,
        types: ['success', 'info', 'warning', 'critical'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/button/`,
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
      componentURL: `${frameworkHomepage}/components/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: false,
        invalid: true,
        labelPlacement: ['right'],
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
        icons: ['start', 'end'],
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
