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

And on your user interface
```html
<button data-hotkey="Enter">OK</button>
```