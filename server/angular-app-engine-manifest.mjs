
export default {
  basePath: 'https://shresthmamchand.github.io/expense_tracker',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
