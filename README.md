# cripapp (React Native)

## Getting started

**Prerrequisites**:

- NodeJS
- Java JDK 11
- Android Studio
- Android SDK
- Android SDK Tools:
    1. Build-tools
    2. Command-line-tools
    3. Emulator
    4. Emulator Hypervisor AMD o Emulator Hypervisor Intel (depende de tu procesador)
    5. Platform-tools
    6. USB Driver
- Crear AVD en Android Studio
- Aniadir `Android/Sdk` al PATH de windows como una nueva variable llamada "ANDROID_HOME"
- Aniadir `%LOCALAPPDATA%\Android\Sdk\platform-tools` al la variable PATH
- Aniadir `%LOCALAPPDATA%\Android\Sdk\tools\bin` al la variable PATH
- Aniadir `%LOCALAPPDATA%\Android\Sdk\tools` al la variable PATH
- Aniadir `%LOCALAPPDATA%\Android\Sdk\emulator` al la variable PATH

**Execute**:

```BASH
npm i --force
```

```BASH
npx react-native run-android
```
