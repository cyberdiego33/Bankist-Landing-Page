/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        'primary-darker': 'var(--color-primary-darker)',
        'secondary-darker': 'var(--color-secondary-darker)',
        'tertiary-darker': 'var(--color-tertiary-darker)',
        'primary-opacity': 'var(--color-primary-opacity)',
        'secondary-opacity': 'var(--color-secondary-opacity)',
        'tertiary-opacity': 'var(--color-tertiary-opacity)'
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)'
      }
    }
  },
  plugins: [],
};
