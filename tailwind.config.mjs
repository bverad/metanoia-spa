/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Verde Sage - Principal
        sage: {
          50: '#f6f7f3',
          100: '#e9ebe3',
          200: '#d4d8c9',
          300: '#b8bfa5',
          400: '#9ba382',
          500: '#7d8661',
          600: '#636b4d',
          700: '#4f553e',
          800: '#424734',
          900: '#38392d',
        },
        // Crema Cálido - Secundario
        cream: {
          50: '#fefcf9',
          100: '#fdf7ee',
          200: '#fbebd6',
          300: '#f7dab5',
          400: '#f2c088',
          500: '#eda55c',
          600: '#e18534',
          700: '#bc6726',
          800: '#965324',
          900: '#794420',
        },
        // Cobre Suave - Acentos
        copper: {
          50: '#fdf7f0',
          100: '#faeee0',
          200: '#f4dbc0',
          300: '#ebc095',
          400: '#e09d6b',
          500: '#d67c47',
          600: '#c86033',
          700: '#a74a28',
          800: '#864025',
          900: '#6e3621',
        },
        // Neutros
        neutral: {
          50: '#fafaf9',
          100: '#f4f4f3',
          200: '#e5e5e4',
          300: '#d1d1cf',
          400: '#a3a3a0',
          500: '#737371',
          600: '#525250',
          700: '#404040',
          800: '#262625',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem', 
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgb(0 0 0 / 0.05)',
        'medium': '0 4px 12px rgb(125 134 97 / 0.15)',
        'strong': '0 8px 24px rgb(125 134 97 / 0.2)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }
    },
  },
  plugins: [],
}
