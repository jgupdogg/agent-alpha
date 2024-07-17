/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        'primary-foreground': '#FFFFFF',
        destructive: '#DC2626',
        'destructive-foreground': '#FFFFFF',
        input: '#D1D5DB',
        background: '#FFFFFF',
        accent: '#F3F4F6',
        'accent-foreground': '#1F2937',
        secondary: '#9CA3AF',
        'secondary-foreground': '#111827',
        ring: '#3B82F6',
      },
    },
  },
  plugins: [],
};
