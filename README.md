# Pokemon

É necessário ter o android studio e seus SDK's e API's, nodejs e ionic-cli instalados na máquina, e devidamente configurado suas path's nas variáveis do ambiente.

Angular CLI: 14.2.4

Ionic CLI 6.20.1 --- (Capacitor)

node version: 16.15.1

Esse aplicativo foi desenvolvido utilizando a API [pokeapi.co](https://pokeapi.co/).

Esse aplicativo apresenta uma lista com todos pokemons, além de mostrar detalhes de cada um deles.

Foi desenvolvido um webservice em PHP para auxiliar o APP nas pesquisas de pokemon's pelo nome.

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