/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        blizzardBlue: {
          50: '#ECFDFF',
          100: '#CEF8FF',
          200: '#A0EFFE', // PRIMARY
          300: '#64E2FC',
          400: '#1DCBF3',
          500: '#01ADD9',
          600: '#0489B6',
          700: '#0B6E93',
          800: '#135977',
          900: '#144A65',
          950: '#073145',
        },
        whitePointer: {
          50: '#FDF9FF', // PRIMARY
          100: '#F7E8FF',
          200: '#F0D5FF',
          300: '#E4B4FE',
          400: '#D484FC',
          500: '#C355F7',
          600: '#B233EA',
          700: '#9B22CE',
          800: '#8221A8',
          900: '#6A1C87',
          950: '#4B0764',
        },
        balticSea: {
          50: '#F6F4F9',
          100: '#EFEBF4',
          200: '#E2DBEA',
          300: '#D0C5DC',
          400: '#BEADCC',
          500: '#AF98BC',
          600: '#9D81AA',
          700: '#896E94',
          800: '#6E5B78',
          900: '#5B4D62',
          950: '#2B242E', // PRIMARY
        },
        electricViolet: {
          50: '#FBF5FF',
          100: '#F6E8FF',
          200: '#EFD6FE',
          300: '#E2B5FD',
          400: '#D086FA',
          500: '#BE58F4',
          600: '#AC36E7',
          700: '#9525CB', // PRIMARY
          800: '#7D23A6',
          900: '#661E85',
          950: '#470962',
        },
        seance: {
          50: '#FBF5FF',
          100: '#F6E9FE',
          200: '#EFD6FE',
          300: '#E2B6FC',
          400: '#D087F9',
          500: '#BE59F3',
          600: '#AC37E6',
          700: '#9526CA',
          800: '#7D24A5', // PRIMARY
          900: '#671E85',
          950: '#480962',
        },
        wildSand: {
          50: '#F6F6F6', // PRIMARY
          100: '#EFEFEF',
          200: '#DCDCDC',
          300: '#BDBDBD',
          400: '#989898',
          500: '#7C7C7C',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3D3D3D',
          950: '#292929',
        },
        iron: {
          50: '#F7F7F7',
          100: '#EDEDED',
          200: '#DFDFDF',
          300: '#D1D1D1', // PRIMARY
          400: '#ADADAD',
          500: '#999999',
          600: '#888888',
          700: '#7B7B7B',
          800: '#676767',
          900: '#545454',
          950: '#363636',
        },
      },
      fontFamily: {
        body: ['Inter Regular'],
        bodyItalic: ['Inter Regular Italic'],
        bodySemibold: ['Inter Semibold'],
        bodyBold: ['Inter Bold'],
        headerExtrabold: ['Proxima Nova Extrabold'],
        headerSemibold: ['Proxima Nova Semibold'],
        headerBold: ['Proxima Nova Bold'],
      },
      fontSize: {
        b1: ['0.625rem', '0.875rem'], // 10px, 14px
        b2: ['0.75rem', '1rem'], // 12px, 16px
        b3: ['0.875rem', '1.25rem'], // 14px, 20px
        b4: ['1rem', '1.5rem'], // 16px, 24px
        h3: ['1.375rem', '1.625rem'], // 22px, 26px
        h2: ['1.75rem', '1.875rem'], // 28px, 30px
        h1: ['2rem', '2.25rem'], // 32px, 36px
      },
    },
  },
  plugins: [],
};

// const plugin = require('tailwindcss/plugin');
// const defaultTheme = require('tailwindcss/defaultTheme');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     colors: {
//       blizzardBlue: {
//         50: '#ECFDFF',
//         100: '#CEF8FF',
//         200: '#A0EFFE', // PRIMARY
//         300: '#64E2FC',
//         400: '#1DCBF3',
//         500: '#01ADD9',
//         600: '#0489B6',
//         700: '#0B6E93',
//         800: '#135977',
//         900: '#144A65',
//         950: '#073145',
//       },
//       whitePointer: {
//         50: '#FDF9FF', // PRIMARY
//         100: '#F7E8FF',
//         200: '#F0D5FF',
//         300: '#E4B4FE',
//         400: '#D484FC',
//         500: '#C355F7',
//         600: '#B233EA',
//         700: '#9B22CE',
//         800: '#8221A8',
//         900: '#6A1C87',
//         950: '#4B0764',
//       },
//     },
//     extend: {
//       fontFamily: {
//         body: ['Inter', ...defaultTheme.fontFamily.sans],
//         header: ['Proxima Nova', ...defaultTheme.fontFamily.serif],
//       },
//     },
//   },
//   plugins: [
//     //////////////// HEADER \\\\\\\\\\\\\\\\
//     plugin(function ({ addBase }) {
//       // 900 BLACK (out of scope)
//       // 800 EXTRA BOLD
//       addBase({
//         '@font-face': {
//           fontFamily: 'Proxima Nova',
//           fontStyle: 'normal',
//           fontWeight: 800,
//           src: "url(../assets/fonts/proxima-nova/proximanova_extrabold.otf) format('otf')",
//         },
//       });
//       // 700 BOLD
//       addBase({
//         '@font-face': {
//           fontFamily: 'Proxima Nova',
//           fontStyle: 'normal',
//           fontWeight: 700,
//           src: "url(../assets/fonts/proxima-nova/proximanova_bold.otf) format('otf')",
//         },
//       });
//       // 600 SEMI-BOLD
//       addBase({
//         '@font-face': {
//           fontFamily: 'Proxima Nova',
//           fontStyle: 'normal',
//           fontWeight: 600,
//           src: "url(../assets/fonts/proxima-nova/proximanova_semibold.otf) format('otf')",
//         },
//       });
//       // 500 MEDIUM (out of scope)
//       // 400 REGULAR (out of scope)
//       // 300 LIGHT (out of scope)
//       // 200 EXTRA LIGHT (out of scope)
//       // 100 THIN (out of scope)
//     }),
//     //////////////// BODY \\\\\\\\\\\\\\\\
//     plugin(function ({ addBase }) {
//       // 900 BLACK (out of scope)
//       // 800 EXTRA BOLD (out of scope)
//       // 700 BOLD
//       addBase({
//         '@font-face': {
//           fontFamily: 'Inter',
//           fontStyle: 'normal',
//           fontWeight: 700,
//           src: "url(../assets/fonts/inter/inter_bold.otf) format('otf')",
//         },
//       });
//       // 600 SEMI-BOLD
//       addBase({
//         '@font-face': {
//           fontFamily: 'Inter',
//           fontStyle: 'normal',
//           fontWeight: 600,
//           src: "url(../assets/fonts/inter/inter_semibold.otf) format('otf')",
//         },
//       });
//       // 500 MEDIUM (out of scope)
//       // 400 REGULAR
//       addBase({
//         '@font-face': {
//           fontFamily: 'Inter',
//           fontStyle: 'normal',
//           fontWeight: 400,
//           src: "url(../assets/fonts/inter/inter_regular.otf) format('otf')",
//         },
//       });
//       // 400 REGULAR (ITALIC)
//       addBase({
//         '@font-face': {
//           fontFamily: 'Inter',
//           fontStyle: 'italic',
//           fontWeight: 400,
//           src: "url(../assets/fonts/inter/inter_regular_italic.otf) format('otf')",
//         },
//       });
//       // 300 LIGHT (out of scope)
//       // 200 EXTRA LIGHT (out of scope)
//       // 100 THIN (out of scope)
//     }),
//   ],
// };
