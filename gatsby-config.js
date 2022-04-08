module.exports = {
  siteMetadata: {
    title: `pinSupply`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'gSy8_NyO0a-WSg5pyxK-1yPY9KMB5KJe92bHI9qHDBc',
        spaceId: 'zo9jnchrfrsd',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
