
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css', integrity: "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", crossorigin: "anonymous"}
      // <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // /*
    // ** Run ESLint on save
    // */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  // グローバルCSS設定
  css: [
    {src:'~/assets/app.scss',lang:'scss'},
  ],
  modules: [
    ['nuxt-sass-resources-loader', [
      '~/assets/variablea.scss',
    ]],
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    "@nuxtjs/axios",
  ],
  plugins: [
    { src: '~/plugins/firebase.js', mode: 'client' },
    '@/plugins/shoppings',
    '@/plugins/stocks',
    '@/plugins/profiles',
  ],
  manifest: {
    name: 'お買い物管理',      // アプリの名称
    short_name: 'お買い物管理',    // ホーム画面に表示される名称
    display: 'standalone',     // 表示モード  'fullscreen' 'standalone' 'minimal-ui' 'browser'
    theme_color: '#ff4a93',    // アプリケーションの既定のテーマ色を定義
    background_color: '#ffdce6',  // 背景の色
    lang: 'ja',                // 言語
    start_url: '/',   // アイコンから起動した時のURL
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
  },

  axios: {
    proxy: true,
    prefix: '/api'
  },

  proxy: {
    '/api/': {
      target: `https://api.line.me`,
      pathRewrite: {
        '^/api/': '/v2/bot/',
      },
    },
  }
  
}

