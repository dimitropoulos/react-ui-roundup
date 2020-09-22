import { Framework } from '../entities';

const frameworkHomepage = 'https://ant.design';

export const antDesign: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/components/alert`,
      options: {
        closable: true,
        types: ['success', 'info', 'warning', 'error'],
      },
    },
    {
      componentId: 'avatar',
      componentName: 'Avatar',
      componentURL: `${frameworkHomepage}/components/avatar`,
      options: {
        badge: true,
        shapes: ['circle', 'square'],
        sizes: ['number', 'large', 'small', 'default'],
        types: ['icon', 'image', 'text'],
      },
    },
    {
      componentId: 'avatarGroup',
      componentName: 'Avatar.Group',
      componentURL: `${frameworkHomepage}/components/avatar`,
      options: {
        expandableGroup: true,
        maxCount: true,
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right', 'only'],
        loading: true,
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
      componentId: 'errorBoundary',
      componentName: 'Alert.ErrorBoundary',
      componentURL: `${frameworkHomepage}/components/alert/#components-alert-demo-error-boundary`,
      options: {
        customText: true,
        dropInFallback: false,
        wrapperFallback: false,
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Steps',
      componentURL: `${frameworkHomepage}/components/steps`,
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
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/components/switch`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: true,
        internalText: true,
        labelPlacement: [],
        loading: true,
        sizes: ['default', 'small'],
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
    darkMode: true,
    designKits: [
      {
        href: `${frameworkHomepage}/docs/spec/download`,
        type: 'Sketch',
      },
      {
        href: `${frameworkHomepage}/docs/spec/download`,
        type: 'Figma',
      },
    ],
    rtlSupport: true,
    themer: 'https://antdtheme.com/aliyun',
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'antDesign',
  frameworkName: 'Ant Design',
  repoURL: 'https://github.com/ant-design/ant-design',
};
