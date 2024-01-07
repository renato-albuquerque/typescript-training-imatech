/*
- TER O NODE.JS INSTALADO. VERIFICAR VERSÃO:
node -v

- INSTALAR TYPESCRIPT
npm install typescript

- INSTALAR TYPESCRIPT DE FORMA GLOBAL
npm install -g typescript

- VERIFICAR SE O TYPESCRIPT FOI INSTALADO (comando que mostra os "commom commands")
npx tsc

Sobre o TS:
-- 1ª Conjunto de superset para JS / linguagem

-- 2ª Microsoft é a criadora do TS

-- 3ª Boa parte das tecnologias front-end utilizam TS

-- 4ª Criado pelo dev. Anders Hejlsberg

- COMPILAR / EXPORTAR ARQUIVO TS para JS
npx tsc 01variaveis

- EXECUTAR PROJETO
node 01variaveis.js

- CRIAR ARQUIVO tsconfig.json (CHECK)
tsc --init

CONFIGURAR ARQUIVO tsconfig.json
- target: ES2016
no terminal: tsc
- module: ESNext
- outDir (local onde os arquivos JS serão armazenados): ./dist
pasta src > arquivos ts
pasta dist > arquivos js
- rootDir: ./src
*/
// Variáveis
var nome = "Camila";
var idade = 26;
var estuda = true;
var endereco = "Centro";
// Exibir variáveis
console.log("O nome \u00E9 ".concat(nome));
console.log("A idade \u00E9 ".concat(idade));
console.log("Estuda: ".concat(estuda));
console.log("O endereco \u00E9 ".concat(endereco));
