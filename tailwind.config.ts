import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand-html': '#fc490b',
        'brand-css': '#2299f8',
        'brand-js': '#e5ca0a',
        'brand-react': '#61dbfb',
        'brand-node': '#8cc84b',
      },
    },
  },
  variants: {},
  plugins: [],
}
export default config
