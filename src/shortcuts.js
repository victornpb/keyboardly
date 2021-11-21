// import { testElement } from './keybindings';
import delegator from './delegator';
// import navigator from './nav';

function isEnabled(elm) {
  return !(elm.disabled !== undefined ? elm.disabled : elm.hasAttribute('disabled'));
}


// ------- panel focus handing ------- //

export class PanelManager {
  ACTIVE_CLASS = "focus";
  COMPONENT_SELECTOR = "[data-shortcut-component]";

  activePanel = null;

  #focusPanelOnClickHandler = null;
  #tabFocusFollowerHandler = null;
  #navigationHandler = null;

  constructor() {
    this.#focusPanelOnClickHandler = this._focusPanelOnClickHandler.bind(this);
    this.#tabFocusFollowerHandler = this._tabFocusFollowerHandler.bind(this);
    this.#navigationHandler = this._navigationHandler.bind(this);
    this.init();
  }
  init() {
  destroy() {
    document.removeEventListener('click', this.#focusPanelOnClickHandler);
    document.removeEventListener('keyup', this.#tabFocusFollowerHandler);
    document.removeEventListener('keydown', this.#navigationHandler);
  }

  /** Focus a element when clicked */
  _focusPanelOnClickHandler(event) {
    const clickedElm = event.target;
    this.focusPanelOfTargetElm(clickedElm);
  }
  /** Watch for focus changing via Tab */
  _tabFocusFollowerHandler() {
    const focusedElm = document.activeElement;
    this.focusPanelOfTargetElm(focusedElm);
  }


  focusPanelOfTargetElm(targetElm) {
    const parentPanel = targetElm && targetElm.closest(this.COMPONENT_SELECTOR);
    if (parentPanel && isEnabled(parentPanel)) {
      if (parentPanel !== this.activePanel) {
        this.setCurrentPanel(parentPanel);
      }
    } else {
      this.unselectCurrentPanel();
    }
    return parentPanel;
  }

  unselectCurrentPanel() {
    if (this.activePanel) {
      if (document.activeElement === this.activePanel) this.activePanel.blur();
      this.blurElm(this.activePanel);
      this.activePanel = null;
    }
  }

  setCurrentPanel(elm) {
    if (this.activePanel && this.activePanel !== elm) this.unselectCurrentPanel();
    this.activePanel = elm;
    this.focusElm(this.activePanel);
    this.activePanel.setAttribute("tabindex", 0); // make focusable
    // focus the actual panel, unless there's something focused inside it
    if (!this.activePanel.contains(document.activeElement)) { // TODO: optimize?
      this.activePanel.focus();
    }
  }

  focusElm(elm) {
    elm.classList.add(this.ACTIVE_CLASS);
  }
  blurElm(elm) {
    elm.classList.remove(this.ACTIVE_CLASS);
  }

  getCurrentPanel() {
    return this.activePanel;
  }

  _navigationHandler(event) {
    console.log('navigationHandler', event);
    
    let panels = Array.from(document.querySelectorAll(this.COMPONENT_SELECTOR));
    panels = panels.filter(el=>!el.hasAttribute('disabled'))

    const currentPanel = this.getCurrentPanel();
  
    let i = panels.indexOf(currentPanel);
    if (event.key === 'ArrowUp') {
      i--;
    }
    if (event.key === 'ArrowDown') {
      i++;
    }
  
    if (panels[i] && panels[i] !== currentPanel) {
      this.setCurrentPanel(panels[i]);
      panels[i].scrollIntoView();
      event.preventDefault();
      event.stopPropagation();
    }
    
  }

}

/// --- shortcut handling


export class Shortcuts {

  KEYBIDING_ATTR = 'data-shortcut';

  panelMan = new PanelManager();

  #shortcutDelegatorHandler = null;
  constructor() {
    this.init();
  }

  init() {
    if (this.#shortcutDelegatorHandler) throw new Error("Already initialized!");
    this.#shortcutDelegatorHandler = this._shortcutDelegatorHandler.bind(this);
    document.addEventListener('keydown', this.#shortcutDelegatorHandler);

    this.panelMan = new PanelManager();

    // TODO: allow keyup/keydown
  }

  destroy() {
    document.removeEventListener('keydown', this.#shortcutDelegatorHandler);
    this.#shortcutDelegatorHandler = null;
  }

  _shortcutDelegatorHandler(event) {
    //console.log("_shortcutDelegatorHandler", event);
    const currentPanel = this.panelMan.getCurrentPanel();
    delegator(currentPanel, event, this.KEYBIDING_ATTR);
  }


}

// const panelMan = new PanelManager();
// const shortcuts = new Shortcuts();

// export default {
//   panelMan,
//   shortcuts,

// };

// ---- navigator -----

// navigate between panels with arrow keys

