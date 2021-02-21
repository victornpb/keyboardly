
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


function reverse(axis) {
    if(axis==='x') return 'y';
    if(axis==='y') return 'x';
    if(axis==='top') return 'bottom';
    if(axis==='left') return 'right';
    if(axis==='bottom') return 'top';
    if(axis==='right') return 'left';
}

function perpendicular(axis) {
    if (axis === 'x') return 'y';
    if (axis === 'y') return 'x';
    if (axis === 'top') return 'right';
    if (axis === 'left') return 'top';
    if (axis === 'bottom') return 'left';
    if (axis === 'right') return 'bottom';
}


function findNextElm(fromItem, rects, direction) {

    function distance(aX, aY, bX, bY, fast=false) {
        return Math.sqrt(Math.pow((aX - bX), 2) + Math.pow((aY - bY), 2));
    }
    function fastDistance(aX, aY, bX, bY) {
        return ((aX - bX) ** 2) + ((aY - bY) ** 2);
    }

    function findNext(fromItem, rects, dir, aligned) {
        const axis = dir ==='right' || dir==='left' ? 'x' : 'y';
        const opAxis = perpendicular(axis);
        const vector = dir === 'top' || dir === 'left' ? true : false;
        const straightThreshold = 1;
        
        let dest;
        for (const item of rects) {
            if (
                item !== fromItem &&
                (vector ? (item[axis] < fromItem[axis]) : (item[axis] > fromItem[axis]))
                && (aligned ? Math.abs(fromItem[opAxis] - item[opAxis]) <= straightThreshold : true) // roughtly aligned
            ) {
                if (!dest) dest = item;
                else if (
                    fastDistance(fromItem[axis], fromItem[opAxis], item[reverse(dir)], item[opAxis]) < fastDistance(fromItem[axis], fromItem[opAxis], dest[reverse(dir)], dest[opAxis])
                    // fastDistance(fromItem[axis], fromItem[opAxis], item[axis], item[opAxis]) < fastDistance(fromItem[axis], fromItem[opAxis], dest[axis], dest[opAxis])
                    // Math.abs(fromItem[axis] - item[axis]) < Math.abs(fromItem[axis] - dest[axis]) && // nearest 
                    // Math.abs(fromItem[opAxis] - item[opAxis]) < Math.abs(fromItem[opAxis] - dest[opAxis]) // closest opposite axis
                ) dest = item; // is nearest
            }
        }
    
        return dest;
    }

    let item = findNext(fromItem, rects, direction, true);
    if (item) {
        console.log('aliged');
        return item;
    }
    else {
        console.log('nearest');
        return findNext(fromItem, rects, direction, false);
    }
    
}


let currentFocused;
function focus(elm) {
    if (currentFocused) currentFocused.classList.remove('focus');
    currentFocused = elm;
    currentFocused.classList.add('focus');
    // elm.scrollIntoView();
}


window.addEventListener('load', () => {
    console.log('Loaded!');

    let rects = [];
    // const elms = Array.from(document.querySelectorAll('.focusable'));
    // for (const elm of elms) {
    //     const rect = getRect(elm);
    //     elm.innerHTML = `${rect.x},${rect.y}`;
    //     rects.push(rect);
    // }

    // focus(rects[0].element);

    
    document.addEventListener('keydown', (e) => {

        rects = Array.from(document.querySelectorAll('.focusable')).map(getRect);

        if (!currentFocused) focus(rects[0].element);

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            console.time('up')
            const el = findNextElm(getRect(currentFocused), rects, 'top');
            console.timeEnd('up')
            console.log(el);
            if (el) focus(el.element);
        }
        else if (e.key === 'ArrowDown') {
            e.preventDefault();
            console.time('down')
            const el = findNextElm(getRect(currentFocused), rects, 'bottom');
            console.timeEnd('down')
            console.log(el);
            if (el) focus(el.element);
        }
        else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            console.time('up')
            const el = findNextElm(getRect(currentFocused), rects, 'left');
            console.timeEnd('up')
            console.log(el);
            if (el) focus(el.element);
        }
        else if (e.key === 'ArrowRight') {
            e.preventDefault();
            console.time('up')
            const el = findNextElm(getRect(currentFocused), rects, 'right');
            console.timeEnd('up')
            console.log(el);
            if (el) focus(el.element);
        }
    });

   

});






function random(min, max) {
    return Math.round((Math.random() *( Math.abs(max - min))) + min);
}




