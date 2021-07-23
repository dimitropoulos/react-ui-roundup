import { Framework } from '../entities';

const frameworkHomepage = 'https://atlassian.design';

export const atlaskit: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'SectionMessage',
      componentURL: `${frameworkHomepage}/components/section-message`,
      options: {
        closable: false,
        types: ['info', 'warning', 'error', 'confirmation', 'change'],
      },
    },
    {
      componentId: 'avatar',
      componentName: 'Avatar',
      componentURL: `${frameworkHomepage}/components/avatar`,
      options: {
        badge: false,
        shapes: ['circle', 'square'],
        sizes: ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'],
        types: ['icon', 'image'],
      },
    },
    {
      componentId: 'avatarGroup',
      componentName: 'AvatarGroup',
      componentURL: `${frameworkHomepage}/components/avatar-group`,
      options: {
        expandableGroup: true,
        maxCount: true,
      },
    },
    {
      componentId: 'alert',
      componentName: 'Flag',
      componentURL: `${frameworkHomepage}/components/flag`,
      options: {
        closable: false,
        types: ['info', 'warning', 'error', 'confirmation', 'change'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right'],
        loading: true,
        sizes: null,
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
        invalid: true,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'select',
      componentName: 'Select',
      componentURL: `${frameworkHomepage}/components/select`,
      options: {
        async: true,
        disabled: true,
        disabledOptions: false,
        filterable: true,
        groupable: true,
      },
    },
    {
      componentId: 'stepper',
      componentName: 'ProgressTracker',
      componentURL: `${frameworkHomepage}/components/progress-tracker`,
      options: {
        canBeVertical: false,
        clickable: true,
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
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: [],
        loading: false,
        sizes: ['regular', 'large'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/components/tabs`,
      options: {
        canBeVertical: false,
      },
    },
  ],
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        href: 'https://atlassian.design/guidelines/product/resources/web-product-gui-pack',
        type: 'Sketch',
      },
    ],
    rtlSupport: false,
    themer: false,
    typeScript: false,
  },
  frameworkHomepage,
  frameworkId: 'atlaskit',
  frameworkName: 'Atlaskit',
  repoURL: 'https://bitbucket.org/atlassian/atlaskit-mk-2',
};
