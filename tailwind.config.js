/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'primary': '#001B21',
        'secondary': '#FF8C00',
        'accent': '#444444',
        'neutral': '#B9B9B9',
      },
      /* ********** Animation Start ********** */
      keyframes: {
        'left-right': {
          "0%": {
            transform: "translateX(-7%)",
            "100%": {
              transform: "translateX(0)",
            },
          },
        },
        'right-left': {
          "0%": {
            transform: "translateX(7%)",
            "100%": {
              transform: "translateX(0)",
            },
          },
          // to: {
          //   transform: "TransformStreamDefaultController(-50%)",
          // }
        },
        'bottom-top': {
          "0%": {
            transform: "translateY(7%)",
            "100%": {
              transform: "translateY(0)",
            },
          },
        },
      },
      animation: {
        'motion-lr-300ms': 'left-right 300ms linear',
        'motion-lr-400ms': 'left-right 400ms linear',
        'motion-lr-500ms': 'left-right 500ms linear',
        'motion-lr-700ms': 'left-right 700ms linear',
        'motion-lr-1s': 'left-right 1s linear',
        'motion-rl-300ms': 'right-left 300ms linear',
        'motion-rl-500ms': 'right-left 500ms linear',
        'motion-rl-1s': 'right-left 1s linear',
        'motion-bt-1s': 'bottom-top 1s linear',
      },
      /* ********** Animation End ********** */
    },
  },
  plugins: [],
}