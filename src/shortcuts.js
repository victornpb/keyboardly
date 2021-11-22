import { DEBUG, PREFIX } from './DEBUG';

import delegator from './delegator';
import { findNextItem } from './navigation';

function isEnabled(elm) {
  return !(elm.disabled !== undefined ? elm.disabled : elm.hasAttribute('disabled'));
}

export class ComponentFocusManager {
  ACTIVE_CLASS = "focus";
  COMPONENT_SELECTOR = "[data-shortcut-component]";

  activeComponent = null;

  #focusPanelOnClickHandler = null;
  #tabFocusFollowerHandler = null;
  #navigationHandler = null;

  constructor() {
    this.#focusPanelOnClickHandler = this._focusPanelOnClickHandler.bind(this);
    this.#tabFocusFollowerHandler = this._tabFocusFollowerHandler.bind(this);
    this.#navigationHandler = this._navigationHandler.bind(this);
    // this.init();
  }
  init() {
    document.addEventListener("click", this.#focusPanelOnClickHandler);
    document.addEventListener("keyup", this.#tabFocusFollowerHandler);
    document.addEventListener("keydown", this.#navigationHandler);
  }
  destroy() {
    document.removeEventListener('click', this.#focusPanelOnClickHandler);
    document.removeEventListener('keyup', this.#tabFocusFollowerHandler);
    document.removeEventListener('keydown', this.#navigationHandler);
  }

  /** Focus a element when clicked */
  _focusPanelOnClickHandler(event) {
    const clickedElm = event.target;
    this.focusComponentOfTargetElm(clickedElm);
  }
  /** Watch for focus changing via Tab */
  _tabFocusFollowerHandler() {
    const focusedElm = document.activeElement;
    this.focusComponentOfTargetElm(focusedElm);
  }


  focusComponentOfTargetElm(targetElm) {
    const component = targetElm && targetElm.closest(this.COMPONENT_SELECTOR);
    if (component && isEnabled(component)) {
      if (component !== this.activeComponent) {
        this.setCurrentComponent(component);
      }
    } else {
      this.unselectCurrentComponent();
    }
    return component;
  }

  unselectCurrentComponent() {
    if (this.activeComponent) {
      if (document.activeElement === this.activeComponent) this.activeComponent.blur();
      this.blurElm(this.activeComponent);
      this.activeComponent = null;
    }
  }

  setCurrentComponent(elm) {
    if (this.activeComponent && this.activeComponent !== elm) this.unselectCurrentComponent();
    this.activeComponent = elm;
    this.focusElm(this.activeComponent);
    this.activeComponent.setAttribute("tabindex", 0); // make focusable
    // focus the actual panel, unless there's something focused inside it
    if (!this.activeComponent.contains(document.activeElement)) { // TODO: optimize?
      this.activeComponent.focus();
    }
  }

  focusElm(elm) {
    elm.classList.add(this.ACTIVE_CLASS);
  }
  blurElm(elm) {
    elm.classList.remove(this.ACTIVE_CLASS);
  }

  getActiveComponent() {
    return this.activeComponent;
  }

  _navigationHandler(event) {
    if (DEBUG) console.log(PREFIX, 'navigationHandler', event);

    // const GROUP_ATTR = 'data-shortcut-group';

    let components = Array.from(document.querySelectorAll(this.COMPONENT_SELECTOR));
    components = components.filter(isEnabled);

    let nextPanel;
    const currentPanel = this.getActiveComponent();

    if (currentPanel) {
      nextPanel = findNextItem(components, currentPanel, event);
    } else {
      nextPanel = components[0];
    }

    if (nextPanel && nextPanel !== currentPanel) {
      event.preventDefault();
      event.stopPropagation();
      this.setCurrentComponent(nextPanel);
      // nextPanel.scrollIntoView();
    }

    // _domNavigation() {
    //   let panels = Array.from(document.querySelectorAll(this.COMPONENT_SELECTOR));
    //   panels = panels.filter(el=>!el.hasAttribute('disabled'))

    //   const currentPanel = this.getCurrentPanel();

    //   let i = panels.indexOf(currentPanel);
    //   if (event.key === 'ArrowUp') {
    //     i--;
    //   }
    //   if (event.key === 'ArrowDown') {
    //     i++;
    //   }

    //   if (panels[i] && panels[i] !== currentPanel) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     this.setCurrentComponent(nextPanel);
    //     // nextPanel.scrollIntoView();
    //   }
    // }
  }

}

/// --- shortcut handling


export class Shortcuts {
  KEYBIDING_ATTR = 'data-shortcut';
  mngr = null;

  #isInit = false;
  #shortcutDelegatorHandler = null;
  constructor() {
    this.#shortcutDelegatorHandler = this._shortcutDelegatorHandler.bind(this);
    this.mngr = new ComponentFocusManager();
    this.init();
  }

  init() {
    if (!this.#isInit) {
      this.mngr.init();

      // TODO: add support for holding keys keyup/keydown
      document.addEventListener('keydown', this.#shortcutDelegatorHandler);

      this.#isInit = true;
    } else throw new Error("Already initialized!");
  }

  destroy() {
    this.mngr.destroy();
    document.removeEventListener('keydown', this.#shortcutDelegatorHandler);
    this.#isInit = false;
  }

  _shortcutDelegatorHandler(event) {
    if (DEBUG) console.log(PREFIX, "_shortcutDelegatorHandler", event);
    const currentPanel = this.mngr.getActiveComponent();
    delegator(currentPanel, event, this.KEYBIDING_ATTR);
  }

  getShortcuts() {
    const currentPanel = this.mngr.getActiveComponent();
    const elms = Array.from(currentPanel.querySelectorAll(`[${this.KEYBIDING_ATTR}]`)).filter(
      (elm) => !elm.disabled
    );

    const shortcuts = elms.map((elm) => ({
      keyBinding: elm.getAttribute(this.KEYBIDING_ATTR),
      text: elm.innerText,
      title: elm.title,
      elm: elm,
    }));

    return shortcuts;
  }

  getAllShortcuts() {
    const elms = Array.from(document.querySelectorAll(`[${this.KEYBIDING_ATTR}]`)).filter(
      (elm) => !elm.disabled
    );

    const shortcuts = elms.map((elm) => ({
      keyBinding: elm.getAttribute(this.KEYBIDING_ATTR),
      text: elm.innerText,
      title: elm.title,
      elm: elm,
    }));

    return shortcuts;
  }

}
