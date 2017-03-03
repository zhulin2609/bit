// { 
//   "gitbook": "2.5.2",
//   "structure": { 
//     "summary": "docs/SUMMARY.md" 
//   } 
// }

const pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './docs',
    title: 'GitBook Toolchain Documentation',

    // Use the "official" theme
    plugins: ['sitemap'],

    variables: {
        version: pkg.version
    },

    pluginsConfig: {
        sitemap: {
            hostname: 'https://toolchain.gitbook.com'
        }
    }
};