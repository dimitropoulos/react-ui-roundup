import { Framework } from "../entities";

const frameworkHomepage = 'https://ant.design';

export const antDesign: Framework = {
  frameworkHomepage,
  frameworkId: 'antDesign',
  repoURL: 'https://github.com/ant-design/ant-design',
  frameworkName: 'Ant Design',
  frameworkFeaturesById: {
    darkMode: false,
    designKits: [
      {
        type: 'Sketch',
        href: `${frameworkHomepage}/docs/spec/download`,
      },
      {
        type: 'Figma',
        href: `${frameworkHomepage}/docs/spec/download`,
      },
    ],
    rtlSupport: false,
    themer: false,
    typeScript: true,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/button/`,
      options: {
        sizes: ['small', 'large', 'default'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/components/tabs/`,
      options: {
        canBeVertical: true,
      },
    },
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/components/alert/`,
      options: {
        closable: true,
        types: ['success', 'info', 'warning', 'error'],
      },
    },
  ],
};
