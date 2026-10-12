/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Official Brand Kit System
        espresso: {
          DEFAULT: '#2C2926',
          hover: '#3D3632',
          light: '#433E39',
        },
        sand: {
          DEFAULT: '#D8C9B5',
          light: '#EAE2D7',
          border: '#DEDAD1',
        },
        ivory: {
          DEFAULT: '#F7F4EE',
          warm: '#F7F4EE',
          dark: '#EDE7DC',
          surface: '#FDFBF7',
        },
        olive: {
          DEFAULT: '#78806A',
          hover: '#68705B',
          light: '#EFF2EC',
          dark: '#585E4D',
        },
        taupe: {
          DEFAULT: '#A69B8C',
          dark: '#7A6B5D',
          muted: '#6B6962',
        },

        // Color aliases
        'warm-bg': '#F7F4EE',
        'warm-ivory': '#F7F4EE',
        'dark-ivory': '#F0EBE2',
        'warm-sand': '#D8C9B5',
        'border-warm': '#E8E4DA',
        'border-sand': '#DEDAD1',
        'brand-brown': '#7A6B5D',
        'brand-olive': '#78806A',
        'brand-taupe': '#7A6B5D',
        'muted-olive': '#78806A',
        'olive-hover': '#68705B',
        'primary-dark': '#2C2926',
        'secondary-gray': '#6B6962',
        'muted-grey': '#A69B8C',
        charcoal: '#2C2926',
      },
      fontSize: {
        base: ['16px', { lineHeight: '1.65' }],
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        btn: '9999px',
        card: '16px',
        sm: '6px',
        md: '10px',
        lg: '14px',
        xl: '18px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        card: '0 2px 14px -2px rgba(44, 41, 38, 0.05)',
        warm: '0 4px 20px -2px rgba(44, 41, 38, 0.07)',
        subtle: '0 1px 4px rgba(44, 41, 38, 0.04)',
        hover: '0 14px 34px -4px rgba(44, 41, 38, 0.11)',
        elevated: '0 18px 40px -6px rgba(44, 41, 38, 0.13)',
      },
    },
  },
  plugins: [],
}
