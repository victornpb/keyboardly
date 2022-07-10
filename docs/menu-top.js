export default () => [
    {
        text: 'Getting started',
        link: '/getting-started',
    },
    {
        text: 'Hotkeys',
        link: '/hotkeys/index.html',
        activeMatch: '/hotkeys'
    },
    {
        text: 'Shortcuts',
        link: '/shortcuts/index.html',
        activeMatch: '/shortcuts'
    },
    {
        text: 'Announcer',
        link: '/announcer/',
        activeMatch: '/announcer'
    },
    {
        text: 'Demo',
        items: [
            {
                text: 'Vue demo',
                link: './vue-demo/index.html'
            },
        ],
    },
    // {
    //     text: 'Resources',
    //     items: [
    //         {
    //             text: 'Issues',
    //             link: 'https://github.com/victornpb/keyboardly/issues'
    //         },
    //         {
    //             text: 'Changelog',
    //             link: 'https://github.com/victornpb/keyboardly/blob/main/CHANGELOG.md'
    //         },
    //         {
    //             text: 'Contributing',
    //             link: 'https://github.com/victornpb/keyboardly/blob/main/.github/contributing.md'
    //         },
    //     ],
    // },
];