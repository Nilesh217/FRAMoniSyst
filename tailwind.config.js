/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep forestry greens — primary brand / environmental identity
        forest: {
          50: '#f0f7f4',
          100: '#d9ede3',
          200: '#b3dbc7',
          300: '#7dbfa3',
          400: '#4a9d78',
          500: '#2d7a58',
          600: '#1f6145',
          700: '#1a4d37',
          800: '#163d2c',
          900: '#0f2a1e',
          950: '#081a12',
        },
        // Dark canopy / header tones
        pine: {
          50: '#eef5f1',
          100: '#d4e8dc',
          200: '#a8d1b9',
          300: '#72b38f',
          400: '#45956c',
          500: '#2f7854',
          600: '#246043',
          700: '#1e4d36',
          800: '#193d2b',
          900: '#142f22',
          950: '#0a1a12',
        },
        // Moss accent — secondary highlights, badges, map overlays
        moss: {
          50: '#f4f7ed',
          100: '#e6edda',
          200: '#ceddb8',
          300: '#afc48f',
          400: '#8fa86a',
          500: '#728c4e',
          600: '#5a7040',
          700: '#475833',
          800: '#3a472b',
          900: '#323c27',
          950: '#1a2014',
        },
        // Alert / emergency reds — fire warnings, critical status
        alert: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#dc2626',
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#651515',
          950: '#450a0a',
        },
        // Caution amber — advisories, moderate risk
        caution: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#633012',
          950: '#451a03',
        },
        // Government neutral grays — UI chrome, borders, typography
        gov: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#141619',
        },
        // Bureau navy — headers, nav bars, official accents
        bureau: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1929',
        },
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.35s ease-out forwards',
      },
    },
  },
  plugins: [],
}
