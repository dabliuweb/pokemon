# Pokemon

É necessário ter o android studio e seus SDK's e API's, nodejs e ionic-cli instalados na máquina, e devidamente configurado suas path's nas variáveis do ambiente.
Angular + Ionic + Capacitor
node version: 16.15.1

## Instruções de instalação

Baixe os arquivos do repositório
```sh
git clone https://github.com/dabliuweb/pokemon.git
```
Instale as dependências do projeto
```sh
npm i
```

Adicione as plataformas para build e instale os plugins
```sh
ionic cap add android
```

Gere o ícone e splash screen do app
```sh
cordova-res android --skip-config --copy
```

Gere o apk
```sh
ionic cap build android
```