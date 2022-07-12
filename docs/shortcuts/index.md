# Shortcuts

## Introduction

Shortcuts are a concept in Keyboardly, for any keyboard interaction that can only be triggered on a specific context or item is selected.

Usage examples:
 - <kbd>Space</kbd> on a Item to zoom it
 - <kbd>E</kbd> Activates the current item selected in a list
 - <kbd>Delete</kbd> Removes the selected file in a list

## How to use

Initialize Shortcuts on your App entrypoint

```js
import kbdl from 'keyboardly';
import 'keyboardly/style.css';

const shortcuts = new kbdl.Shortcuts();
```

You only need to this once on your SPA!

## Creating a context

Diferently from [Hotkeys](../hotkeys/), shortcuts only work on a specific context, which we call `shortcut-components`.
So actions only work inside them.

So first we need to specify what are the boundaries of a context, it can be
    **Item** in a list, a **line** in a table, a **card**, a **panel**, a **tab**, etc...

Creating a context is as simple as adding `data-shortcut-component` attribute to any DOM element.

Example:
```html
<div class="list">
    <div class="card" data-shortcut-component>
        ...
```

::: info
The data-shortcut-component doesn't need to reflect your actual component structure inside your project,
it only needs to be a visually defined container. Like a card, panel, row...
:::

## Adding shortcuts

You just need to add a `data-shortcut` attribute to any element that already has some action

```html
<ul>
    <li class="card" data-shortcut-component>
        Item 1        
        <button data-shortcut="O">Open</button>
        <button data-shortcut="X">Remove</button>
        <button data-shortcut="Shift-D">Duplicate</button>
    </li>

    <li class="card" data-shortcut-component>  
        Item 2      
        <button data-shortcut="O">Open</button>
        <button data-shortcut="X">Remove</button>
        <button data-shortcut="Shift-D">Duplicate</button>
    </li>
    ...
```
## Multiple key bidings

You can add alternative bindings to any element using the `|` syntax
```html
<button data-shortcut="Space|B|Shift-X">Jump</button>
```

## Disable actions

There are multiple ways of disabling an action
### Disable the input
If an action is disabled for mouse interactions it will automatically be also disabled for keyboard interactions
```html
<!-- will not respond to mouse and keyboard -->
<button data-shortcut="Ctrl-N" disabled>New</button>
```
### Remove the element
Since keyboardly uses event delegation, when a button is removed from the DOM, the keyboard binding also becomes unreachable.
No leaky events!

### Remove the binding attribute
You can just update or remove the `data-shortcut` attribute


Vue example:
```html
<button :disabled="!isModified" data-shortcut="Ctrl-S" >Save</button>
 or
<button v-if="canSave" data-shortcut="Ctrl-S" >Save</button>
```
