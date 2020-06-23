module.exports = {
  siteMetadata: {
    title: `Saalik's Blog`,
    description: `Musings by Saalik Lokhandwala - mindfulness, technology, and life.`,
    siteUrl: `https://blog.saaliklok.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        trackPageViews: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              quality: 75,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyAUJLSY_r3bFNZXJP9eidqlt912TxPO_9w',
          authDomain: 'musings-blog.firebaseapp.com',
          databaseURL: 'https://musings-blog.firebaseio.com',
          projectId: 'musings-blog',
          storageBucket: 'musings-blog.appspot.com',
          messagingSenderId: '232633920178',
          appId: '1:232633920178:web:9da6c45c3da6ea5d6337ab',
          measurementId: 'G-KBL6Y23JXB',
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
};
