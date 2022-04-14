#!/bin/bash
npx token-transformer tokens.json tokens/global.json global
npx token-transformer tokens.json tokens/light.json global,light,theme global
npx token-transformer tokens.json tokens/dark.json global,dark,theme global
npx token-transformer tokens.json tokens/violet_1.json global,violet_1,theme global
node build.js
