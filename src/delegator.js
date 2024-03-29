import { DEBUG, PREFIX } from './DEBUG';
import { testElement } from './keybindings';

const ATTR_OVERRIDE_DEFAULT = 'data-prevent';

export default function shortcutDelegator(
  container,
  event,
  keybindingAttr,
  dispatcherFn = _defaultAction,
) {
  if (container) {
    // focused on input
    const activeElm = document.activeElement;
    const isFocusedOnInput = activeElm.nodeName === 'INPUT' || activeElm.nodeName === 'TEXTAREA';

    // find elements with shortcuts 
    // TODO: cache oportunity
    const matchedElements = Array.from(container.querySelectorAll(`[${keybindingAttr}]`))
      .filter((elm) => testElement(elm, event, keybindingAttr));

    if (matchedElements.length) {

      if (isFocusedOnInput && matchedElements.every(elm => !elm.hasAttribute(ATTR_OVERRIDE_DEFAULT))) return; //ignore event unless a hotkey is set to prevent

      // trigger clicks
      matchedElements.forEach((element) => {
        if (typeof dispatcherFn === 'function') {
          if (DEBUG) console.log(PREFIX, 'dispatching shortcut...', container, element, event, dispatcherFn);
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
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  try { element.focus(); } catch (_) { /* ignore */ }
  try { element.click(); } catch (_) { /* ignore */ }
}
