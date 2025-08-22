# React Native

## Iniciar um projeto usando Expo
npx create-expo-app name-app -t  

## Deploy - Criar uma build do projeto

1- Instale EAS no projeto:  
- npm install -g eas-cli 

2- Loga na sua conta do Expo: 
- eas login

3- Faça a configuração do projeto: 
- eas build:configure
- npx expo install expo-dev-client

4- Escolha a plataforma:
- android: eas build --platform android
- ios: eas build --platform ios
- android e ios: eas build --platform all

5- Vai ate a dashboard da sua build
- eas build:list