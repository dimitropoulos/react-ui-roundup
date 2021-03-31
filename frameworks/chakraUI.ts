import { Framework } from '../entities';

const frameworkHomepage = 'https://chakra-ui.com';

export const chakra: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/alert`,
      options: {
        closable: true,
        types: ['success', 'info', 'warning', 'error'],
      },
    },
    {
      componentId: 'avatar',
      componentName: 'Avatar',
      componentURL: `${frameworkHomepage}/avatar`,
      options: {
        badge: true,
        shapes: ['circle'],
        sizes: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        types: null,
      },
    },
    {
      componentId: 'avatarGroup',
      componentName: 'AvatarGroup',
      componentURL: `${frameworkHomepage}/avatar`,
      options: {
        expandableGroup: false,
        maxCount: true,
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/button`,
      options: {
        disabled: true,
        groupable: false,
        icon: ['left', 'right', 'only'],
        loading: false,
        sizes: ['xs', 'sm', 'md', 'lg'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/checkbox`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: true,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/switch`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['left', 'right'],
        loading: false,
        sizes: ['sm', 'md', 'lg'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/tabs`,
      options: {
        canBeVertical: true,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: true,
    designKits: false,
    rtlSupport: true,
    themer: false,
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'chakra',
  frameworkName: 'Chakra UI',
  repoURL: 'https://github.com/chakra-ui/chakra-ui',
};
