import { Framework } from "../entities";

const frameworkHomepage = 'https://orbit.kiwi';

export const orbit: Framework = {
  frameworkHomepage,
  frameworkId: 'orbit',
  repoURL: 'https://github.com/kiwicom/orbit-components',
  frameworkName: 'Orbit',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        type: 'Abstract',
        href: `${frameworkHomepage}/getting-started/for-designers`,
      },
      {
        type: 'Sketch',
        href: `${frameworkHomepage}/getting-started/for-designers`,
      },
    ],
    rtlSupport: true,
    themer: 'https://themer.orbit.kiwi/',
    typeScript: false,
  },
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
  ],
};
