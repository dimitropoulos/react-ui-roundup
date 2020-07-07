import { Framework } from "../entities";

const frameworkHomepage = 'https://v2.grommet.io';

export const grommet: Framework = {
  frameworkHomepage,
  frameworkId: 'grommet',
  repoURL: 'https://github.com/grommet/grommet',
  frameworkName: 'Grommet',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        type: 'Sketch',
        href: `https://github.com/grommet/design-kit`,
      },
      {
        type: 'Framer X',
        href: `https://github.com/grommet/design-kit/blob/master/grommet-2-open-theme.framerx`,
      },
      {
        type: 'Custom',
        href: `https://designer.grommet.io/`,
      }
    ],
    rtlSupport: true,
    themer: 'https://theme-designer.grommet.io/Dashboard',
    typeScript: true,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/button`,
      options: {
        disabled: true,
        groupable: false,
        icon: ['left', 'right', 'only'],
        loading: false,
        sizes: null,
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'CheckBox',
      componentURL: `${frameworkHomepage}/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'switch',
      componentName: 'CheckBox',
      componentURL: `${frameworkHomepage}/checkbox`,
      options: {
        disabled: true,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['left', 'right'],
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
};
