import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        twilight: {
          primary: '#6068ed',
          secondary: '#38bdf8',
          accent: '#f471b5',
          neutral: '#1e293b',
          'base-100': '#0f172a',
          info: '#0ca5e9',
          success: '#2dd4bf',
          warning: '#f4bf50',
          error: '#fb7085',
        },
      },
      {
        illumine: {
          primary: '#6068ed',
          secondary: 'oklch(56.86% 0.255 257.57)',
          accent: '#c148ac',
          neutral: '#021431',
          'base-100': 'oklch(100% 0 0)',
          'base-200': '#f2f7ff',
          'base-300': '#e3e9f4',
          'base-content': '#394e6a',
          info: '#93e7fb',
          success: '#81cfd1',
          warning: '#efd7bb',
          error: '#e58b8b',
        },
      },
    ],
  },
}
export default config
