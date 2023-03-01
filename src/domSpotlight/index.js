/*!
 * FooBar v0.0.0 (https://github.com/username/foo-bar)
 * Copyright (c) username
 * @license MIT
 */
function findHighestZIndex(tagName = '*') {
  let max = null;
  const elems = document.getElementsByTagName(tagName);
  for (const elm of elems) {
    let z = document.defaultView.getComputedStyle(elm, null).getPropertyValue('z-index');
    if (z !== 'auto') {
      z = parseInt(z, 10);
      if (z > max || max === null) max = z;
    }
  }
  return max;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var penner = createCommonjsModule(function (module, exports) {
/*
	Copyright © 2001 Robert Penner
	All rights reserved.

	Redistribution and use in source and binary forms, with or without modification,
	are permitted provided that the following conditions are met:

	Redistributions of source code must retain the above copyright notice, this list of
	conditions and the following disclaimer.
	Redistributions in binary form must reproduce the above copyright notice, this list
	of conditions and the following disclaimer in the documentation and/or other materials
	provided with the distribution.

	Neither the name of the author nor the names of contributors may be used to endorse
	or promote products derived from this software without specific prior written permission.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
	EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
	MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
	COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
	GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
	AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
	OF THE POSSIBILITY OF SUCH DAMAGE.
 */

  (function() {
    var penner, umd;

    umd = function(factory) {
      {
        return module.exports = factory;
      }
    };

    penner = {
      linear: function(t, b, c, d) {
        return c * t / d + b;
      },
      easeInQuad: function(t, b, c, d) {
        return c * (t /= d) * t + b;
      },
      easeOutQuad: function(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOutQuad: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t + b;
        } else {
          return -c / 2 * ((--t) * (t - 2) - 1) + b;
        }
      },
      easeInCubic: function(t, b, c, d) {
        return c * (t /= d) * t * t + b;
      },
      easeOutCubic: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOutCubic: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t + b;
        } else {
          return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
      },
      easeInQuart: function(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      },
      easeOutQuart: function(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOutQuart: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t + b;
        } else {
          return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
      },
      easeInQuint: function(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOutQuint: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOutQuint: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t * t + b;
        } else {
          return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
      },
      easeInSine: function(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
      },
      easeOutSine: function(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
      },
      easeInOutSine: function(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
      },
      easeInExpo: function(t, b, c, d) {
        if (t === 0) {
          return b;
        } else {
          return c * Math.pow(2, 10 * (t / d - 1)) + b;
        }
      },
      easeOutExpo: function(t, b, c, d) {
        if (t === d) {
          return b + c;
        } else {
          return c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
      },
      easeInOutExpo: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        } else {
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
      },
      easeInCirc: function(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOutCirc: function(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOutCirc: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
          return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        } else {
          return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
      },
      easeInElastic: function(t, b, c, d) {
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) ; else if ((t /= d) === 1) ;
        if (!p) {
          p = d * .3;
        }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      },
      easeOutElastic: function(t, b, c, d) {
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) ; else if ((t /= d) === 1) ;
        if (!p) {
          p = d * .3;
        }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
      },
      easeInOutElastic: function(t, b, c, d) {
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) ; else if ((t /= d / 2) === 2) ;
        if (!p) {
          p = d * (.3 * 1.5);
        }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
          return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        } else {
          return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        }
      },
      easeInBack: function(t, b, c, d, s) {
        if (s === void 0) {
          s = 1.70158;
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOutBack: function(t, b, c, d, s) {
        if (s === void 0) {
          s = 1.70158;
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOutBack: function(t, b, c, d, s) {
        if (s === void 0) {
          s = 1.70158;
        }
        if ((t /= d / 2) < 1) {
          return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        } else {
          return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
        }
      },
      easeInBounce: function(t, b, c, d) {
        var v;
        v = penner.easeOutBounce(d - t, 0, c, d);
        return c - v + b;
      },
      easeOutBounce: function(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
          return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
          return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
        } else if (t < 2.5 / 2.75) {
          return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
        } else {
          return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
        }
      },
      easeInOutBounce: function(t, b, c, d) {
        var v;
        if (t < d / 2) {
          v = penner.easeInBounce(t * 2, 0, c, d);
          return v * .5 + b;
        } else {
          v = penner.easeOutBounce(t * 2 - d, 0, c, d);
          return v * .5 + c * .5 + b;
        }
      }
    };

    umd(penner);

  }).call(commonjsGlobal);
});

