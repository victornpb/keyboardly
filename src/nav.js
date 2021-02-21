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
 * Return the absolute offset top of an element.
 *
 * @param el {Element} The element.
 *
 * @return {Number} The offset top.
 */
// function absoluteOffsetTop(el) {
//     let offsetTop = 0;
//     do {
//         if (!isNaN(el.offsetTop)) {
//             offsetTop += el.offsetTop;
//         }
//     } while ((el = el.offsetParent));
//     return offsetTop;
// }


/**
 * Return the absolute offset left of an element.
 *
 * @param el {Element} The element.
 *
 * @return {Number} The offset left.
 */
// function absoluteOffsetLeft(el) {
//     let offsetLeft = 0;
//     do {
//         if (!isNaN(el.offsetLeft)) {
//             offsetLeft += el.offsetLeft;
//         }
//     } while ((el = el.offsetParent));
//     return offsetLeft;
// }
