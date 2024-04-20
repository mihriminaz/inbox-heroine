/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      main: ['Work Sans', 'sans-serif'],
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    fontWeight: {
      ...defaultTheme.fontWeight,
      semibold: 599,
    },
    extend: {
      fontSize: {
        'title-primary': [
          '3.5rem',
          {
            lineHeight: '3.75rem',
            letterSpacing: '0',
            fontWeight: '599',
          },
        ],
        'title-secondary': [
          '3rem',
          {
            lineHeight: '3.5rem',
            letterSpacing: '0',
            fontWeight: '599',
          },
        ],
        'title-tertiary': [
          '1.75rem',
          {
            lineHeight: '2.5rem',
            letterSpacing: '0',
            fontWeight: '599',
          },
        ],
        'title-tertiary-mobile': [
          '1.25rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '599',
          },
        ],
        'title-quarternary': [
          '2rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '0',
            fontWeight: '599',
          },
        ],
        'title-quarternary-mobile': [
          '1.5rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '599',
          },
        ],
        'title-fifth': [
          '1.125rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '599',
          },
        ],

        'title-fifth-mobile': [
          '1.25rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '599',
          },
        ],
        'body-primary': [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        'body-secondary': [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        'body-secondary-mobile': [
          '0.875rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        'body-tertiary': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        'body-tertiary-mobile': [
          '0.875rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        'button-primary': [
          '1.25rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '599',
          },
        ],
        'button-secondary': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '599',
          },
        ],
        'button-secondary-mobile': [
          '0.875rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0',
            fontWeight: '599',
          },
        ],
      },
      screens: {
        xl: '1202px',
      },
      keyframes: {
        loading: {
          '0%': { width: '0px' },
          '50%': { width: '50%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        loading: 'loading 2s ease-in-out infinite',
      },
      boxShadow: {
        modal: '0px 8px 48px rgba(0, 0, 0, 0.12)',
        'beams-overlay-shadow': 'var(--beams-overlay-shadow)',
        snackbar:
          '0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)',
        shared: '0px 0px 12px 0px rgba(0, 0, 0, 0.08)',
        overlay: '0px -4px 12px 0px rgba(0, 0, 0, 0.08)',
        'plan-card': '0px -4px 48px 0px rgba(0, 0, 0, 0.16)',
        successPopup: '0px -4px 12px 0px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        'beams-primary': 'var(--beams-primary)',
        'beams-primary-dark': 'var(--beams-primary-dark)',
        'beams-secondary': 'var(--beams-secondary)',
        'beams-tertiary': 'var(--beams-tertiary)',
        'beams-blue': 'var(--beams-blue)',
        'beams-green': 'var(--beams-green)',
        'beams-orange': 'var(--beams-orange)',
        'beams-bg-primary': 'var(--beams-bg-primary)',
        'beams-bg-secondary': 'var(--beams-bg-secondary)',
        'beams-bg-tertiary': 'var(--beams-bg-tertiary)',
        'beams-bg-quaternary': 'var(--beams-bg-quaternary)',
        'beams-border-primary': 'var(--beams-border-primary)',
        'beams-border-secondary': 'var(--beams-border-secondary)',
        'beams-border-tertiary': 'var(--beams-border-tertiary)',
        'beams-text-primary': 'var(--beams-text-primary)',
        'beams-text-secondary': 'var(--beams-text-secondary)',
        'beams-text-tertiary': 'var(--beams-text-tertiary)',
        'beams-text-disabled': 'var(--beams-text-disabled)',
        'beams-text-white': 'var(--beams-text-white)',
        'beams-text-link': 'var(--beams-text-link)',
        'beams-accent-negative': 'var(--beams-accent-negative)',
        'beams-accent-negative-with-opacity':
          'var(--beams-accent-negative-with-opacity)',
        'beams-accent-warning': 'var(--beams-accent-warning)',
        'beams-accent-positive': 'var(--beams-accent-positive)',
        'beams-overlay': 'var(--beams-overlay)',
        'beams-grey400': '#EBEFF2',
        'beams-grey600': '#B8C2CD',
        'beams-checkbox-plus-color': '#7D858D',
        'beams-snackbar-bg-success': 'var(--beams-snackbar-bg-success)',
        'beams-snackbar-bg-error': 'var(--beams-snackbar-bg-error)',
        'beams-snackbar-bg-warning': 'var(--beams-snackbar-bg-warning)',
      },
    },
  },
  plugins: [],
};
