module.exports = {
  siteMetadata: {
    title: 'EE Deutschland',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'i3g6bttat7r4',
        accessToken: '5f6b25771f7e5d8f3ef506e0f294538d17c71d2673e8ba60e05b319dfc927f31'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
  ],
}