/**
* @function shorthand
* @param  {Number|Number[]} values A number, or Array of 4, 3, 2 or 1 Values
* @return {[Number, Number, Number, Number]} Array of values [T, R, B, L]
*/
function shorthand(a = 0, b, c, d) {
  let l = arguments.length;
  if (Array.isArray(a)) {
    l = a.length;
    [a, b, c, d] = a;
  }
  if (l === 1) return [a, a, a, a];
  if (l === 2) return [a, b, a, b];
  if (l === 3) return [a, b, c, b];
  if (l === 4) return [a, b, c, d];
  return [0, 0, 0, 0];
}

/**
 * Draws a rounded rectangle on a CanvasRenderingContext2D
 * @param {CanvasRenderingContext2D} context
 * @param {Number} x The x-axis coordinate of the rectangle's starting point.
 * @param {Number} y The y-axis coordinate of the rectangle's starting point.
 * @param {Number} width The rectangle's width. Positive values are to the right, and negative to the left.
 * @param {Number} height The rectangle's height. Positive values are down, and negative are up.
 * @param {Number|Number[]} [radius=5] Border radius; You can specify borders indivudially by passing an array containing 4 values [TL, TR, BR, BL] or  3 Values [TL, TR_BL, BR] or 2 Values [TL_BR, TR_BL].
 */
function roundRect(context, x, y, width, height, radius = 5) {
  function constraintRadius(radius, width, height) {
    const limit = (width < height ? width : height) / 2;
    radius[0] = radius[0] > limit ? limit : radius[0];
    radius[1] = radius[1] > limit ? limit : radius[1];
    radius[2] = radius[2] > limit ? limit : radius[2];
    radius[3] = radius[3] > limit ? limit : radius[3];
    return radius;
  }
  radius = shorthand(radius);
  radius = constraintRadius(radius, width, height);

  context.beginPath();
  context.moveTo(x + radius[0], y);
  context.lineTo(x + width - radius[1], y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius[1]);
  context.lineTo(x + width, y + height - radius[2]);
  context.quadraticCurveTo(x + width, y + height, x + width - radius[2], y + height);
  context.lineTo(x + radius[3], y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius[3]);
  context.lineTo(x, y + radius[0]);
  context.quadraticCurveTo(x, y, x + radius[0], y);
  context.closePath();
}

class Spot {
  type = '';
  _stage = null;
  constructor(stage) {
    this._stage = stage;
  }
  draw(ctx) { throw 'Not implemented'; }
  remove() {
    if (this._stage) {
      this._stage.removeSpot(this);
      this._stage = null;
    }
  }
}

