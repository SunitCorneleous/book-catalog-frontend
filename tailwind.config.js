/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Set font family
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // Set theme colors (Required config!)
      colors: {
        primary: {
          100: '#388087',
        },
        secondary: colors.slate,
        netural: {
          100: '#F6F6F2',
        },
      },
    },
  },
  // Add plugins
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
