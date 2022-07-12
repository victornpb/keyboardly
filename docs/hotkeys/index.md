# Hotkeys

## Introduction

Hotkeys are a concept in Keyboardly, for any keyboard interaction that can be triggered inconditionally or globally on the App.

Usage examples:
 - <kbd>Space</kbd> to Play / Pause on a video player
 - <kbd>CTRL</kbd>+<kbd>S</kbd> to Save document on a editor
 - <kbd>CTRL</kbd>+<kbd>N</kbd> to Compose new email on a webmail

## How to use

Initialize Hotkeys on your App entrypoint

```js
import kbdl from 'keyboardly';
import 'keyboardly/style.css';

const hotkeys = new kbdl.Hotkeys();
```

You only need to this once on your SPA!

## Add bidings to your Interface

You just need to add a `data-hotkey` attribute to any element that already has some action

```html
<button data-hotkey="Ctrl-N">New</button>
<button data-hotkey="Ctrl-S">Save</button>
```
## Multiple key bidings

You can add alternative bindings to any element using the `|` syntax
```html
<button data-hotkey="Space|B|Shift-X">Jump</button>
```

## Disable actions

There are multiple ways of disabling an action
### Disable the input
If an action is disabled for mouse interactions it will automatically be also disabled for keyboard interactions
```html
<!-- will not respond to mouse and keyboard -->
<button data-hotkey="Ctrl-N" disabled>New</button>
```
### Remove the element
Since keyboardly uses event delegation, when a button is removed from the DOM, the keyboard binding also becomes unreachable.
No leaky events!

### Remove the binding attribute
You can just update or remove the `data-hotkey` attribute


Vue example:
```html
<button :disabled="!isModified" data-hotkey="Ctrl-S" >Save</button>
 or
<button v-if="canSave" data-hotkey="Ctrl-S" >Save</button>
```

