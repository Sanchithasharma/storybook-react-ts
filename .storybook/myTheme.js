// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: '#A4D87B',

  // UI
  appBg: 'white',
  appContentBg: '#E5ECE0',
  appBorderColor: 'grey',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: '#A4D87B',

  // Form colors
  inputBg: 'white',
  inputBorder: '#4B9611',
  inputTextColor: 'black',
  inputBorderRadius: 6,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://i.postimg.cc/pLp2tZjx/icons8-green-64.png',
  brandTarget: '_self',
});