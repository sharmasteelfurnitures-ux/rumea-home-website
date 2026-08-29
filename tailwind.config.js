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
        charcoal: '#1B1F24',
        espresso: '#1B1F24',
        'warm-ivory': '#FAFAF8',
        'warm-offwhite': '#FAFAF8',
        'warm-alabaster': '#F3F0E9',
        'ivory-dark': '#F3F0E9',
        terracotta: '#C8553D',
        'antique-gold': '#8B6914',
        'gold-accent': '#8B6914',
        'warm-sand': '#E5E0D5',
        'mid-gray': '#6B7280',
        'soft-taupe': '#6B7280',
        'muted-olive': '#6B7045',
        'border-sand': '#E5E0D5',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        display: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'Manrope', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        body: ['Inter', 'Manrope', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        btn: '6px',
        card: '8px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(27, 31, 36, 0.05)',
        warm: '0 2px 8px rgba(27, 31, 36, 0.08)',
        subtle: '0 1px 4px rgba(27, 31, 36, 0.04)',
        hover: '0 6px 16px rgba(27, 31, 36, 0.08)',
        elevated: '0 12px 28px rgba(27, 31, 36, 0.10)',
      },
    },
  },
  plugins: [],
}
