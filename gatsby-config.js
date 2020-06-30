module.exports = {
  siteMetadata: {
    siteUrl: `https://rishitpatel.com`,
    title: `RishitPatel.com`,
    titleTemplate: `%s - Rishit Patel`,
    description: `RishitPatel.com is the personal website of Rishit Patel, a Web Developer and Tech Enthusiastic living and exploring Ontario, Canada.`,
    headline: `Everything best about technology!`,
    author: `Rishit Patel`,
    image: `/images/rp-logo.svg`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    twitter: `@imrishit98`,
    facebook: `RishitPatel.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://rishitpatel.com",
        sitemap: "https://rishitpatel.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-73079055-1",
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-1201474411749621`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rishitpatel.com`,
        short_name: `RP`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rp-logo.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