class SpotCircle extends Spot {
  type = 'circle'; x = 0; y = 0; radius = 0;
  constructor(stage, x, y, radius) { super(stage); this.x = x; this.y = y; this.radius = radius; }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
class SpotRetangle extends Spot {
  type = 'retangle'; x = 0; y = 0; width = 0; height = 0;
  constructor(stage, x, y, width, height) { super(stage); this.x = x; this.y = y; this.width = width; this.height = height; }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
class SpotRoundRetangle extends Spot {
  type = 'round-retangle'; x = 0; y = 0; width = 0; height = 0; radius = 5;
  constructor(stage, x, y, width, height, radius) { super(stage); this.x = x; this.y = y; this.width = width; this.height = height; this.radius = radius; }
  draw(ctx) {
    ctx.beginPath();
    roundRect(ctx, this.x, this.y, this.width, this.height, this.radius);
    ctx.fill();
  }
}
class SpotPolygon extends Spot {
  type = 'polygon'; points = [];
  constructor(stage, points) { super(stage); this.points = points; }
  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.points[0], this.points[1]);
    for (let i = 2; i < this.points.length; i += 2) {
      ctx.lineTo(this.points[i], this.points[i + 1]);
    }
    ctx.closePath();
    ctx.fill();
  }
}
class SpotElement extends Spot {
  type = 'element';
  elm = HTMLElement;
  radius = 0;
  padding = 0;
  constructor(stage, element, options) { super(stage); this.elm = element; this.radius = options.radius; this.padding = options.padding; }
  draw(ctx) {
    const rect = this.elm.getBoundingClientRect();
    const padding = shorthand(this.padding);
    const x = rect.left - padding[3];
    const y = rect.top - padding[0];
    const h = rect.height + padding[0] + padding[2];
    const w = rect.width + padding[3] + padding[1];

    ctx.beginPath();
    if (this.radius) {
      roundRect(ctx, x, y, w, h, this.radius);
      ctx.fill();
    } else {
      ctx.fillRect(x, y, w, h);
    }
  }
}

/**
 * spotlight-canvas: a canvas element that dims the screen except for spotlight locations formed by circles or polygons
 */
class SpotlightStage {
  options = {};
  canvas = undefined;
  spots = [];
  looping = false;

  #resizeHandler = undefined;
  #scrollHandler = undefined;
  #nextTick = undefined;

  /**
   * create a spotlight div
   * @param {object} [options]
   * @param {number} [options.x=0] use to place layer on creation
   * @param {number} [options.y=0]
   * @param {number} [options.width=window.innerWidth]
   * @param {number} [options.height=window.innerHeight]
   * @param {number} [options.color=black] color of under layer
   * @param {number} [options.alpha=0.8] alpha of under layer
   * @param {number} [options.zIndex] zIndex of under layer
   * @param {number} [options.forceSyncRedraw] force redrawing after each syncronous operation
   * @param {HTMLElement} [options.parent=document.body] parent of spotlight layer
   */
  constructor(options) {
    this.options = options || {};

    /**
     * @type {HTMLCanvasElement}
     */
    this.canvas = undefined;

    /**
     * the list of spotlights. if manually changed then call redraw() to update the canvas
     * @type {Spot[]}
     */
    this.spots = [];


    this.#resizeHandler = () => {
      if (this.isVisible)
        this.resize();
    };

