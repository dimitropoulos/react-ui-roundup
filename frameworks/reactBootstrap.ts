import { Framework } from '../frameworks';

const frameworkHomepage = 'https://react-bootstrap.github.io';

export const reactBootstrap: Framework = {
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/components/alerts`,
      options: {
        closable: true,
        types: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      },
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/buttons`,
      options: {
        disabled: true,
        groupable: true,
        icon: null,
        loading: false,
        sizes: ['sm', 'lg'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Form.Check',
      componentURL: `${frameworkHomepage}/components/forms/#forms-form-check`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: false,
        invalid: false,
        labelPlacement: [],
      },
    },
    {
      componentId: 'select',
      componentName: 'Dropdown',
      componentURL: `${frameworkHomepage}/components/dropdowns`,
      options: {
        async: false,
        disabled: true,
        disabledOptions: true,
        filterable: true,
        groupable: true,
        icons: [],
      },
    },
    {
      componentId: 'switch',
      componentName: 'Form.Check',
      componentURL: `${frameworkHomepage}/components/forms/#forms-custom-switch`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['right'],
        loading: false,
        sizes: [],
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
    designKits: false,
    rtlSupport: false,
    themer: false,
    typeScript: true,
  },
  frameworkHomepage,
  frameworkId: 'reactBootstrap',
  frameworkName: 'React Bootstrap',
  repoURL: 'https://github.com/react-bootstrap/react-bootstrap',
};
