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
        espresso: '#2C2926',
        'warm-sand': '#D8C9B5',
        'warm-ivory': '#F7F4EE',
        'ivory-dark': '#F0EBE2',
        'muted-olive': '#78806A',
        'soft-taupe': '#A69B8C',
      },
      fontFamily: {
        display: ['var(--font-jakarta)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      boxShadow: {
        warm: '0 4px 16px rgba(44, 41, 38, 0.10)',
        card: '0 2px 8px rgba(44, 41, 38, 0.08)',
        sm: '0 1px 3px rgba(44, 41, 38, 0.08)',
        md: '0 4px 12px rgba(44, 41, 38, 0.10)',
        lg: '0 8px 24px rgba(44, 41, 38, 0.12)',
      },
    },
  },
  plugins: [],
}
