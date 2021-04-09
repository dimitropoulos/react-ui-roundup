import { Framework } from '../entities';

const frameworkHomepage = 'https://v2.grommet.io';

export const grommet: Framework = {
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
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['left', 'right'],
        loading: false,
        sizes: [],
      },
    },
    {
      componentId: 'datePicker',
      componentName: 'DateInput',
      componentURL: `${frameworkHomepage}/dateinput`,
      options: {
        clearable: false,
        customLocale: false,
        minMax: false,
        modes: ['day'],
        presets: false,
        range: false,
        time: false,
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
    designKits: [
      {
        href: 'https://github.com/grommet/design-kit',
        type: 'Sketch',
      },
      {
        href: 'https://github.com/grommet/design-kit/blob/master/grommet-2-open-theme.framerx',
        type: 'Framer X',
      },
      {
        href: 'https://designer.grommet.io/',
        type: 'Custom',
      },
    ],
    rtlSupport: true,
    themer: 'https://theme-designer.grommet.io/Dashboard',
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'grommet',
  frameworkName: 'Grommet',
  repoURL: 'https://github.com/grommet/grommet',
};
