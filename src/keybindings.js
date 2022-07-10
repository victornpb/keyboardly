
const isMacLike = !!navigator.platform.match(/Mac|iOS|iPod|iPad|Apple/i);

export function testElement(elm, event, attribute) {
  const isEnabled = !elm.disabled;
  const keyBinding = elm.getAttribute(attribute);

  return isEnabled && keyBinding && testKeybinding(keyBinding, event);
}

/**
 * Test if a keyboard event matches a keybinding string like ctrl-c
 * @param  {string} keyBinding A key binding string e.g. 'crtl-shift-a', 'shift-x', 'enter'
 * @param  {KeyboardEvent} event A keyboard event
 * @return {boolean} Return true when the event matches the keybiding string
 */
export function testKeybinding(keyBinding, event) {
  function test(keyBinding, event) {
    const keys = keyBinding.split(/-|\+/);
    const k = keys[keys.length - 1];
    return (
      event.ctrlKey === keys.includes('ctrl') &&
      event.shiftKey === keys.includes('shift') &&
      event.altKey === keys.includes('alt') &&
      event.metaKey === keys.includes('meta') &&
      (event.key === k || event.code === k) //TODO: keycodes are its own nightmare
    );
  }

  // Mac
  if (isMacLike) { //TODO: make this a setting
    keyBinding = keyBinding.replace(/cmd|command/g, 'meta');
    keyBinding = keyBinding.replace(/ctrl/g, 'meta'); // Use Coommand instead of commoon ctrl shortcuts
  }

  if (keyBinding.includes('|')) { // has alternative keybidings
    const aliases = keyBinding.split('|');
    for (const kb of aliases) {
      if (test(kb, event)) return true;
    }
    return false;
  } else { // single keybiding
    return test(keyBinding, event);
  }
}

// const keyCodes = {
//     esc: 27,
//     tab: 9,
//     enter: 13,
//     space: 32,
//     up: 38,
//     left: 37,
//     right: 39,
//     down: 40,
//     'delete': [8, 46]
// };
