# figma-tokens-example-multi

A basic React app with figma tokens integration.
Figma CSS styles have been imported through a symlink.

## Install

```
npm install
```

## Build figma tokens

```
npm run build-tokens
```

## Start react app

```
npm start
```

# GitHub Workflow

[create-tokens.yml](./github/workflows/create-tokemns.yml)

- Creates theme json files from tokens.json
- Transforms theme files to css
- Builds React app
- Commits files that were created by the workflow to the repo

After the workflow has completed successfully, an updated version of the React app with new tokens/styles is available [here](https://rzinurov.github.io/figma-tokens-example-multi/).

It's worth noting that the `/docs/` folder is being used as the build folder for the React app, due to limitations of GitHub Pages feature.

# Demo

![ezgif-7-d7021c0566](https://user-images.githubusercontent.com/8040747/149638873-6e01eefb-f7a3-40fe-96a1-d8846cba45db.gif)
