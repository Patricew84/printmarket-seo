import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'brand-white': 'var(--color-brand-white)',
        'professional-gray': 'var(--color-professional-gray)',
        'clean-light-gray': 'var(--color-clean-light-gray)',
        
        // Secondary Colors
        'accent-blue': 'var(--color-accent-blue)',
        'success-green': 'var(--color-success-green)',
        'premium-black': 'var(--color-premium-black)',
        
        // Supporting Colors
        'neutral-gray': 'var(--color-neutral-gray)',
        'border-gray': 'var(--color-border-gray)',
        'background-gray': 'var(--color-background-gray)',
        'warning-orange': 'var(--color-warning-orange)',
      },
      fontFamily: {
        'sans': ['var(--font-family-sans)'],
        'mono': ['var(--font-family-mono)'],
      },
      fontSize: {
        // Custom font sizes following brand guidelines
        'h1': ['var(--font-size-h1)', { lineHeight: '1.2', fontWeight: 'var(--font-weight-bold)' }],
        'h2': ['var(--font-size-h2)', { lineHeight: '1.3', fontWeight: 'var(--font-weight-semibold)' }],
        'h3': ['var(--font-size-h3)', { lineHeight: '1.4', fontWeight: 'var(--font-weight-semibold)' }],
        'h4': ['var(--font-size-h4)', { lineHeight: '1.4', fontWeight: 'var(--font-weight-medium)' }],
        'body-primary': ['var(--font-size-body)', { lineHeight: '1.6', fontWeight: 'var(--font-weight-normal)' }],
        'body-secondary': ['var(--font-size-small)', { lineHeight: '1.5', fontWeight: 'var(--font-weight-normal)' }],
        'specs': ['var(--font-size-small)', { lineHeight: '1.4', fontWeight: 'var(--font-weight-medium)' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
      borderRadius: {
        'card': 'var(--radius-card)',
        'button': 'var(--radius-button)',
      },
      maxWidth: {
        'container': 'var(--spacing-container)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config