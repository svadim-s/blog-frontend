/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: '1024px',
      sm: '640px',
      xl: '1280px',
      xxl: '1400px',
      xs: '360px',
      md: '768px',
    },
    container: {
      padding: {
        // падинги контейнера на разных экранах
        DEFAULT: '0.9375rem',
        center: true,
        // sm: '0.9375rem',
        // lg: '0.9375rem',
        // xl: '0.9375rem',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        H1: ['2.25rem', { fontWeight: '700', lineHeight: '2.475rem' }],
        H2: ['2rem', { fontWeight: '700', lineHeight: '2.375rem' }],
        H3: ['1.5rem', { fontWeight: '600', lineHeight: '1.875rem' }],
        'big-title': ['1.25rem', { fontWeight: '600', lineHeight: '1.5rem' }],
        'regular-text': ['1rem', { fontWeight: '400', lineHeight: '1.25rem' }],
        'big-button': ['0.875rem', { fontWeight: '700', lineHeight: '1.125rem' }],
        title: ['1rem', { fontWeight: '700', lineHeight: '1.25rem' }],
        'small-button': ['0.75rem', { fontWeight: '600', lineHeight: '1rem' }],
        'small-text': ['0.75rem', { fontWeight: '400', lineHeight: '1rem' }],
        paragraph: ['0.875rem', { fontWeight: '400', lineHeight: '1.375rem' }],
      },
      fontWeight: {
        'semibold-700': '600',
        'medium-500': '500',
        'regular-400': '400',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      colors: {
        Primary: {
          300: '#FFC046',
          500: '#FF6934',
        },
        Blue: {
          100: '#59C3FF',
          300: '#257CFF',
        },
        Danger: {
          500: '#ED2828',
        },
        Gray: {
          100: '#FFFFFF',
          300: '#F5F5F5',
          500: '#E9ECF2',
          700: '#808D9E',
          900: '#1D1E25',
        },
        Dark: {
          900: '#141414',
        },
        Success: {
          100: '#80FFBF',
          300: '#48BD69',
          700: '#0F9954',
          900: '#0A6638',
        },
        // Shad_cn ui colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
