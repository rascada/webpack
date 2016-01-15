# vue-webpack-boilerplate

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init rascada/webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

### What's Included

- `npm run dev`: first-in-class development experience.
- `npm run build`: Production ready build.
- `npm test`: Unit tests run in PhantomJS with tape.

#### Working with an existing backend server:
  - In `build/webpack.base.conf.js`, add `devServer.proxy` field. See [docs for webpack dev server proxy](https://webpack.github.io/docs/webpack-dev-server.html#proxy).
