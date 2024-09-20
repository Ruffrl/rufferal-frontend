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
          200: '#D8D8D8', // DISABLED
          300: '#D1D1D1', // PRIMARY
          400: '#ADADAD',
          500: '#999999', // DISABLED
          600: '#888888',
          700: '#7B7B7B',
          800: '#676767',
          900: '#545454',
          950: '#363636',
        },
        graySuit: {
          50: '#F9F8FA',
          100: '#F4F2F5',
          200: '#E9E8EC',
          300: '#D8D5DD',
          400: '#CAC4D0', // PRIMARY
          500: '#AA9FB3',
          600: '#97889F',
          700: '#83768B',
          800: '#6E6275',
          900: '#5A5260',
          950: '#3C3540',
        },
        saltBox: {
          50: '#FAF9FA',
          100: '#F3F2F5',
          200: '#E8E4EA',
          300: '#D4CED9',
          400: '#BBB1C1',
          500: '#9E90A5',
          600: '#807188',
          700: '#695C6F', // PRIMARY
          800: '#564C5C',
          900: '#4A424D',
          950: '#2B242E',
        },
        lola: {
          50: '#F9F8FA',
          100: '#F4F2F5',
          200: '#EBE7ED',
          300: '#D5CED9', // PRIMARY
          400: '#C5BBCA',
          500: '#AE9FB3',
          600: '#9A889F',
          700: '#88758C',
          800: '#716275',
          900: '#5E5161',
          950: '#3E3540',
        },
        red: {
          50: '#fff3f1',
          100: '#ffe3df',
          200: '#ffcbc4',
          300: '#ffa69b',
          400: '#ff7462',
          500: '#ff4931',
          600: '#e8270e', // PRIMARY
          700: '#cb200a',
          800: '#a71f0d',
          900: '#8a2012',
          950: '#4c0b03',
        },
        silver: {
          50: '#F7F7F7',
          100: '#EDEDED',
          200: '#DFDFDF',
          300: '#C9C9C9', // PRIMARY
          400: '#ADADAD',
          500: '#999999',
          600: '#888888',
          700: '#7B7B7B',
          800: '#676767',
          900: '#545454',
          950: '#363636',
        },
        codGray: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#454545',
          900: '#3D3D3D',
          950: '#080808', // PRIMARY
        },
        amethystSmoke: {
          50: '#F9F8FA',
          100: '#F4F2F5',
          200: '#EAE7ED',
          300: '#D9D4DE',
          400: '#C3BCC9',
          500: '#AC9FB3',
          600: '#9F90A5', // PRIMARY
          700: '#86758C',
          800: '#706275',
          900: '#5D5161',
          950: '#3D3540',
        },
        azureRadiance: {
          100: '#D6F2FF',
          200: '#B5EAFF',
          300: '#83DFFF',
          400: '#48CBFF',
          50: '#EDFAFF',
          500: '#1EACFF',
          600: '#068EFF',
          700: '#007AFF', // PRIMARY
          800: '#085DC5',
          900: '#0D519B',
          950: '#0E315D',
        },
      },
      fontFamily: {
        body: ['Inter Regular'], // 400
        bodyItalic: ['Inter Regular Italic'],
        bodyMedium: ['Inter Medium'], // 500
        bodySemibold: ['Inter Semibold'], // 600
        bodyBold: ['Inter Bold'], // 700
        headerSemibold: ['Proxima Nova Semibold'], // 600
        headerBold: ['Proxima Nova Bold'], // 700
        headerExtrabold: ['Proxima Nova Extrabold'], // 800
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
//     extend: {}
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
