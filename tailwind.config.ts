import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      default: 'Poppins, sans-serif',
      mono: 'var(--font-mono)',
    },
    colors: {
      white: '#fff',
      black: '#000',
      default: '#F2F2F2',
      highlight: '#7C69EF',
      main: '#335EEA',
      danger: '#EB5757',
      dark: {
        100: '#869AB8',
        800: '#1B284A',
        900: '#131827',
      },
    },
  },
  plugins: [],
}
export default config