    this.#scrollHandler = () => {
      if (this.isVisible)
        this.redraw();
    };

    /** requestAnimationFrame request id */
    this.#nextTick = undefined;

    this.init();
  }

  init(options) {
    if (this.canvas) throw new Error('Already initialized!');
    if (options) this.options = options;

    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = this.options.x || 0;
    this.canvas.style.left = this.options.y || 0;
    this.canvas.style.zIndex = this.options.zIndex || (findHighestZIndex() + 1);
    this.canvas.style.pointerEvents = 'none';
    (this.options.parent || document.body).appendChild(this.canvas);

    this.spots = [];

    window.addEventListener('resize', this.#resizeHandler, { passive: true });
    window.addEventListener('scroll', this.#scrollHandler, { passive: true });

    this.resize();
  }

  /**
   * resize the layer to ensure entire screen is covered; also calls redraw()
   * @returns {Spot}
   */
  resize(forceRedrawNow = false) {
    const width = this.options.width || window.innerWidth;
    const height = this.options.height || window.innerHeight;
    this.canvas.width = width;
    this.canvas.height = height;

    if (forceRedrawNow === true) this.redrawNow();
    else this.redraw();
  }

  startLoop() {
    const _this = this;
    if (this.looping) return; // already looping
    this.looping = true;
    function renderLoop() {
      if (_this.looping) _this.redraw(false, renderLoop);
    }
    renderLoop();
    return true;
  }

  stopLoop() {
    this.looping = false;
    if (this.#nextTick) {
      window.cancelAnimationFrame(this.#nextTick);
      this.#nextTick = undefined;
    }
  }

  /**
   * schedule a redraw of the spotlight on next frame
   * @returns {Spot}
   */
  redraw(syncRedraw, cb) {
    console.log('redraw');

    if (syncRedraw ?? this.options.forceSyncRedraw)
      return this.redrawNow();

    if (!this.#nextTick) {
      this.#nextTick = requestAnimationFrame(() => {
        this.#nextTick = undefined;
        this.redrawNow();
        if (cb) cb(this);
      });
    }
  }

  /**
   * redraw of the spotlight (usually called internally)
   * @returns {Spot}
   */
  redrawNow() {
    console.log('redraw now!');

    const ctx = this.canvas.getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = this.options.color || '#000000';
    ctx.globalAlpha = this.options.alpha || 0.8;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.restore();
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';

    for (const spot of this.spots) {
      spot.draw(ctx, this.options);
    }

    ctx.restore();
  }

  /**
   * clears any cutouts
   * @param {boolean} [redraw=true] Redraws the scene
   * @returns {Spot}
   */
  clear(redraw = true) {
    this.spots = [];
    if (redraw == true) {
      this.resize();
    }
  }

  /**
   * adds a circle spotlight
   * @param {number} x
   * @param {number} y
   * @param {number} radius
   * @param {boolean} [redraw=true] Redraws the scene
   * @returns {SpotCircle}
   */
  addCircle(x, y, radius, redraw = true) {
    const spot = new SpotCircle(this, x, y, radius);
    this.spots.push(spot);
    if (redraw === true) this.redraw();
    return spot;
  }

  /**
   * adds a rectangle spotlight
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {boolean} [redraw=true] Redraws the scene
   * @returns {SpotRetangle}
   */
  addRectangle(x, y, width, height, redraw = true) {
    const spot = new SpotRetangle(this, x, y, width, height);
    this.spots.push(spot);
    if (redraw === true) this.redraw();
    return spot;
  }

  /**
   * adds a rectangle spotlight
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {boolean} [redraw=true] Redraws the scene
   * @returns {SpotRetangle}
   */
  addRoundRectangle(x, y, width, height, radius, redraw = true) {
    const spot = new SpotRoundRetangle(this, x, y, width, height, radius);
    this.spots.push(spot);
    if (redraw === true) this.redraw();
    return spot;
  }

  /**
   * adds a polygon spotlight
   * @param {number[]} points - [x1, y1, x2, y2, ... xn, yn]
   * @param {boolean} [redraw=true] Redraws the scene
   * @returns {SpotPolygon}
   */
  addPolygon(points, redraw = true) {
    const spot = new SpotPolygon(this, points);
    this.spots.push(spot);
    if (redraw === true) this.redraw();
    return spot;
  }

  /**
   * adds a element spotlight
   * @param {HTMLElement} element a DOM element
   * @param {boolean} [redraw=true] Redraws the scene
   * @returns {SpotElement}
   */
  addElement(element, options = {}, redraw = true) {
    const spot = new SpotElement(this, element, options);
    this.spots.push(spot);
    if (redraw === true) this.redraw();
    return spot;
  }

  /**
   * adds a spotlight to a list of elements
   * @param {HTMLElement[]} elements array of DOM elements
   * @param {boolean} [redraw=true] Redraws the scene
   * @returns {Spot[]}
   */
  addElements(elements, options, redraw = true) {
    const spots = [];
    for (const element of elements) {
      const spot = this.addElement(element, options, false);
      spots.push(spot);
    }
    if (redraw === true) this.redraw();
    return spots;
  }

  /**
   *
   * @param {Spot} spot Removes a spot from the canvas
   * @param {boolean} [redraw=true] Redraws the scene
   * @return {boolean} True if the spotlight was removed
   */
  removeSpot(spot, redraw = true) {
    const index = this.spots.indexOf(spot);
    if (index > -1) {
      this.spots.splice(index, 1);
      if (redraw === true) this.redraw();
      return true;
    }
    return false;
  }

  /**
   * used internally for fade
   * @param {object} data
   * @private
   */
  _fade(data) {
    return new Promise((resolve, reject) => {
      this.request = null;
      const now = performance.now();
      const difference = now - this.last;
      this.last = now;
      data.time += difference;
      const change = data.end - data.start;
      if (data.time > data.duration) {
        this.canvas.style.opacity = data.end;
        if (data.onEnd) {
          data.onEnd();
        }
      } else {
        this.canvas.style.opacity = data.ease(
          data.time,
          data.start,
          change,
          data.duration
        );
        this.request = requestAnimationFrame(() => this._fade(data));
      }
    });
  }

  /**
   * fade in the under layer
   * @param {*} [options]
   * @param {number} [options.start=0] starting opacity
   * @param {number} [options.end=1] ending opacity
   * @param {number} [options.duration=1000] duration of fade in milliseconds
   * @param {string|Function} [options.ease='easeInOutSine'] easing function (@see https://www.npmjs.com/package/penner)
   * @param {Function} [options.onEnd] callback after fading
   * @returns {Spot}
   */
  fadeIn(options) {
    if (this.request) {
      cancelAnimationFrame(this.request);
    }
    options = options || {};
    const start = typeof options.start === 'undefined' ? 0 : options.start;
    const end = typeof options.end === 'undefined' ? 1 : options.end;
    const ease = !options.ease
      ? penner.easeInOutSine
      : typeof options.ease === 'string'
        ? penner[options.ease]
        : options.ease;
    const onEnd = options.onEnd;
    this.canvas.style.opacity = start;
    const duration = options.duration || 1000;
    this.last = performance.now();
    this.canvas.style.display = 'block';
    this.canvas.style.opacity = 0;
    this._fade({ time: 0, start, end, duration, ease, onEnd });
    return this;
  }

  /**
   * fade out the under layer
   * @param {*} [options]
   * @param {number} [options.start=1] starting opacity
   * @param {number} [options.end=0] ending opacity
   * @param {number} [options.duration=1000] duration of fade in milliseconds
   * @param {string|Function} [options.ease='easeInOutSine'] easing function (@see https://www.npmjs.com/package/penner)
   * @param {Function} [options.onEnd] callback after fading
   * @returns {Spot}
   */
  fadeOut(options) {
    options = options || {};
    options.start = typeof options.start === 'undefined' ? 1 : options.start;
    options.end = typeof options.end === 'undefined' ? 0 : options.end;
    this.fadeIn(options);
    return this;
  }

  /**
   * show spotlight
   * @return {SpotlightStage}
   */
  show() {
    this.canvas.style.display = 'block';
    this.canvas.style.opacity = 1;
    return this;
  }

  /**
   * hide spotlight
   * @return {SpotlightStage}
   */
  hide() {
    this.canvas.style.display = 'none';
    this.canvas.style.opacity = 0;
    return this;
  }

  /**
   * checks whether spotlight is visible
   * @returns {boolean}
   */
  get isVisible() {
    return this.canvas && this.canvas.style.display !== 'none';
  }

  /**
   * removes spotlight
   */
  destroy() {

    if (this.canvas.parentElementNode) this.canvas.parentElementNode.removeChild(this.canvas);
    this.canvas = undefined;

    this.spots = [];

    if (this.#nextTick) {
      cancelAnimationFrame(this.#nextTick);
      this.#nextTick = undefined;
    }

    window.removeEventListener('scroll', this.#scrollHandler);
    window.removeEventListener('resize', this.#resizeHandler);
  }
}

window.Spotlight = SpotlightStage;

export { SpotlightStage as default };
