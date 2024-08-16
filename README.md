# RufferalFrontend

blarg

Things to think about

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

## Install

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

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Start the application

Run `npx nx serve rufferal` to start the development server. Happy coding!

## Build for production

Run `npx nx build rufferal` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

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

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
