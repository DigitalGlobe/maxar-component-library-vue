# Maxar Component Library - Vue.js

The Maxar Creative Services Component Library, built with [Vue.js](https://vuejs.org/). 

## Development

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build-library
```

This runs the Vue CLI build process with the [library build target](https://cli.vuejs.org/guide/build-targets.html#library). That should be the primary use case for this package, but you can still run `npm run build` for the standard build script. 

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## For users 

### Installation 

The Maxar Component library is available as an [npm package](https://www.npmjs.com/package/maxar-vue-components). 

```
// with npm 
npm install maxar-vue-components 

// with yarn 
yarn add maxar-vue-components
```

#### Vue.js

**TODO:** sample project and setup here. So far we're only really using this with Nuxt anyway.

#### Nuxt.js

If you're building with [Nuxt.js](https://nuxtjs.org/), you'll want to include the package CSS and [plugin](https://nuxtjs.org/guide/plugins/). 

In `nuxt.config.js`: 

```js
/*
*
** More config above
*
/*
** Global CSS
*/
css: ['maxar-vue-components/dist/maxar.css'],
/*
** Plugins to load before mounting the App
*/
plugins: ['~/plugins/maxar-vue-components'],
/*
** More config below
```

In order to register the plugin, you'll have to create a file at `plugins/maxar-vue-components.js`. In it, write: 

```js
import Vue from 'vue'
import MaxarVueComponents from 'maxar-vue-components'

Vue.use(MaxarVueComponents)
```

Now you can use the components. For example, in `pages/index.vue`, all you need is: 

```js
<template>
  <div>
    <maxar-logo />
  </div>
</template>
```

And the `MaxarLogo` component will render in your template. (Which is possible since the logo is SVG!).

### Styles

This package is meant to be used as a component library in Vue. But you can also use it as a CSS library as well and bring your own markup or front-end framework/templating. 

There are some base styles in `src/scss` which get compiled alongside component-level `style` blocks. Currently, the component `style` blocks are unscoped since the CSS is relatively small and we used [BEM](http://getbem.com/introduction/) (sort of) when we wrote it initially. 

When we run `npm run build-library`, one of the generated files is `dist/maxar.css`, which you can import as plain old CSS wherever needed. This provides some easier flexibility for importing the Maxar styles to a variety of build processes. 

#### Tree-shaking 

If we want to add tree-shaking, we could create a build process that conditionally scopes styles.

### Data interpolation 

In its 