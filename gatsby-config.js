/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Fusion Calculator`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `compendium`,
        path: `${__dirname}/compendium`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ['p5hatty', 'p5menu'],
          urls: ["../src/components/fonts.css"],
        },
      },
    },
  ],
}
