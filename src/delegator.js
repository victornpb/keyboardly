import { testElement } from "./keybindings";

const ATTR_PREVENT = "data-prevent";

export default function shortcutDelegator(
  container,
  event,
  keybindingAttr,
  dispatcherFn
) {
  if (container) {
    // focused on input
    const activeElm = document.activeElement;
    const isFocusedOnInput =
      activeElm.nodeName === "INPUT" || activeElm.nodeName === "TEXTAREA";

    // find elements with shortcuts 
    // TODO: cache oportunity
    const matchedElements = Array.from(
      container.querySelectorAll(`[${keybindingAttr}]`)
    ).filter((elm) => testElement(elm, event, keybindingAttr));

    if (matchedElements.length) {
      if (
        isFocusedOnInput &&
        matchedElements.every((elm) => !elm.hasAttribute(ATTR_PREVENT))
      ) {
        return; // ignore event unless a hotkey is set to prevent, in that case prevent the original
      }

      event.preventDefault();
      event.stopPropagation();

      // trigger clicks
      matchedElements.forEach((element) => {
        if (typeof dispatcherFn === "function") {
          dispatcherFn({
            container,
            element: element,
            event,
          });
        } else {
          element.click();
          element.focus();
        }
      });

      console.log("triggering shortcuts", matchedElements);
    }
  }
}
