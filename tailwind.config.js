/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F0E7DB',
          text: '#111',
        },
        dark: {
          background: '#202023',
          text: '#fff',
        },
        buttonBgLight: '#fbd38d',
        buttonBgDark: '#9ef0b8',
        buttonBgHoverLight: '#f6ad55',
        buttonBgHoverDark: '#4fe37e',
        headerBGLight: '#f4ede4',
        headerBGDark: '#202023',
        courseLabelDark: '#9AE6B4',
        courseLabelBGDark: '#9AE6B450',
        courseLabelLight: '#22543d',
        courseLabelBGLight: '#C6F6D5',
        linkLight: '#f6ad55',
        linkDark: '#fbd38d'
      },
    },
  },
  plugins: [],
}

