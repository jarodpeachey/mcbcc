module.exports = {
  siteMetadata: {
    title: `MCBCC Bedwars Tournament`,
    description: ``,
    author: `@jarodpeachey`,
    siteUrl: "https://mcbcc.netlify.app",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/media/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true,
        develop: false,
        tailwind: false,
        whitelist: ["scrolled", "open", "blur", "tr", "td", "table"],
      },
    },
    "gatsby-plugin-split-css",
    {
      resolve: "gatsby-plugin-no-javascript-utils",
      options: {
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeReactHelmetAttrs: true,
        noInlineStyles: false,
        removeGatsbyAnnouncer: true,
        removeFocusWrapper: false,
        removePreloadLinks: false,
      },
    },
    {
      resolve: "gatsby-plugin-no-javascript",
      options: {
        excludeFiles: "request",
      },
    },
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
  ],
};
