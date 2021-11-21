import { Shortcuts, ComponentFocusManager } from './shortcuts';
import { Hotkeys, announceHotkeys } from './hotkeys';


window.hotkeys = new Hotkeys();
window.announceHotkeys = announceHotkeys;
const shortcuts = new Shortcuts();


export default {
    Shortcuts,
    ComponentFocusManager,
    Hotkeys,
    announceHotkeys,
};
