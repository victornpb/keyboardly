export function createRects(count, { areaWidth = 800, areaHeight = 800, widthRange = [2, 4], heightRange = [2, 4], gridSize = 32 }) {

  // create non overlapping rects
  const rects = [];
  for (let i = 0; i < count; i++) {
    let rect;
    let tries = 500;
    do {
      const w = getRandomInt(widthRange[0], widthRange[1]) * gridSize;
      const h = getRandomInt(heightRange[0], heightRange[1]) * gridSize;
      const t = getRandomInt(0, Math.floor((areaHeight - h) / gridSize)) * gridSize;
      const l = getRandomInt(0, Math.floor((areaWidth - w) / gridSize)) * gridSize;
      rect = { t, l, w, h, r: l + w, b: t + h };
    } while (collision(rects, rect) && --tries > 0);
    if (tries) rects.push(rect);
  }
  return rects;
}

function collision(rects, a) {
  for (const b of rects) {
    if (
      a.l < b.l + b.w &&
      a.l + a.w > b.l &&
      a.t < b.t + b.h &&
      a.h + a.t > b.t
    ) return true;
  }
  return false;
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
