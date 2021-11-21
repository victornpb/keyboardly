import { DEBUG } from './DEBUG';
import { testElement } from "./keybindings";

const ATTR_PREVENT = "data-prevent";

export default function shortcutDelegator(
  container,
  event,
  keybindingAttr,
  dispatcherFn = _defaultAction,
) {
  if (container) {
    // focused on input
    const activeElm = document.activeElement;
    const isFocusedOnInput = activeElm.nodeName === "INPUT" || activeElm.nodeName === "TEXTAREA";

    // find elements with shortcuts 
    // TODO: cache oportunity
    const matchedElements = Array.from(container.querySelectorAll(`[${keybindingAttr}]`))
      .filter((elm) => testElement(elm, event, keybindingAttr));

    if (matchedElements.length) {
      if (DEBUG) console.log("triggering shortcuts", matchedElements);
      if (isFocusedOnInput && matchedElements.every((elm) => !elm.hasAttribute(ATTR_PREVENT))) {
        if (DEBUG) console.log("shortcut prevented!");
        return; // ignore event unless a hotkey is set to prevent, in that case prevent the original
      }

      event.preventDefault();
      event.stopPropagation();

      // trigger clicks
      matchedElements.forEach((element) => {
        if (typeof dispatcherFn === "function") {
          if (DEBUG) console.log("dispatching shortcut...", container, element, event);
          dispatcherFn({
            container,
            element,
            event,
          });
        }
      });

    }
  }
}


function _defaultAction({ container, element, event }) {
  element.focus();
  element.click();
}