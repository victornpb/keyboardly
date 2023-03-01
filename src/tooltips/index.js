const DIRECTIVE = 'tooltip';

/**
 * Creates the actual tooltip element, appends it to the document
 * at this point it is not visible or positioned.
 */
function createTooltipElm(doc = document) {
  const style = `
  position: fixed;
  z-index: 9999999;
  pointer-events: none;
  will-change: top, left, opacity;
  --transition: opacity 250ms ease 100ms;
  font-size: 18px;
  font-family: sans-serif;
  padding: 5px 8px;
  border-radius: 2px;
  background: rgba(218,218,218, 0.85);
  color: rgb(0 0 0);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  font-weight: bold;
  min-width: 32px;
  text-align: center;
  text-transform: capitalize;
         top: 0;
         left: 0;
         opacity: 0;
         display: none;
     `;

  const tooltipElm = doc.createElement('div');
  tooltipElm.setAttribute('class', `v-${DIRECTIVE}-directive`);
  tooltipElm.style.cssText = style;

  // ARIA https://www.w3.org/TR/wai-aria-practices-1.1/#tooltip
  tooltipElm.id = `id_${Math.random()}`;
  tooltipElm.setAttribute('role', 'tooltip');
  tooltipElm.setAttribute('aria-hidden', 'true');

  return tooltipElm;
}

function positionTooltip(tooltipElement, targetElement, margin = 0, doc) {

  // The tooltip is already in the document, but not visible.
  // It needs to be be a block, and be inside the screen for it to have dimensions.
  // Since we reuse tooltips, if the content changes, and it overflows off-screen,
  // the computed styles will not match when placed in the the real posision.
  if (tooltipElement.style.display === 'none') {
    tooltipElement.style.opacity = 0;
    tooltipElement.style.display = 'block';
    tooltipElement.style.top = `${0}px`;
    tooltipElement.style.left = `${0}px`;
  }

  // Get dimensions and positioning of target and tooltip
  const tooltipRect = tooltipElement.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();

  // set tooltip on top center of target
  let y = targetRect.top - margin - tooltipRect.height;
  let x = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;

  // is tooltip above screen? move it below the target
  if (y < 0) y = targetRect.bottom + margin;
  // is tooltip-left-side off screen? align with target-left-side
  if (x < 0) x = targetRect.left;
  // is tooltip-right-side off screen? align with target-right-side
  const vw = Math.max(doc.documentElement.clientWidth || 0, window.innerWidth || 0);
  if (x + tooltipRect.width > vw) x = targetRect.right - tooltipRect.width;

  // place the tooltip position to the x,y calculated
  tooltipElement.style.left = `${x}px`;
  tooltipElement.style.top = `${y}px`;
}

export default class Tooltip {
  constructor({ target, html, margin=5, root=document.body }) {
    this.margin = margin;
    this.target = target;
    this.el = createTooltipElm(this.target.ownerDocument);
    if (typeof root === 'string') root = document.querySelector(root);
    root.appendChild(this.el);

    // ARIA https://www.w3.org/TR/wai-aria-practices-1.1/#tooltip
    this.target.setAttribute('aria-describedby', this.el.id);
    this.el.setAttribute('aria-hidden', 'false');

    this.update(html);
  }
  update(html) {
    this.el.innerHTML = html;
    if (this.target && this.target.parentNode) {
      positionTooltip(this.el, this.target, this.margin, this.el.ownerDocument);
      this.el.style.opacity = 1;
    }
  }
  destroy() {
    if (this.target && this.target.parentNode) {
      this.target.removeAttribute('aria-describedby');
    }
    if (this.el.parentElement) this.el.parentElement.removeChild(this.el);
  }
}