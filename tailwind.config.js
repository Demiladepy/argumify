/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bright neon dApp palette
        primary: '#7c3aed', // violet
        secondary: '#ec4899', // pink
        accent: '#06b6d4', // cyan
        background: '#071029', // deep navy
        foreground: '#e6eef8', // soft light
        card: '#0f1724', // slightly lighter card
        border: '#152238',
        muted: '#9fb0c8',
        destructive: '#ef4444',
        info: '#60a5fa',
        warning: '#fbbf24',
        success: '#34d399',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-fast': 'pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
