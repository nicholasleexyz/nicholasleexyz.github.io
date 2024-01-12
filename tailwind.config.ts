import type { Config } from 'tailwindcss';
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  daisyui:{
    themes:[
      "dracula",
    ],
  },
  plugins: [daisyui],                                                                                                        
};

export default config;