module.exports = {
  siteMetadata: {
    title: "VolleyStats.co.uk",
    author: "Rod Stockwell (Design) and Ben Brown (Convesion to Gatsby)",
    description: "A website for VolleyStats.co.uk based on design by Rod Stockwell",
    siteUrl: 'https://www.volleystats.co.uk'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'VolleyStats.co.uk',
        short_name: 'VolleyStats',
        start_url: '/',
        background_color: '#15254C',
        theme_color: '#15254C',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-129385862-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "volleystats.co.uk",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify'
  ],
}
