import fs from 'fs';
import path from 'path';
import fg from 'fast-glob';

const options = {
    followSymbolicLinks: false,
    markDirectories: true,
    deep: 2,
    dot: false,
    ignore: ['node_modules', 'public'],
};

const menu = fg.sync('./**/*.md', options);
console.log(menu);

const items = menu.map(file => {
    const filename = path.basename(file, '.md');
    const dirname = path.dirname(file);
    return {
        index: extractIndex(filename),
        name: filenameToTitle(filename),
        group: filenameToTitle(dirname),
        dirname: dirname,
        path: file,
    };
});

console.log(items);

function extractIndex(filename) {
    const m =filename.match(/^(\d+)\./);
    return m ? parseInt(m[1]) : 0;
}

function filenameToTitle(filename) {
    return filename.replace(/\.md$/, '')
        .replace(/-|_/g, ' ') // convert - or _ to spaces
        .replace(/^(\d+)\./, '') // remove leading number
        .replace(/\w\S*/g, function (txt) { // capitalize each word
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

const nav = {};
for (const item of items) {
    const match = `/${item.dirname}/`;
    if (!nav[match]) {
        nav[match] = [{
            text: filenameToTitle(item.group),
            collapsible: true,
            items: [],
        }];
    }
    nav[match][0].items.push({
        text: item.name,
        link: `/${item.path}`,
    });
}
/* A function that returns an object. */

console.log(nav);

export default () => nav;

// export default () => ({
//     '/guide/': [
//         {
//             text: 'Getting started',
//             collapsible: true,
//             items: [
//                 { text: 'Introduction', link: '/guide/introduction' },
//                 { text: 'Installation', link: '/guide/install' },
//                 { text: 'Concepts', link: '/guide/concepts' },

//             ]
//         }
//     ],
//     '/shortcuts/': [
//         {
//             text: 'Introduction',
//             collapsible: true,
//             items: [
//                 { text: 'What are Shortcuts?', link: '/shortcuts' },
//                 { text: 'Navigation', link: '/shortcuts/navigation' },

//             ]
//         },
//         {
//             text: 'Introduction',
//             collapsible: true,
//             items: [
//                 { text: 'What are Shortcuts?', link: '/shortcuts' },
//                 { text: 'Navigation', link: '/shortcuts/navigation' },

//             ]
//         },
//     ]
// });
