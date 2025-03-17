
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-GFUJ3GF2.js",
      "chunk-K6O7BOLI.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D7YNNYMP.js",
      "chunk-K6O7BOLI.js"
    ],
    "route": "/tv"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 543, hash: 'bae63e1b1b7c57e4a21a490f336e3019291e1289cd9100137afcf500baa08409', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '13675af82b0b48620076d8fc03d18fc72e8ceabc45e419406464bad003d84103', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'tv/index.html': {size: 10251, hash: '1eb4d2c2b18bba22ea713fe40636020f26bbb1271ca78bcdbae429e65f627542', text: () => import('./assets-chunks/tv_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10251, hash: 'df733cf5119ff4a58758ee002d0f1944bef167859470efe17fa79c29b75c209b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
