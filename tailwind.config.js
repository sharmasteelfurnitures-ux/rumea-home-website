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
        'warm-ivory': '#FAF8F4',
        'warm-offwhite': '#FAF8F4',
        'ivory-dark': '#F4EFE6',
        'antique-gold': '#8B6914',
        'gold-accent': '#8B6914',
        'warm-sand': '#D8C9B5',
        'soft-taupe': '#7A726A',
        'muted-olive': '#6E7860',
        'border-sand': '#E8DEC8',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        display: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        btn: '4px',
        card: '8px',
        sm: '4px',
        md: '8px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.06)',
        warm: '0 2px 8px rgba(44, 41, 38, 0.08)',
        subtle: '0 1px 4px rgba(0, 0, 0, 0.05)',
        hover: '0 4px 12px rgba(44, 41, 38, 0.08)',
      },
    },
  },
  plugins: [],
}
