# Getting Started

## Introduction

Keyboardly works by handling keyboard events and delegating actions to specific elements on the DOM.
This allow you to easily retro-fit great user experience onto existing Apps and sites.

The premise:
> <h3> If theres a button, you should be able to activate it with the keyboard </h3>

So if you have been building Apps only for mouse and touch, Keyboardly is a great option to enhance the user experience for keyboard.

And if you're building an App from scratch, Keyboardly greatly simplifies how you develop an App for keyboard use.

And since it uses the DOM it has several advantages:

- You don't need to worry about keyboard event life cicles.
  What if this component leaves the page and I forget to disable this event, now all the sudden the keyboard respond to ghost actions.
- Library / Framework agnostic
  You don't need to sprinkle logic in every component of your favorite framework
