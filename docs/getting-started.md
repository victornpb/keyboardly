# Getting Started

This section will help you build a basic Keyboardly documentation site from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 2.

::: warning
Keyboardly is currently in `alpha` status. It is already suitable for out-of-the-box documentation use, but the config and theming API may still change between minor releases.
:::
## Step. 1: Install Keyboardly

Add Keyboardly as a dependency for the project.

#### [Yarn](https://github.com/yarnpkg/yarn)
```sh
yarn add keyboardly
```

#### NPM
```
npm install keyboardly
```

#### CDN
If you don't use a package manager, you can access `keyboardly` via [unpkg (CDN)](https://unpkg.com/keyboardly/)
```html
<script src="https://unpkg.com/keyboardly@0.2.0/dist/keyboardly.js"></script>
<link rel="stylesheet" href="https://unpkg.com/keyboardly@0.2.0/dist/style.css">
```

## How it works

Keyboardly works by handling keyboard events and delegating actions to specific elements on the DOM.
This allow you to easily retro-fit great user experience onto existing Apps and sites.

The premise:
> <h3> If theres a button, you should be able to add a keyboard binding to it. </h3>

So if you have been building Apps only for mouse and touch, Keyboardly is a great option to enhance the user experience for keyboard.

And if you're building an App from scratch, Keyboardly greatly simplifies how you develop an App for keyboard use.

And since it uses the DOM it has several advantages:

- You don't need to worry about keyboard event life cicles.
  What if this component leaves the page and I forget to disable this event, now all the sudden the keyboard respond to ghost actions.
- Library / Framework agnostic
  You don't need to sprinkle logic in every component of your favorite framework


## What's next?

By now, you should have a basic but functional Keyboardly documentation site. But currently, the user has no way to navigate around the site because it's missing for example sidebar menu we have on this site.

To enable those navigations, we must add some configurations to the site. Head to  to learn how to configure Keyboardly.

If you would like to know more about what you can do within the page, for example, writing markdown contents, or using Vue Component, check out the "Writing" section of the docs.  would be a greate starting point.

If you want to know how to customize how the site looks (Theme), and find out the features Keyboardly's default theme provides, visit 

When your documentation site starts to take shape, be sure to read the.
