
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://shresthmamchand.github.io/expense_tracker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/expense_tracker/login",
    "route": "/expense_tracker"
  },
  {
    "renderMode": 2,
    "route": "/expense_tracker/login"
  },
  {
    "renderMode": 2,
    "route": "/expense_tracker/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/expense_tracker/add-expense"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 488, hash: '8407305f68475ca17f608e04e29ffb8211180144e5e68b114a910f1c74232929', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1001, hash: '5da5993464e5ae102020e5dce549f196a6e50b44080754b926582c6edac212dd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3501, hash: '1e0018b899bedf49235e1c259ca025240416659ed7d398ecfaf49098fe24aa97', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 4002, hash: '35bca7a452a58eba119fd8e4fe012e54661f095603baab8a9268be20715667c0', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'add-expense/index.html': {size: 7218, hash: '01ed6b11e047d995b4b66fc0d8c2c8a59fb2be0464987caa31f27e084da50f33', text: () => import('./assets-chunks/add-expense_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
