// import { testElement } from './keybindings';
import delegator from './delegator';


/**
 * A hot key is a key combination that the user can press to perform an action quickly.
 * Global to the application, examples: save, undo, bring a menu on a game etc...
 */
export default class Hotkeys {
  #handler = null;
  KEYBIDING_ATTR = 'data-hotkey';
  constructor() {
    this.init();
  }

  init() {
    if (this.#handler) throw new Error("Already initialized!");
    this.#handler = this._hotkeysDelegatorHandler.bind(this);
    document.addEventListener('keydown', this.#handler);
  }

  destroy() {
    document.removeEventListener('keydown', this.#handler);
    this.#handler = null;
  }

  _hotkeysDelegatorHandler(event) {
    //console.log("hotkeysDelegatorHandler", event);
    delegator(document, event, this.KEYBIDING_ATTR);
  }
}


window.hotkeys = new Hotkeys();

// function announceHotkeys() {
//   const elms = Array.from(document.querySelectorAll(`[${KEYBIDING_ATTR}]`)).filter(
//     (elm) => !elm.disabled
//   );

//   const hotkeys = elms.map((elm) => ({
//     keyBinding: elm.getAttribute(KEYBIDING_ATTR),
//     text: elm.innerText,
//     title: elm.title,
//     elm: elm,
//   }));

//   return hotkeys;
// }
// window.announceHotkeys = announceHotkeys;