/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#191817',
        'on-primary': '#ffffff',
        'primary-container': '#1c1b1a',
        'on-primary-container': '#868382',
        secondary: '#9e4a3b',
        'on-secondary': '#ffffff',
        'secondary-container': '#ff9784',
        'on-secondary-container': '#782d21',
        'secondary-fixed': '#ffdad4',
        tertiary: '#606853',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#171e0e',
        background: '#faf9f6',
        'on-background': '#1a1c1a',
        surface: '#faf9f6',
        'on-surface': '#1a1c1a',
        'on-surface-variant': '#4a4640',
        'surface-dim': '#dbdad7',
        'surface-bright': '#faf9f6',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f4f3f0',
        'surface-container': '#efeeeb',
        'surface-container-high': '#e9e8e5',
        'surface-container-highest': '#e3e2e0',
        outline: '#7b766f',
        'outline-variant': '#ccc5bd',
        error: '#ba1a1a',
        'on-error': '#ffffff'
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        'headline-lg': ['Playfair Display', 'serif'],
        'headline-md': ['Playfair Display', 'serif'],
        'display-lg': ['Playfair Display', 'serif'],
        'title-md': ['Plus Jakarta Sans', 'sans-serif'],
        'body-lg': ['Plus Jakarta Sans', 'sans-serif'],
        'body-md': ['Plus Jakarta Sans', 'sans-serif'],
        'label-md': ['Plus Jakarta Sans', 'sans-serif'],
        'label-caps': ['Plus Jakarta Sans', 'sans-serif']
      },
      spacing: {
        margin: '1.25rem',
        'margin-desktop': '3rem',
        gutter: '1rem',
        'gutter-desktop': '2rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem'
      },
      boxShadow: {
        ambient: '0 16px 36px -8px rgba(25, 24, 23, 0.06)',
        subtle: '0 2px 8px rgba(25, 24, 23, 0.04)'
      }
    }
  },
  plugins: []
};

