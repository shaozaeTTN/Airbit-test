import webpack from 'webpack'
require('dotenv').config()

export default {
  mode: 'universal',
  dev: process.env.APP_ENV !== 'production',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Sell your beats using the most advanced beat store in the world. Sell on unlimited websites including Soundclick and Facebook'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'sell beats, buy beats, sell beats online, beat marketplace, beat store, flash store, myflashstore, airbit'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  hooks: {
    render: {
      errorMiddleware(app) {
        app.use((error, _req, _res, next) => {
          if (error) {
            console.log('Logged in errorMiddleware', error);
          }
          next(error);
        });
      }
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#6900FF',
    height: '3px'
  },

  router: {
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: '404',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/explore')
    //   })
    // }
  },

  /*
   ** Global CSS
   */
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'font-awesome/css/font-awesome.min.css',
    'jssocials/dist/jssocials.css',
    'jssocials/dist/jssocials-theme-flat.css',
    'swiper/dist/css/swiper.min.css',
    'bootstrap-slider/dist/css/bootstrap-slider.min.css',
    'owl.carousel/dist/assets/owl.carousel.min.css',
    'emojionearea/dist/emojionearea.min.css',
    'sweetalert/dist/sweetalert.css',
    'simple-line-icons/css/simple-line-icons.css',
    'vue-slider-component/theme/default.css',
    'assets/sass/marketplace/global.scss',
    'assets/css/tailwind.css',
    'assets/css/tooltip.css'
  ],

  styleResources: {
    scss: ['~/assets/sass/marketplace/components/_mixins.scss', '~/assets/sass/marketplace/components/_variables.scss']
  },

  layoutTransition: {
    name: 'fade-slow'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/globals.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/scripts.js', mode: 'client' },
    { src: '~/plugins/setup.js', mode: 'client' },
    { src: '~/plugins/impersonation.js', mode: 'client' },
    // { src: '~/plugins/gqlAuth.js' },
    { src: '~/plugins/initApp.js' },

    { src: '~/plugins/initCart.js' },
    { src: '~/plugins/initPlaylistManager.js' },
    { src: '~/plugins/directives.js', mode: 'client' },
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/initEvents.js', mode: 'client' },
    { src: '~plugins/owl.carousel.js', mode: 'client' },
    { src: '~plugins/swiper.js', mode: 'client' },
    { src: '~plugins/wavesurfer.js', mode: 'client' },
    { src: '~/plugins/v-waypoint.client.js', mode: 'client' },
    { src: '~/plugins/authentication.js' },
    { src: '~/plugins/v-tooltip.js' },
    { src: '~/plugins/globalErrorHandlers.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/tailwindcss'
    // 'nuxt-purgecss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://www.npmjs.com/package/@nuxtjs/apollo
    '@nuxtjs/apollo',

    // Doc: https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt',
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ],
    '@nuxtjs/device',
    '@nuxtjs/sentry',
    '@nuxtjs/gtm'
    // 'nuxt-ssr-cache'

    // '@nuxtjs/style-resources'
  ],
  gtm: {
    id: process.env.APP_ENV === 'production' ? 'GTM-TN8XC74' : 'GTM-56PJJLV',
    enabled: true,
    debug: process.env.APP_ENV !== 'production',

    layer: 'dataLayer',
    variables: {},

    pageTracking: true,
    pageViewEventName: 'nuxtRoute',

    autoInit: true,
    respectDoNotTrack: false,

    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',

    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    debug: false
  },

  apollo: {
    tokenName: 'obac', // 'apollo-token', // optional, default: apollo-token
    // cookieAttributes: {
    //   /**
    //    * Define when the cookie will be removed. Value can be a Number
    //    * which will be interpreted as days from time of creation or a
    //    * Date instance. If omitted, the cookie becomes a session cookie.
    //    */
    //   expires: 7, // optional, default: 7 (days)

    //   /**
    //    * Define the path where the cookie is available. Defaults to '/'
    //    */
    //   path: '/', // optional
    //   /**
    //    * Define the domain where the cookie is available. Defaults to
    //    * the domain of the page where the cookie was created.
    //    */
    //   // domain: 'example.com', // optional

    //   /**
    //    * A Boolean indicating if the cookie transmission requires a
    //    * secure protocol (https). Defaults to false.
    //    */
    //   secure: false
    // },
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    authenticationType: 'Bearer', // optional, default: 'Bearer'
    // (Optional) Default 'apollo' definition
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        // loadingKey: 'loading',
        // fetchPolicy: 'cache-and-network',
      }
    },
    errorHandler: '~/plugins/apollo-error-handler.js',
    // required
    clientConfigs: {
      default: '@/apollo/config.js'
    }
  },

  sentry: {
    dsn: process.env.SENTRY_DSN || 'https://8a673a844efe4ff3b1c74ca4f4b9a351@o388245.ingest.sentry.io/5224851',
    disabled: process.env.SENTRY_ENABLED === 'false',
    config: { environment: process.env.APP_ENV || 'staging' }
  },
  // cache: {
  //   useHostPrefix: false,
  //   pages: [
  //     // to cache only root route
  //     /^\/$/,
  //     '/sell-beats'
  //   ],
  //   store: {
  //     type: 'memory',

  //     // maximum number of pages to store in memory
  //     // if limit is reached, least recently used page
  //     // is removed.
  //     max: 100,

  //     // number of seconds to store this page in cache
  //     ttl: 3600
  //   }
  // },

  /*
   ** Build configuration
   */
  build: {
    // vendors: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ],
    transpile: [],
    optimizeCSS: true,
    // extractCSS: true,
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, isServer }) {
      if (isDev) {
        config.devtool = isClient ? 'source-map' : 'inline-source-map'
      }
      // config.module.rules.forEach((rule) => {
      //   if (String(rule.test) === String(/\.(css)$/)) {
      //     // add a second loader when loading images
      //     rule.use.push({
      //       loader: 'style-loader',
      //       options: { injectType: 'singletonStyleTag' }
      //     })
      //   }
      // })
    }
  },

  env: {
    mpUrl: process.env.MP_URL || 'https://airbit.com',
    apiUrl: process.env.API_URL || 'https://api.airbit.com',
    twofaUrl: process.env.TWO_FA_URL || 'https://airbit.com/2fa/validate',
    gqlApi: process.env.GRAPHQL_HTTP || 'https://api.airbit.com/gpl',
    loginUrl: process.env.LOGIN_URL || 'https://api.airbit.com/login',
    logoutUrl: process.env.LOGOUT_URL || 'https://api.airbit.com/logout',
    passwordUrl: process.env.PASSWORD_URL || 'https://airbit.com/password/reset',
    registerUrl: process.env.REGISTER_URL || 'https://airbit.com/register',
    facebookLoginUrl:
      process.env.FACEBOOK_LOGIN_URL || 'https://app.airbit.com/login/facebook',
    twitterLoginUrl:
      process.env.TWITTER_LOGIN_URL || 'https://app.airbit.com/login/twitter',
    blogLink: process.env.BLOG_LINK || 'https://airbit.com/blog',
    setRedirectUrl:
      process.env.SET_REDIRECT_URL || 'https://airbit.com/redirect/set',
    hitmakerUrl:
      process.env.HITMAKE_URL ||
      'https://hitmaker.airbit.com/?utm_source=homepage&utm_medium=homepage_banner&utm_campaign=hitmaker',
    minPrice: process.env.MIN_PRICE || 10,
    defaultAvatar:
      process.env.DEFAULT_AVATAR ||
      'https://cdn.airbit.com/avatars/default@300x.jpg',
    checkoutUrl: process.env.CHECKOUT_URL || 'https://airbit.com/payment',
    sellerDashboardUrl: process.env.SELLER_DASHBOARD_URL || 'https://app.airbit.com',
    buyerDashboardUrl: process.env.BUYER_DASHBOARD_URL || 'https://buyer.airbit.com',
    infinityDemoStoreUrl:
      process.env.INFINITY_DEMO_STORE_URL ||
      'https://allstars.infinity.airbit.com',
    demoEmbedStoreUrl:
      process.env.DEMO_EMBED_STORE_URL || 'https://dopeboyzmuzic.com',
    monthlyGoldUrl:
      process.env.MONTHLY_GOLD_URL ||
      'https://app.airbit.com/subscription/create?package=3&duration=1',
    yearlyGoldUrl:
      process.env.YEARLY_GOLD_URL ||
      'https://app.airbit.com/subscription/create?package=3&duration=12',
    monthlyPlatinumUrl:
      process.env.MONTHLY_PLATINUM_URL ||
      'https://app.airbit.com/subscription/create?package=4&duration=1',
    yearlyPlatinumUrl:
      process.env.YEARLY_PLATINUM_URL ||
      'https://app.airbit.com/subscription/create?package=4&duration=12',
    supportEmail: process.env.SUPPORT_EMAIL || 'support@airbit.com',
    commissionLeasePlatinum: process.env.COMMISSION_LEASE_PLATINUM || '80',
    commissionExclusivePlatinum:
      process.env.COMMISSION_EXCLUSIVE_PLATINUM || '90',
    commissionLeaseGold: process.env.COMMISSION_LEASE_GOLD || '75',
    commissionExclusiveGold: process.env.COMMISSION_EXCLUSIVE_GOLD || '85',
    commissionLeaseStarter: process.env.COMMISSION_LEASE_STARTER || '60',
    commissionExclusiveStarter: process.env.COMMISSION_EXCLUSIVE_STARTER || '70',
    youtubeTermsUrl:
      process.env.YOUTUBE_TERMS_URL ||
      'https://app.airbit.com/distribution/youtube/terms',
    googleAnalyticsLink:
      process.env.GOOGLE_ANALYTICKS_LINK ||
      'https://support.google.com/analytics/bin/answer.py?hl=en&answer=2568871',
    facebookLink: process.env.FACEBOOK_LINK || 'https://www.facebook.com/airbitofficial',
    facebookPrivacyLink:
      process.env.FACABOOK_PRIVACY_LINK ||
      'https://www.facebook.com/about/privacy',
    facebookDevLink:
      process.env.FACABOOK_DEV_LINK ||
      'https://developers.facebook.com/docs/plugins',
    icoLink: process.env.ICO_LINK || 'www.ico.org.uk',
    sendgridLink:
      process.env.SENDGRID_LINK || 'https://sendgrid.com/policies/privacy',
    supportGoogle:
      process.env.SUPPORT_GOOGLE ||
      'https://support.google.com/chrome/answer/95647?hl=en',
    supportMozilla:
      process.env.SUPPORT_MOZILLA ||
      'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences',
    supportMicrosoft:
      process.env.SUPPORT_MICROSOFT ||
      'https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies',
    supportApple:
      process.env.SUPPORT_APPLE || 'https://support.apple.com/kb/PH21411',
    microsoftPrivacyLink:
      process.env.MICROSOFT_PRIVACY_LINK ||
      'https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy',
    twitterLink: process.env.TWITTER_LINK || 'https://twitter.com/airbit',
    youtubeChannelLink:
      process.env.YOUTUBE_CHANNEL_LINK ||
      'https://www.youtube.com/channel/UCUNKXrLFsNmGYcl1w19JLaA',
    instagramLink: process.env.INSTAGRAM_LINK || 'https://www.instagram.com/airbitofficial',
    communityUrl:
      process.env.COMMUNITY_URL || 'https://airbit.com/community',
    podcastUrl:
      process.env.PODCAST_URL || 'https://airbit.com/community/category/podcast'
  }
}

