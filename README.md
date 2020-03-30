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
npm install DigitalGlobe/maxar-component-library-vue --save-dev

// with yarn 
yarn add DigitalGlobe/maxar-component-library-vue -D
```

To update: 

```
// with yarn
yarn upgrade maxar-vue-components
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

#### Background colors

You can add a `class` attribute to components in Vue, so if you want the `dark_grey` or `light_grey` classes, you can accomplish that like so: 

```
<SomeMaxarVueComponent class="dark_grey" />
<SomeMaxarVueComponent class="light_grey" />
```

#### Tree-shaking 

If we want to add tree-shaking, we could create a build process that conditionally scopes styles.

### Data interpolation 

In its Rails implementation, the component library uses [ERB](https://guides.rubyonrails.org/layouts_and_rendering.html) to interpolate model data into our views. ERB also gives us the ability to do some light programmatic templating functions. 

In the Vue.js implementation, we have to adjust that template logic to use Vue.js templates. That transition isn't entirely one-to-one, but it's pretty close. 

Since the Rails templates usually get some `component` model from the controller, the first intuition about how Vue should handle it is to pass in some object as a prop that has a similar schema to the corresponding Rails model. 

The single object as a prop may be a challenge in the future because it obfuscates the underlying schema, and we may have to contend with some Vue.js rendering quirks alongside it. We may want to change something there. 

## Component documentation

In the future, we'll likely want to move this to an easier place to sift through. Perhaps the `npm run serve` script in this repo could serve up a documentation site. For now, every component that exists here should be documented below. At a minimum, please document: 

* prop name 
* example object with required data

Perhaps in the future we can define these as separate JS classes, much like we have with ActiveRecord. 

The names should be relatively one-to-one with the Rails implementations, although there will be some slight deviations. 

### HeadlineCopy

prop: headlineCopy

```js
headlineCopy: {
  heading: "HEADLINE WITH COMPONENT & BUTTON",
  copyEnabled: true,
  copy:
    "The promise of truth and transparency from space lives on in Maxar’s constellation. In addition to manufacturing satellites for government and commercial customers, Maxar owns and operates the world’s most sophisticated constellation of Earth imaging satellites. With five active satellites on orbit, we collect more than 3 million square kilometers of imagery each day to provide customers with a current view of our changing planet.",
  buttonEnabled: true,
  buttonExternal: true,
  buttonLink: "https://maxar.com",
  buttonText: "Learn more"
}
``` 

### Hero

prop: hero 


```js
hero: {
  heading: "Hello, world!",
  subheading: "This is Maxar",
  buttonEnabled: true,
  buttonLink: "https://www.maxar.com",
  buttonText: "Learn more",
  backgroundImageUrl:
    "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/655/WorldView-Legion_6-satellites__1_.jpg"
}
```

### MasonryGrid

prop: masonry grid 

```js
masonryGrid: {
  cards: [
    {
      link: "https://www.maxar.com",
      linkIsExternal: true,
      imageUrl:
        "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/641/new_vricon_img.jpg",
      heading: "New era in geospatial information and OEM data privacy",
      copy:
        "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
      linkText: "Learn more"
    },
    {
      link: "https://www.maxar.com",
      linkIsExternal: true,
      imageUrl:
        "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/642/Reuters_Myanmar_Investigates.jpg",
      heading: "New era in geospatial information and OEM data privacy",
      copy:
        "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
      linkText: "Learn more"
    },
    {
      link: "https://www.maxar.com",
      linkIsExternal: true,
      imageUrl:
        "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/643/200129_Maxar_09-0130.jpg",
      heading: "New era in geospatial information and OEM data privacy",
      copy:
        "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
      linkText: "Learn more"
    }
  ]
}
```

### MaxarLogo 

No props here - it's just SVG inside the `template`. Nice.

### ThreeQuarters

prop: threeQuarters

```js
threeQuarters: {
  imageUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/453/about_leadership.jpg",
  headline: "Leadership",
  subheadEnabled: true,
  subhead: "Subhead would go here",
  copy: "<p>Grounded in our values, the Maxar leadership team is committed to serving our customers and communities all over the globe and brings together industry leading experience to accelerate our innovation forward.</p>",
  buttonEnabled: true,
  buttonLink: "https://maxar.com",
  linkIsExternal: true,
  buttonText: "Learn more"
}
```

### TwoColumn

prop: twoColumn 

```js
twoColumn: {
  headline: "Making history",
  subheadEnabled: true,
  copy: "<p>Explore the pivotal milestones that have helped us make so many customer missions and applications possible.</p>",
  buttonEnabled: true,
  buttonLink: "https://www.maxar.com",
  buttonIsExternal: true,
  buttonText: "Learn more",
  imageUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/452/about_making_history.jpg"
}
```

### ThreeCard 

This implementation mirrors the Rails implementation which very inappropriately implements a card-wide link function. We need to fix it in Rails and here. Decided to keep it as is for parity. Sorry.

prop: threeCard 

```js
threeCard: {
  cards: [
    {
      imageUrl:
        "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/652/masonry_what_is_geospatial.png",
      link: "https://www.maxar.com",
      heading: "What we’re doing",
      copy:
        "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
      linkIsExternal: true
    },
    {
      imageUrl:
        "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/653/Building_in_Space_IMG_2.jpg",
      link: "https://www.maxar.com",
      heading: "Where We’re Going",
      copy:
        "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
      linkIsExternal: true
    },
    {
      imageUrl:
        "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/654/card-3.png",
      link: "https://www.maxar.com",
      heading: "Open Data Program",
      copy:
        "<p>See how geospatial technology is key to moving us from level 3 to level 5, full autonomy.</p>",
      linkIsExternal: true
    }
  ]
}
```

### RevealingStatCards 

prop: revealingStatCards 

```js
revealingStatCards: {
  cards: [
    {
      imageUrl:
        "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/448/about_stats_1.png",
      answer: "5,800 employees in more than 30 locations",
      question: "How many employees?"
    },
    {
      imageUrl:
        "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/449/about_stats_2.png",
      answer: "Customers in more than 70 countries",
      question: "How many countries?"
    },
    {
      imageUrl:
        "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/450/about_stats_3.png",
      answer:
        "Collecting more than 3 million sq km of high-resolution imagery of Earth per day",
      question: "How much imagery?"
    }
  ]
}
```

### Carousel 

The carousel component has its markup, styles, and data structure defined. But we're going to have to come back and re-do the animations in Vue. It's probably not worth it to do a one-to-one port over, and Vue can handle this thing better anyways. It's just a little more than copy-paste, though.

prop: carousel 

```js
carousel: {
  sharedHeadingEnabled: true,
  sharedHeading: "Carousel component",
  slides: [
    {
      imageUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/644/regular_featured_event_carousel.jpg",
      heading: "FEATURED EVENT",
      body: "Join Maxar at the 36th annual Space Symposium hosted by the Space Foundation.",
      buttonEnabled: true,
      buttonLink: "https://maxar.com",
      buttonIsExternal: true,
      buttonText: "Learn more"
    },
    {
      imageUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/645/regular_dragonfly_1_SPIDER.jpg",
      heading: "MAXAR IN THE NEWS",
      body: "NASA’s plan to build stuff in space just took its first step",
      buttonEnabled: true,
      buttonLink: "https://maxar.com",
      buttonIsExternal: true,
      buttonText: "Learn more"
    },
    {
      imageUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/646/regular_WorldView-Legion_6-satellites_2x.jpg",
      heading: "New on the blog",
      body: "Enhancing national security missions with WorldView Legion",
      buttonEnabled: true,
      buttonLink: "http://blog.maxar.com",
      buttonIsExternal: true,
      buttonText: "Learn more"
    }
  ]
}
```

### FullColorCta 

prop: `fullColorCta`

```js
fullColorCta: {
  heading: "Stay curious",
  copy: "<p>Get the latest in geospatial breakthroughs from The GIST and in-depth analysis of real-world events by subscribing to our monthly Maxar Spotlight periodical.</p>",
  buttonEnabled: true,
  buttonLink: 'https://maxar.com',
  buttonExternal: true,
  buttonText: 'Learn more'
}
```

### FeaturedResource 

prop: `featuredResource`

```js
featuredResource: {
  title: "UI/UX Software Engineer (TS/SCI)",
  subtitle: "Herndon, VA",
  link: "https://maxar.com",
  linkExternal: true,
  linkText: "Read more"
}
```

### StatBlock

prop: `statBlock`

```js
statBlock: {
  imageUrl:
    "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/647/Solar_Array_Deploy.jpg",
  stats: [
    {
      stat: "60+ years",
      description: "Space Infrastructure leadership"
    },
    {
      stat: "2,200",
      description: "Collective years on orbit"
    },
    {
      stat: "92",
      description: "Geo communication satellites on orbit today"
    },
    {
      stat: "5",
      description: "5 robotic arms on Mars"
    },
    {
      stat: "100+ PB",
      description: "Archive of global imagery"
    },
    {
      stat: "3M sq km",
      description: "Collected each day"
    }
  ]
}
```

### TwoColumnTallIcons

prop: `twoColumnTallIcons`

```js
twoColumnTallIcons: {
  imageUrl:
    "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/504/world_cropped.gif",
  bullets: [
    {
      heading: "Competitive salary",
      iconUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/496/Path_603.jpg",
      copy: "We competitively structure our salaries based on a number of factors including the responsibilities you will have as well as the current market conditions in the region."
    },
    {
      heading: "Compehensive health plan",
      iconUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/497/Group_1092.png",
      copy: "We offer comprehensive health coverage, health and wellness programs and on-site fitness centers (at some locations) to keep you and your family healthy. This includes medical, dental and vision insurance, along with flexible spending accounts, life insurance, pet insurance and more."
    },
    {
      heading: "401K retirement benefits",
      iconUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/498/Group_1093.png",
      copy: "We help you prepare for your future by offering an employee match on your contributions up to 4 percent of your salary which is immediately vested."
    },
    {
      heading: "Generous time off policy",
      iconUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/499/Group_1094.png",
      copy: "We value a healthy work-life balance. We have a flexible leave policy so you can take the time you need off, when you need it, with your manager's approval. In addition, we have leave policies to support parental leave, military duty, bereavement, jury duty and disability."
    },
    {
      heading: "Tuition reimbursement & loan repayment",
      iconUrl: "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/500/Group_1095.png",
      copy: "We are committed to continuous learning and employee development. Through our tuition reimbursement and student loan repayment program, you will have the financial support needed to enhance your skills, learn new ones, and stay on top of the industry."
    }
  ]
}
```

### HomeHero 

* prop: `homeHero`:

homeHero: {
  heading: "Improving life on Earth from space",
  subHeading:
    "We make global change visible, information actionable and space accessible.",
  buttonEnabled: true,
  link: "https://www.maxar.com/splash/worldview-legion",
  buttonIsExternal: true,
  buttonText: "Learn more",
  image:
    "https://maxarv2-cms-production.s3.amazonaws.com/uploads/image/image_value/655/WorldView-Legion_6-satellites__1_.jpg"
},

### MultiLink

* prop: `multiLink`

```js
multiLink: {
  links: [
    {
      link: "https://www.maxar.com/products/use-cases#explore",
      heading: "Explore",
      copy:
        "<p>Design, build and deploy resilient space infrastructure for any mission</p>",
      isExternal: true
    },
    {
      link: "https://www.maxar.com/products/use-cases#connect",
      heading: "Connect",
      copy:
        "<p>Deploy cutting-edge systems for communications and data from or across space</p>",
      isExternal: true
    },
    {
      link: "https://www.maxar.com/products/use-cases#access",
      heading: "Access",
      copy:
        "<p>Identify, understand and address change with accurate geospatial information</p>",
      isExternal: true
    },
    {
      link: "https://www.maxar.com/products/use-cases#map",
      heading: "Map",
      copy:
        "<p>Create and customize maps with professional-grade imagery mosaics and information layers</p>",
      isExternal: true
    },
    {
      link: "https://www.maxar.com/products/use-cases#analyze",
      heading: "Analyze",
      copy:
        "<p>Reveal patterns, detect objects and extract geospatial insight at scale</p>",
      isExternal: true
    }
  ]
}
```

### Navbar 

The Navbar is not quite 1-to-1 with the Maxar 2.0 version, but it uses most of the decisions described in the [Maxar 2.0 navbar wiki page](https://github.com/DigitalGlobe/maxar_website_v2/wiki/Navbar). 

#### State: 

It manages a few pieces of state: 

* `active`: determines if the navbar gets the `navbar--active` class, which toggles it on mobile views. This piece of state is toggled by the `button` with the `nav-mobile` class. 
* `activePanel`: keeps track of which specific sub-nav panel is active. This is passed to all `MultiColumnPanel` and `SingleColumnPanel` children. It is manipulated by the `handleToggleActivePanel` method. 
* `closeIcon`: generated CSS that uses `require` to include the close icon SVG.
* `hamburgerIcon`: generated CSS that uses `require` to include the hamburger icon SVG.

#### Components

The Navbar uses three child components: 

* `MaxarLogo`: an SVG version of the navbar logo
* `MultiColumnPanel`: a navbar panel with room for multiple columns of links
* `SingleColumnPanel`: a panel with room for one column of links

#### Props 

The component takes one prop: 

* `navbar`: data object for the component. Looks like this: 

```js
navbar: {
  categories: [
    {
      link: "/",
      title: "Home",
      isExternal: false,
      type: "top-level",
    },
    {
      label: "Single column",
      type: "single",
      links: [
        {
          label: "Single column one",
          link: "https://www.maxar.com",
          isExternal: true,
        }
      ]
    },
    {
      label: "Multi column",
      type: "multi",
      columns: [
        {
          label: "Column one",
          links: [
            {
              label: "Col one link one",
              link: "https://www.maxar.com",
              isExternal: true,
            }
          ]
        },
        {
          label: "Column two",
          links: [
            {
              label: "Col two link one",
              link: "https://www.maxar.com",
              isExternal: false,
            }
          ]
        }
      ]
    }
  ]
},
```

#### Navbar children 

The Navbar component has both `MultiColumnPanel` and `SingleColumnPanel` children components. They both receive two props: 

* `category`: data used to inform the labels, links, and other pieces of content in the panel
* `activePanel`: This tells each child component which panel should be active, managed by the parent `Navbar` component. 

Both have methods to handle keydowns (on enter and space) and mousedowns which emit the `toggleActive` custom event to tell the `Navbar` component to toggle to the correct panel. 

## Utilities 

Some components act as utilities within the library itself and are not meant to be exported individually. They live in `src/components/utilities`. 

### AnchorLinkOrNuxtLink

We often use our components in Nuxt projects, which rely on the [nuxt-link component](https://nuxtjs.org/api/components-nuxt-link/). But other times we may choose to ship Vue.js standalone. This acts as a wrapper to give you the option between the two. We use it in the `Navbar` component currently.

The `AnchorLinkOrNuxtLink` component takes two props: 

* `target`: acts as the `target` attribute for `nuxt-links` or anchors.
* `to`: acts as the `href` attribute for anchors, and the `to` prop for `nuxt-links`. 

It then checks if `this.$nuxt` is true and if its `to` prop begins with `/`, indicating a relative link. If both of those are true, it renders a `nuxt-link`. If not, it renders an `a` tag. 