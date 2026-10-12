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
        // Strict Semantic Roles (CSS Variables)
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)',
          text: 'var(--color-primary-text)',
        },
        surface: {
          DEFAULT: 'var(--color-bg-surface)',
          page: 'var(--color-bg-page)',
          card: 'var(--color-bg-card)',
          elevated: 'var(--color-bg-card-elevated)',
        },
        content: {
          heading: 'var(--color-text-heading)',
          body: 'var(--color-text-body)',
          muted: 'var(--color-text-muted)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          subtle: 'var(--color-border-subtle)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          subtle: 'var(--color-accent-subtle)',
          text: 'var(--color-accent-text)',
        },

        // Brand Tokens (Mapped to CSS Variables)
        espresso: {
          DEFAULT: 'var(--brand-espresso)',
          hover: 'var(--color-primary-hover)',
        },
        sand: {
          DEFAULT: 'var(--brand-sand)',
          border: 'var(--brand-sand)',
        },
        ivory: {
          DEFAULT: 'var(--brand-ivory)',
          dark: 'var(--brand-dark-ivory)',
        },
        olive: {
          DEFAULT: 'var(--brand-olive)',
          hover: 'var(--color-accent-hover)',
          subtle: 'var(--color-accent-subtle)',
        },
        taupe: {
          DEFAULT: 'var(--brand-taupe)',
          muted: 'var(--brand-taupe)',
        },

        // Backward compatibility mappings
        'warm-bg': 'var(--brand-ivory)',
        'warm-ivory': 'var(--brand-ivory)',
        'dark-ivory': 'var(--brand-dark-ivory)',
        'warm-sand': 'var(--brand-sand)',
        'border-warm': 'var(--brand-sand)',
        'border-sand': 'var(--brand-sand)',
        'brand-brown': 'var(--brand-espresso)',
        'brand-olive': 'var(--brand-olive)',
        'brand-taupe': 'var(--brand-taupe)',
        'muted-olive': 'var(--brand-olive)',
        'olive-hover': 'var(--color-accent-hover)',
        'primary-dark': 'var(--brand-espresso)',
        'secondary-gray': 'var(--brand-taupe)',
        'muted-grey': 'var(--brand-taupe)',
        charcoal: 'var(--brand-espresso)',
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
