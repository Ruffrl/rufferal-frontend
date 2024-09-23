# Rufferal Frontend

This repository contains the frontend codebase for an easy to use, pet friendly, care services application called Rufferal. The application is built using React Native and is designed to be responsive across multiple platforms including Android and iOS (_coming soon: desktop & mobile-web_).

## Table of contents

- [Demo](#demo)
- [Features](#features)
- [Accessibility considerations](#accessibility-considerations)
- [Extensions](#extensions)
- [Design](#design)
- [Software architecture](#software-architecture)
- [Installation](#installation)
- [About the creators](#about-the-creators)
<!-- - [Contributing](#contributing) -->
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Demo

[ video ]

[ desktop screengrab ]

[ mobile web screengrab ]

[ android screengrab ]

[ ios screengrab ]

## Features

- **Cross-platform Compatibility**: Supports desktop browsers, mobile web browsers, Android devices, and iOS devices.
- **Easy Onboarding and Research Caretakers**: Pet owners can skip sign in and directly browse services before signing up.
- **User Authentication**: Secure user authentication and authorization flows with phone number, email, and social sign on.
- **Community Referrals**: Pet owners can provide referrals (Ruffrls) to give insight into their experience with Caretakers and pet owners can see referral details while searching.
- **Build or View Pet Profiles**: Fill out pet profiles to provide details about pet care as well as
- **Gain Trust**: Caretakers can show off their qualifications via friendly and fun icons as well as set transparent prices.
- **Book Care for Your Pet**: Pet owners can book various pet care services.
- **Book Gigs**: Caretakers can browse available services by Pet and see
- **Switch Modes**: Easily switch between Pet owner or Caretaker to book gigs or book services.
- **Payment Integration**: Integration with a secure payment gateway for handling transactions.
- **Profile Management**: Users can manage their profiles and pet information.

## Accessibility Considerations

[ axe and other services screenshots, or walkthrough, or whatever evidence we can produce here]

[ details/list ]

### Device support

- IOS (versions _coming soon_ and above)
- Android (versions _coming soon_ and above)
- mobile-web and desktop _coming soon_

## Extensions

- **Notifications**: Push notifications for appointment and payment reminders, messaging notifications, and updates.
- **Internal Messaging**: 1:1 messaging between Pet owners and caretakers to communicate details, discuss payment, receive updates about their pets, and so much more.
- **AI Powered Care Plans**: Pet Owners can use our AI powered assistant, Ruffles, to create caretaker friendly care plan to attach to their pet's profile that can include walking details, overnight details, elderly pet details, pet medical details, and more
- Details about Ruffles
  - Ruffles would be a charming and distinctive companion, known for their unique fluffy coat and friendly demeanor. They would capture hearts with their adorable appearance and playful personality, making them a cherished member of any household.
  - Physical Characteristics:
    - Breed: A mixed breed with a uniquely fluffy and slightly unkempt appearance, possibly a combination of breeds like a Shih Tzu and Pomeranian mix.
    - Size: Small to medium-sized, compact but with a fluffy and slightly tousled coat.
    - Coat: Soft and voluminous, resembling the texture of wind-blown fur, with slight waves or curls.
    - Color: Varied shades of cream and light brown, with patches or streaks of darker colors adding to their distinctive look.
  - Facial Features:
    - Eyes: Round and expressive, often dark brown or amber in color, conveying curiosity and intelligence.
    - Ears: Medium-sized and covered with tufts of fur, often perking up at the slightest sound or movement.
    - Expression: Sweet and endearing, with a hint of mischievousness in their gaze.
  - Personality Traits:
    - Cheerful: Always wearing a bright, happy expression, eager to explore and engage in playful activities.
    - Affectionate: Loves cuddling and being close to their human family members, seeking attention and affection.
    - Energetic: Despite their fluffy appearance, Ruffles is surprisingly agile and enjoys running around and playing fetch.
    - Intelligent: Quick to learn new tricks and commands, showing off their cleverness and eagerness to please.
- graphql
- error handling
- security handling
- unit testing
- integration testing
- e2e testing
- deployment
- env vars and secrets
- deployment
- other developer nice to haves

## Design

### Themes

_more coming soon_

_CURRENT SETUP tailwind/src/tailwind.config.js_

```javascript
import { moderateScale } from '@rufferal/utils';

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
        chatelle: {
          50: '#FAF8FA',
          100: '#F4F2F5',
          200: '#EAE8EC',
          300: '#D9D5DD',
          400: '#BCB1C1', // PRIMARY
          500: '#AE9FB3',
          600: '#9B889F',
          700: '#88758C',
          800: '#716275',
          900: '#5D5260',
          950: '#3E3540',
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
        b1: [`${moderateScale(10)}px`, `${moderateScale(14)}px`],
        b2: [`${moderateScale(12)}px`, `${moderateScale(16)}px`],
        b3: [`${moderateScale(14)}px`, `${moderateScale(20)}px`],
        b4: [`${moderateScale(16)}px`, `${moderateScale(24)}px`],
        h3: [`${moderateScale(22)}px`, `${moderateScale(26)}px`],
        h2: [`${moderateScale(28)}px`, `${moderateScale(30)}px`],
        h1: [`${moderateScale(32)}px`, `${moderateScale(36)}px`],
      },
    },
  },
  plugins: [],
};
```

### Mobile/web mobile viewport sizes

- Designed for mobile displays from 320×568 through 430×1004
- Primary test devices
  - ANDROID
    - Galaxy S8
    - 360 x 740
  - IOS
    - iPhone X
    - 375 x 812
- Smallest test devices
  - ANDROID
    - Galaxy S7
    - 360 x 640
  - IOS
    - iPhone 5/SE
    - 320 x 568
- Largest test devices
  - ANDROID
    - Galaxy Z Flip 5
    - 412 x 1004
  - IOS
    - iPhone 15 Pro Max
    - 430 x 932

### Tablet viewport sizes

_coming soon_

### Desktop viewport sizes

_coming soon_

## Software architecture

[ diagram goes here ]

See [backend](https://github.com/Ruffrl/rufferal-backend)

### Tech stack

- **React**: JavaScript library for building user interfaces.
- **React Native**: Framework for building native applications using React.
- **TypeScript**: Strict syntactical superset of JavaScript.
- **MobX**: State management library for React applications.
- **Styled Components**: CSS-in-JS styling solution.
  - **EXTENSION**: Tailwind refactor
- **React Navigation**: Routing and navigation for React Native applications.
- **Axios**: Promise-based HTTP client for making API requests.
- **EXTENSION Apollo Client**: A JavaScript library that helps manage data with GraphQL, both locally and remotely.

## Installation

To get a local copy of the project up and running follow these steps:

### Prerequisites

- Repo/organization permissions
- Node
- npm
- Android Studio
  - virtual device setup
- XCode
  - simulator setup

### Repository

1. Clone the repository:

   ```bash
   git clone https://github.com/Ruffrl/rufferal-frontend.git
   cd rufferal-frontend
   ```

- https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

- **Mobile** (React Native on Expo):

  Ensure you have set up the development environment based on your target platform (iOS or Android).

  - https://reactnative.dev/docs/environment-setup
  - https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build

  ```bash
  npx nx run rufferal:start
  ```

  Follow in-server instructions to open android `a` or ios `i`
  Simulators should open automatically, they may take a minute to load and bundle

  OPTIONALLY

  ```bash
  npx nx run rufferal:run-android  # For Android
  npx nx run rufferal:run-ios  # For iOS
  ```

      - Troubleshooting?
        - Sometimes you need to open Android Studio -> Virtual Devices -> Select and run a device

  Future

      - Fullstack server?
      - Debugging servers?

- **Web** (Expo web):

  ```bash
  npx nx run rufferal:start
  ```

  Follow in-server instructions to open on web (w)
  OR
  Open [http://localhost:3000](http://localhost:3000) in your browser.

<!-- - **Web** (React):

  ```bash
  npx nx run rufferal-web:start
  ```

  Open [http://localhost:3000](http://localhost:3000) in your browser. -->

### Building for production

- **Mobile** (React Native):
  _coming soon_
  - https://nx.dev/nx-api/expo/executors/build
  - https://nx.dev/reference/project-configuration#targets
  - https://blog.nrwl.io/step-by-step-guide-to-creating-an-expo-monorepo-with-nx-30c976fdc2c1
  - https://medium.com/@arkadi.berikashvili/react-native-eas-builds-on-nx-nrwl-expo-using-github-workflows-80f420f52563

- **Web**:
  _coming soon_

### How this app was setup

1. Create a new NX app with expo

   ```bash
   npx create-nx-workspace@latest --preset=expo --appName=rufferal

   ✔ Where would you like to create your workspace? · rufferal-frontend
   ✔ Test runner to use for end to end (E2E) tests · cypress
   ✔ Which CI provider would you like to use? · github
   ```

2. Create libraries

   ```bash
   # UI LIBRARY
   npx nx generate @nx/expo:lib ui
     # I added my personal UI setup that follows "Atomic Design" methodologies

   # ASSETS
   npx nx generate @nx/expo:lib assets

   # STORE (currently MobX)
   npx nx generate @nx/expo:lib store

   # UTILS
   npx nx generate @nx/expo:lib utils

   # STYLES CONFIGURATION (currently Tailwind)
   npx nx generate @nx/expo:lib tailwind
     # Chose to use explicit naming instead of generic naming because most of the work in this library will be unique to Tailwind configuration
     # For custom tailwind configurations and branding/theme alignment
   ```

3. Name libraries accordingly

   In `tsconfig.base.json`:

   ```json
   {
     ...
     "paths": {
         "@rufferal/assets/*": ["assets/*"],
         "@rufferal/store": ["store/src/index.ts"],
         "@rufferal/tailwind": ["tailwind/src/index.ts"],
         "@rufferal/ui": ["ui/src/index.ts"],
         "@rufferal/utils": ["utils/src/index.ts"]
       }
   }
   ```

4. Generate components

   ```bash
   nx g @nx/expo:component bottomsheet --directory ui/src/components/atoms/bottomsheet --nameAndDirectoryFormat=as-provided --export=false

   # Updates
   #   - Convert component to arrow component without a default export
   #   - Export component from directory
   #      - `ui/src/components/atoms/index.ts`
   #        - `export { Bottomsheet } from './bottomsheet/bottomsheet';`
   #      - `ui/src/components/index.ts`
   #        - `export * from './atoms';`
   #      - `ui/src/index.ts`
   #        - `export * from './components';`
   ```

   Personally, I ended up not using the component generator as it currently is

   - I would like to setup a component generator that applies my system/library expectations
     - Creates functional (arrow) components instead of default exported normal function componets
     - exports to local component folder (if in atoms, export is in ./atoms/index.ts, etc)

5. Manage expo assets and update config accordingly

   - [expo-asset](https://docs.expo.dev/versions/latest/sdk/asset/)
   - [expo-font](https://docs.expo.dev/versions/latest/sdk/font/)
   - [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
   - [expo-image-manipulator](https://docs.expo.dev/versions/latest/sdk/imagemanipulator/)
   - [expo-camera](https://docs.expo.dev/versions/latest/sdk/camera/)

   - `apps/rufferal/app.json`

   ```json
   {
     ...

     "plugins": [
       [
         "expo-image-picker",
         {
           "photosPermission": "Allow Rufferal to access your photos"
         }
       ],
       [
         "expo-camera",
         {
           "cameraPermission": "Allow Rufferal to access your camera",
           "microphonePermission": "Allow Rufferal to access your microphone",
           "recordAudioAndroid": true
         }
       ],
       [
         "expo-asset",
         {
           "assets": ["../../lib/assets/images"]
         }
       ],
       [
         "expo-font",
         {
           "fonts": [
             "../../assets/src/fonts/proxima-nova/proximanova_bold.otf",
             "../../assets/src/fonts/proxima-nova/proximanova_extrabold.otf",
             "../../assets/src/fonts/proxima-nova/proximanova_semibold.otf",
             "../../assets/src/fonts/inter/inter_bold.otf",
             "../../assets/src/fonts/inter/inter_regular_italic.otf",
             "../../assets/src/fonts/inter/inter_regular.otf",
             "../../assets/src/fonts/inter/inter_semibold.otf",
             "../../assets/src/fonts/inter/inter_medium.otf"
           ]
         }
       ]
     ]
   }
   ```

6. Manage custom styles

   - Using [Tailwind](https://tailwindcss.com/docs/adding-custom-styles) and [package](https://www.npmjs.com/package/twrnc) docs
   - Add custom fonts
   - Add style/theme overrides
   - Currently in a single config file
     - `tailwind/src/tailwind.config.js`
     - See [themes](#themes)

## About the creators

- Sara Flores
- Priya Power

<!-- ## Contributing

Contributions are welcome! Please follow the guidelines outlined in [CONTRIBUTING.md](CONTRIBUTING.md). -->

## License

This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.

<!-- ### NX Notes

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/expo?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

#### Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/FWnkRYuUP7)

#### Run tasks

To run the dev server for your app, use:

```sh
npx nx serve rufferal
```

To create a production bundle:

```sh
npx nx build rufferal
```

To see all available targets to run for a project, run:

```sh
npx nx show project rufferal
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

#### Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/expo:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

#### Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

#### Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/expo?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) -->

<!-- ## (PROTOTYPE) Themes

### Colors

- PRIMARY (slate gray)
  - ORIGINAL
    - #667080
  - TAILWIND TRANSLATION (until custom colors are handled)
    - #6b7280
    - `bg-gray-500`
      - `text-white` [pairing]
    - `border-gray-500`
    - `text-gray-500`
- SECONDARY (light slate gray)
  - ORIGINAL
    - #EEF1F4
  - TAILWIND TRANSLATION (until custom colors are handled)
    - #cbd5e1
    - `bg-slate-200`
      - `text-gray-500` [pairing]
      - `text-zinc-300` [pairing]
    - `border-slate-200`
    - `text-slate-200`
- TERTIARY (dark gray)
  - ORIGINAL
    - #252529
  - TAILWIND TRANSLATION (until custom colors are handled)
    - #18181b
    - `bg-zinc-900`
      - `text-white` [pairing]
    - `border-zinc-900`
    - `text-zinc-900`
- QUATERNARY (gray)
  - ORIGINAL
    - #8A8A8F
  - TAILWIND TRANSLATION (until custom colors are handled)
    - _used for icon tint_
    - #71717a
    - `bg-zinc-500`
      - `text-zinc-900` [pairing]
    - `border-zinc-500`
    - `text-zinc-500`
- DISABLED (light gray)
  - ORIGINAL
    - #C8C7CC
  - TAILWIND TRANSLATION (until custom colors are handled)
    - _used for text color_
    - #d4d4d8
    - `text-zinc-300`
    - `bg-zinc-300`
      - `text-white` [pairing]
      - `text-gray-500` [pairing]
    - `border-zinc-300`
- NEUTRALS
  - black
    - #000
    - `bg-black`
    - `border-black`
    - `text-black`
  - white
    - #fff
    - `bg-white`
    - `border-white`
    - `text-white`

## (PROTOTYPE) Install

Setup assumes you have a MacOS

### Prereqs

- [Homebrew](https://brew.sh/)

  ```shell
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

- npm and node

  ```shell
  brew install node
  node -v
  npm -v
  ```

- watchman

  ```shell
  brew install watchman
  ```

- NX

  ```shell
  npm install -g nx
  ```

- Java Development Kit

  ```shell
  brew install --cask zulu@17
  ```

  - After the JDK installation, update `~/.zshrc` (or in `~/.bash_profile`)
    - Get path to where cask was installed to double-click installer (probably located at `/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home`)
    ```shell
    brew info --cask zulu@17
    ```
    - Add or update your JAVA_HOME environment variable to `.zshrc`
    ```bash
    # Update with appropriate path on your local
    export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
    ```

- [Android Studio](https://developer.android.com/studio)

  - Download and setup
  - While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:
    - Android SDK
    - Android SDK Platform
    - Android Virtual Device

- Android SDK

  - Open Android Studio
  - Click on "More Actions" button and select "SDK Manager"
    - The SDK Manager can also be found within the Android Studio "Settings" dialog, under Languages & Frameworks → Android SDK
  - Select the "SDK Platforms" tab from within the SDK Manager
  - Check the box next to "Show Package Details" in the bottom right corner
  - Look for and expand the Android 14 (UpsideDownCake) entry
  - Make sure the following items are checked:
    - Android SDK Platform 34
    - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image
  - Next, select the "SDK Tools" tab
  - Check the box next to "Show Package Details" here as well
  - Look for and expand the "Android SDK Build-Tools" entry
  - Make sure that 34.0.0 is selected
  - Finally, click "Apply" to download and install the Android SDK and related build tools

- Android env variable

  - Add the following lines to your `~/.zprofile` or `~/.zshrc` (if you are using bash, then `~/.bash_profile` or `~/.bashrc`) config file:

  ```bash
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```

- Android [AVD](https://developer.android.com/studio/run/managing-avds.html)

  - Open Android Studio
  - Setup a virtual device
    - Create a new AVD
    - Select "Create Virtual Device..."
    - Then pick any Phone from the list (I like to select the smallest phone to start with)
    - Click "Next"
    - Select the `UpsideDownCake API Level 34` image
      - If it is not selectable, select the download icon
    - Click "Next" then "Finish" to create your AVD
    - At this point you should be able to click on the green triangle button next to your AVD to launch it (though we don't have a project yet)

- [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)

  - Download and setup
    - Select options for laptop/desktop and ios/iphone development
  - Setup command line tools (do not use terminal commands - this can messup your setup)
    - Open Xcode
    - Choose Settings... (or Preferences...) from the Xcode menu
    - Go to the Locations panel
    - Install the tools by selecting the most recent version in the Command Line Tools dropdown

- Pod

  ```shell
  gem install cocoapods
  ```

### Clone the repository

```shell
git clone git@github.com:Ruffrl/rufferal-frontend.git
cd rufferal-frontend
```

### Install dependencies

- Desktop/mobile-web

  ```shell
  npm install
  nx run store:build
  nx run webApp:build
  ```

- Android

  ```shell
  nx run rufferal:build-android
  ```

- Build ios

  ```shell
  nx run rufferal:build-ios
  ```

  If this fails, try:

  ```shell
  cd apps/rufferal
  bundle
  cd ios
  pod install
  cd ../..
  nx run rufferal:build-ios
  ```

  ```shell
  cd apps/rufferal && bundle && cd ios && pod install && cd ../../..
  nx run rufferal:build-ios
  ```

### Serve

- Backend server required to interact with frontend app

  - [Backend setup](https://github.com/Ruffrl/rufferal-backend?tab=readme-ov-file#install)

- Launch desktop/mobile-web

  ```shell
  npx nx serve webApp
  ```

  - Visit http://localhost:3000 to see test app

- Launch android

  - Open Android Studio
  - Launch any virtual device (you can load the frontend project, or apps/rufferal or apps/rufferal/android - your choice)

  ```shell
  npx nx run rufferal:start

  # In a seperate terminal
  npx nx run rufferal:run-android

  # If Android needs a bundle/build reset
  cd apps/rufferal/android
  ./gradlew clean
  ./gradlew wrapper
  ./gradlew bundleRelease

  # Manually bundle
  cd apps/rufferal
  npx react-native bundle --platform android --dev false --reset-cache --entry-file src/main.tsx --bundle-output android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle

  # With Assets
  cd apps/rufferal
  npx react-native bundle --platform android --dev false --reset-cache --entry-file src/main.tsx --bundle-output android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle --assets-dest android/app/src/main/res

  cd apps/rufferal && npx react-native bundle --platform android --dev false --reset-cache --entry-file src/main.tsx --bundle-output android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle --assets-dest android/app/src/main/res && cd ../..
  ```

  - The Rufferal app should launch within the Android Studio virtual device!
  - If this launched a separate Simulator, you can technically close Android Studio if you want

- Launch ios

  - Open Xcode
  - Load apps/rufferal/ios

  ```shell
  npx nx run rufferal:start

  # In a seperate terminal
  npx nx run rufferal:run-ios
  ```

  - An Emulator should launch with ios and contain Rufferal app!
  - If this launched a separate Simulator, you can technically close XCode if you want

---

### Original NX Notes

#### Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

#### Start the application

Run `npx nx serve rufferal` to start the development server. Happy coding!

#### Build for production

Run `npx nx build rufferal` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

#### Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

#### Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

#### Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

#### Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools) -->
