import { announceHotkeys } from './hotkeys';
import Tooltip from './tooltips';
import DomSpotlight from './domSpotlight';

const instances = new Map();
let stage = new DomSpotlight({ zIndex: 100 });
stage.hide();
window.stage = stage;

export default function announce() {
  clear();
  const array = [];
  const hotkeys = announceHotkeys();
  for (const hotkey of hotkeys) {
    const tooltip = new Tooltip({ target: hotkey.elm, html: hotkey.keyBinding, margin: -5 });
    instances.set(hotkey.elm, tooltip);
    array.push(tooltip);
  }
    
  stage.addElements(hotkeys.map(h => h.elm), {padding: -1, radius: 9999});
  stage.show();
  return array;
}

function clear() {
  for (const tooltip of instances.values()) {
    tooltip.destroy();
  }
  instances.clear();
}

window.announce = announce;