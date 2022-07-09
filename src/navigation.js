import { DEBUG, PREFIX } from './DEBUG';

export function findNextItem(elements, current, e) {
  const rects = elements.map(getRect);
  const focused = getRect(current);

  const dryRun = e.shiftKey;

  let next;
  if (e.key === 'ArrowUp') {
    next = findAbove(focused, rects, dryRun);
  }
  else if (e.key === 'ArrowDown') {
    next = findBelow(focused, rects, dryRun);
  }
  else if (e.key === 'ArrowLeft') {
    next = findLeft(focused, rects, dryRun);
  }
  else if (e.key === 'ArrowRight') {
    next = findRight(focused, rects, dryRun);
  }


  if (dryRun) { //debug
    //DEBUG_TARGET(current);
    return;
  }

  if (next) {
    e.preventDefault();
    if (dryRun) DEBUG_TARGET(next);
    return next.element;
  }
  return null;
}



function getRect(element) {
  const r = element.getBoundingClientRect();
  const rect = {
    element: element,
    left: r.left,
    top: r.top,
    right: r.right,
    bottom: r.bottom,
    width: r.width,
    height: r.height,
    x: r.left + Math.floor(r.width / 2),
    y: r.top + Math.floor(r.height / 2)
  };

  return rect;
}

// function inViewport(el) {
//     let rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= window.innerHeight &&
//         rect.right <= window.innerWidth
//     );
// }


/**
 * return direction of angle
 * @param {number} angle Degrees in range 0-360
 *   45  up   135
 *     \    /
 * left  \/  right
 *       /\
 *     /    \
 *  315 down 225
 */
function direction(angle) {
  if (angle >= 45 && angle < 135) return 'up';
  if (angle >= 135 && angle < 225) return 'right';
  if (angle >= 225 && angle < 315) return 'down';
  if (angle >= 315 || angle < 45) return 'left';
}
function distance(fromItem, toItem) {
  const dx = toItem.x - fromItem.x;
  const dy = toItem.y - fromItem.y;
  return Math.sqrt(dx * dx + dy * dy);
}
function findAngle(fromItem, toItem) {
  const dx = fromItem.x - toItem.x;
  const dy = fromItem.y - toItem.y;
  const angle = Math.atan2(dy, dx);
  const deg = angle * 180 / Math.PI;  // radians to degrees
  return (deg % 360) + (deg < 0 ? 360 : 0); // normalize angles to 0-360
}

function findBelow(fromItem, rects, dryRun) {
  let dest;
  for (const item of rects) {
    if (dryRun) DEBUG_TARGET(item, 0);
    if (item.element === fromItem.element) continue;
    const angle = findAngle(fromItem, item);
    // item.element.innerHTML = `${angle}º`;

    if (direction(angle) === 'down') {
      if (!dest) dest = item;
      if (dryRun) DEBUG_TARGET(item, 1);
      if (distance(fromItem, item) < distance(fromItem, dest)) {
        dest = item;
      }
    }
  }

  return dest;
}

function findAbove(fromItem, rects, dryRun) {
  let dest;
  for (const item of rects) {
    if (dryRun) DEBUG_TARGET(item, 0);
    if (item.element === fromItem.element) continue;
    const angle = findAngle(fromItem, item);
    // item.element.innerHTML = `${angle}º`;

    if (direction(angle) === 'up') {
      if (!dest) dest = item;
      if (dryRun) DEBUG_TARGET(item, 1);
      if (distance(fromItem, item) < distance(fromItem, dest)) {
        dest = item;
      }
    }
  }

  return dest;
}

function findRight(fromItem, rects, dryRun) {
  let dest;
  for (const item of rects) {
    if (dryRun) DEBUG_TARGET(item, 0);
    if (item.element === fromItem.element) continue;
    const angle = findAngle(fromItem, item);
    // item.element.innerHTML = `${angle}º`;

    if (direction(angle) === 'right') {
      if (!dest) dest = item;
      if (dryRun) DEBUG_TARGET(item, 1);
      if (distance(fromItem, item) < distance(fromItem, dest)) {
        dest = item;
      }
    }
  }

  return dest;
}

function findLeft(fromItem, rects, dryRun) {
  let dest;
  for (const item of rects) {
    if (dryRun) DEBUG_TARGET(item, 0);
    if (item.element === fromItem.element) continue;
    const angle = findAngle(fromItem, item);
    // item.element.innerHTML = `${angle}º`;

    if (direction(angle) === 'left') {
      if (!dest) dest = item;
      if (dryRun) DEBUG_TARGET(item, 1);
      if (distance(fromItem, item) < distance(fromItem, dest)) {
        dest = item;
      }
    }
  }

  return dest;
}


////

function DEBUG_TARGET(item, x) {
  if (DEBUG) item.element.style.backgroundColor = x ? '#FF0' : '#333';
  setTimeout(() => item.element.style.backgroundColor = '', 1000 * 3);
}
