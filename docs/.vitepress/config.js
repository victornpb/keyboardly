import packageJson from '../../package.json';
import nav from '../menu-top.js';
import sidebar from '../menu-side.js';

const name = packageJson.name;
const projectName = packageJson.nameFull;
const description = packageJson.description;
const repo = packageJson.repository.url.replace(/^git\+/, '').replace(/\.git$/, '');
const author = packageJson.author;
const license = packageJson.license;

export default {
  title: projectName,
  description: description,
  
  base: `/${name}/`, // The base URL the site will be deployed at (https://vitepress.vuejs.org/config/app-configs.html#base)

  lastUpdated: true, // Use git commit to get the timestamp. This option enables the default theme to display the page's last updated time.

  markdown: {
    theme: 'material-palenight',
    lineNumbers: false,
  },

  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    footer: {
      message: `Released under the ${license} License.`,
      copyright: `Copyright © ${author}`,
    },
    socialLinks: [
      { icon: 'github', link: repo },
      // { icon: 'twitter', link: '...' },
      // { icon: 'twitter', link: '...' },
      // { icon: 'discord', link: '...' },
    ],
  }
};
