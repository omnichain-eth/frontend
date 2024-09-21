/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'torch-red': {
          '50': '#fff0f2',
          '100': '#ffdde2',
          '200': '#ffc0ca',
          '300': '#ff94a5',
          '400': '#ff5771',
          '500': '#ff2345',
          '600': '#f50026',
          '700': '#d70021',
          '800': '#b1031e',
          '900': '#920a1f',
          '950': '#50000c',
        },
        'chateau-green': {
          '50': '#edfff6',
          '100': '#d6ffeb',
          '200': '#afffd8',
          '300': '#71ffbb',
          '400': '#2dfb96',
          '500': '#02e577',
          '600': '#00bf5f',
          '700': '#00a556',
          '800': '#067540',
          '900': '#085f37',
          '950': '#00361d',
      },
      'white-pointer': {
        '50': '#fdf8ff',
        '100': '#f8e8ff',
        '200': '#f2d5ff',
        '300': '#e8b4fe',
        '400': '#da84fc',
        '500': '#cb55f7',
        '600': '#ba33ea',
        '700': '#a322ce',
        '800': '#8821a8',
        '900': '#6f1c87',
        '950': '#4f0764',
      },
      },
      fontFamily: {
        figtree: ['var(--font-figtree)'],
        'press-start': ['var(--font-press-start-2p)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [
      require('daisyui'),
  ],
};
