module.exports = {
  siteMetadata: {
    title: `Jacob D Frank Portfolio`
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "r4boiuzh9xsj",
        accessToken: "c2830ba3e698c4df1559b82d67152ca791727218bba89e2955258a2affeb4990"
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-catch-links', {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: 'img'
      }
    },
     {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96615084-1",
        // Setting this parameter is optional
        anonymize: true
      }
    },
    
  ]
}
