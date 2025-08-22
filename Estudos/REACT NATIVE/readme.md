# React Native

## Iniciar um projeto usando Expo
npx create-expo-app name-app -t  

## Deploy - Criar uma build do projeto

1- Instale EAS no projeto:  
- npm install -g eas-cli 

2- Loga na sua conta do Expo: 
- eas login

3- Escolha a plataforma:
- android: eas build --platform android
- ios: eas build --platform ios
- android e ios: eas build --platform all

## Build app apk

1- Adicione no eas.json:

```json
"preview": {
      "android": {
        "buildType": "apk",
```
2- Crie o apk:

- eas build -p android --profile preview

## Update App

1- Mude a version no app.json :

```json
"expo": {
    "version": "1.0.0",
```

```json
"preview": {
      "android": {
        "versionCode": 1
      }
```

```json
   "ios": {
      "buildNumber": "2"
    },
```

2- Faça a build para atualizar

- eas build -p android --profile preview