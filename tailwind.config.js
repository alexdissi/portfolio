/** @type {import('tailwindcss').Config} */
module.exports = {
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
      fontFamily: {
        sans: ['Inter Extra Bold', 'sans-serif'],
        mono: ['SFMono-Regular', 'Poppins Bold', 'monospace'],
      },
      colors: {
        'bglight': "#ffffff",
        'bgdark': "#191919",
        'solidheadinglight': "#42446e",
        'solidheadingdark': "#cccccc",
        'lightcontent': "#666666",
        'danger': "#FF7272",
        'darkcontent': "#a7a7a7",
        'twittercolor': '#1d9bf0',
        'linkedincolor': '#0b66c2',
        'reactcolor': "#00d8fe",
        'tailwindcolor': "#36b7f0",
        'jscolor': "#e8d44e",
        'tscolor': "#2f74c0",
        'prismacolor': "#0e374e",
        'good': "#d7ffe0",
        'txtgood': "#008c0e",
        'phpcolor': "#7377ad",
        'gitcolor': "#e84f32",
        'mysqlcolor': "#e6892e",
        'mongodbcolor': "#01ec64",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
